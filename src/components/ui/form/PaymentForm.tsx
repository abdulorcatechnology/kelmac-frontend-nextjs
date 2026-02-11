"use client";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
  IconVisa,
  IconMastercard,
  IconMastercard2,
  IconPaypal,
  IconBank,
} from "@/components/icons/icons";
import { useCreatePaymentIntentMutation } from "@/store/api/stripeApi";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useRegisterInterpreterMutation } from "@/store/api/authApi";
import {
  useCreateBookingMutation,
  useGetCourseByIdQuery,
} from "@/store/api/courseApi";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ui/ImageUploader";
import PayorderPopup from "@/components/ui/PayorderPopup";

interface PaymentFormRef {
  submitPayment: () => void;
}

interface PaymentFormProps {}

interface PaymentFormData {
  cardholderName: string;
}

interface FormErrors {
  cardholderName?: string;
  general?: string;
}

const PaymentForm = forwardRef<PaymentFormRef, PaymentFormProps>(
  (props, ref) => {
    const [selectedMethod, setSelectedMethod] = useState("credit");
    const [formData, setFormData] = useState<PaymentFormData>({
      cardholderName: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Payorder popup state
    const [showPayorderPopup, setShowPayorderPopup] = useState(false);

    const auth = useSelector((state: any) => state?.auth);

    const [createPayment, { isLoading, isSuccess, isError }] =
      useCreatePaymentIntentMutation();

    const stripe = useStripe();
    const elements = useElements();

    const [courseId, setSelectedCourse] = useState("");
    const [sessionId, setTimetableId] = useState("");

    useEffect(() => {
      if (typeof window !== "undefined") {
        const course: any = JSON.parse(
          localStorage.getItem("selectedCourse") || "{}"
        );
        const courseId: any = course.id;

        setSelectedCourse(courseId);

        const ttId = localStorage.getItem("selectedSessionId") || "";
        setTimetableId(ttId);
      }
    }, []);

    const { data, error, refetch } = useGetCourseByIdQuery(courseId);
    const router = useRouter();
    // Validation functions
    const validateCardholderName = (name: string): string | null => {
      if (!name.trim()) return "Cardholder name is required";
      if (name.trim().length < 2)
        return "Cardholder name must be at least 2 characters";
      if (!/^[a-zA-Z\s]+$/.test(name))
        return "Cardholder name can only contain letters and spaces";
      return null;
    };

    const validateForm = (): FormErrors => {
      const newErrors: FormErrors = {};

      const nameError = validateCardholderName(formData.cardholderName);
      if (nameError) newErrors.cardholderName = nameError;

      // Card validation is handled by Stripe CardElement

      return newErrors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }

      // Clear general error
      if (errors.general) {
        setErrors((prev) => ({
          ...prev,
          general: undefined,
        }));
      }
    };

    // 2️⃣ Find date/time from timeTable
    const [createBooking, { isLoading: isBookingLoading }] =
      useCreateBookingMutation();

    let booking: any = {};

    const handlePay = async () => {
      console.log("Initiating payment...", stripe, elements);

      // Validate form first
      setErrors({});
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast.error("Please fix the errors below");
        return;
      }

      if (!stripe || !elements) {
        // setErrors({
        //   general: "Stripe is not properly loaded. Please refresh the page.",
        // });
        // toast.error("Payment system not ready. Please refresh the page.");
        return;
      }

      if (!auth?.user?.id) {
        setErrors({ general: "User authentication required" });
        toast.error("Please log in to continue with payment");
        return;
      }

      if (!data?.price) {
        setErrors({ general: "Course price information not available" });
        toast.error("Unable to process payment. Course price not found.");
        return;
      }

      setIsSubmitting(true);

      // const session = data?.sessions?.find((x) => x.id === sessionId)
      //   ?.timeBlocks[0];

      const course: any = JSON.parse(
        localStorage.getItem("selectedCourse") || "{}"
      );
      const sessionId = localStorage.getItem("selectedSessionId") || "";
      if (auth?.user?.id && course?.id && sessionId) {
        try {
          booking = await createBooking({
            courseId: course.id,
            studentId: auth?.user?.id,
            sessionId: sessionId,
            timeTableId: sessionId,
            paymentMethod: "stripe",
            status: "pending",
            notes: "Excited to start the class!",
          }).unwrap();
          console.log("Booking created:", booking);
        } catch (error: any) {
          console.error("Booking error:", error);
          if (error?.data?.message) {
            toast.error(error.data.message);
          } else {
            toast.error("Booking failed. Please contact support.");
          }
          return;
        }
      }

      const regularFee = data?.price || 0;
      const discountedPrice = data?.discountedPrice || regularFee;
      // const discount = regularFee - discountedPrice;

      const subtotal = discountedPrice + 99 + 99;
      const taxAmount = (subtotal * 10) / 100;
      const total = subtotal + taxAmount;
      try {
        // 1️⃣ Create payment intent
        const res: any = await createPayment({
          courseId,
          userId: auth?.user?.id,
          amount: total,
          currency: data?.currency || "usd",
          status: "pending",
          metadata: {
            cardholderName: formData.cardholderName,
            paymentMethod: selectedMethod,
          },
        }).unwrap();

        if (!res?.clientSecret) {
          throw new Error(
            "Payment intent creation failed - no client secret received"
          );
        }

        // 4️⃣ Confirm payment with Stripe
        const clientSecret = res.clientSecret;
        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
          throw new Error(
            "Card information not found. Please refresh the page."
          );
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: formData.cardholderName,
            },
          },
        });

        if (result.error) {
          console.error("Payment failed:", result.error.message);
          setErrors({ general: result.error.message || "Payment failed" });
          toast.error(result.error.message || "Payment failed");
        } else if (
          result.paymentIntent &&
          result.paymentIntent.status === "succeeded"
        ) {
          console.log("✅ Payment succeeded:", result.paymentIntent);
          toast.success("Payment successful! Your course has been booked.");

          // Reset form on success
          setFormData({
            cardholderName: "",
          });

          // Optionally redirect to success page
          router.push(`/registration/confirmation/${booking?.id}`);
        }
      } catch (err: any) {
        console.error("Error in payment process:", err);

        let errorMessage = "Payment failed. Please try again.";

        if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.message) {
          errorMessage = err.message;
        } else if (err.data?.message) {
          errorMessage = err.data.message;
        }

        setErrors({ general: errorMessage });
        toast.error(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    };

    // Handle successful Payorder submission
    const handlePayorderSuccess = (data: any) => {
      console.log("Payorder submitted successfully:", data);
      // Optionally redirect to confirmation page
      router.push(`/registration/confirmation/${booking?.id}`);
    };

    // Expose the payment function to parent components
    useImperativeHandle(ref, () => ({
      submitPayment: () => handlePay(),
    }));

    const inputClass = (hasError: boolean) =>
      `w-full border rounded-lg p-3 focus-visible:outline-none focus-visible:ring-1 text-sm text-gray-800 placeholder-gray-400 bg-white transition ${
        hasError
          ? "border-red-300 focus-visible:border-red-500 focus-visible:ring-red-200"
          : "border-gray-300 focus-visible:border-secondary focus-visible:ring-secondary"
      }`;
    const labelClass = "block text-[15px] text-gray-900 mb-2";
    const baseCard =
      "rounded-2xl p-6 border border-gray-200 bg-white transition-all cursor-pointer hover:border-secondary";
    const activeCard = "rounded-2xl p-6 bg-gray-50 shadow-sm transition-all";
    const RadioCircle = ({ checked }: { checked: boolean }) => (
      <span
        className={`relative inline-flex items-center justify-center w-5 h-5 rounded-full border transition-all ${
          checked ? "bg-secondary" : "bg-white border-gray-300"
        }`}
      >
        <span
          className={`absolute w-2 h-2 rounded-full ${
            checked ? "bg-white" : "bg-transparent"
          }`}
        ></span>
      </span>
    );

    //   const handlePayment = async () => {
    //     try {
    //       const response = await createPayment({
    //         courseId,
    //         userId,
    //         amount: 5000, // amount could be dynamic
    //         currency: "usd",
    //         metadata: { paymentMethod: selectedMethod },
    //       }).unwrap();

    //       console.log("✅ Payment created:", response);
    //       // You can redirect or show success message here
    //     } catch (err) {
    //       console.error("❌ Payment creation failed:", err);
    //     }
    //   };

    return (
      <>
        <div className="max-w-2xl space-y-5">
          {/* General Error Message */}
          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">{errors.general}</p>
            </div>
          )}

          {/* CREDIT / DEBIT CARD */}
          <div
            className={selectedMethod === "credit" ? activeCard : baseCard}
            onClick={() => setSelectedMethod("credit")}
          >
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="credit"
                  checked={selectedMethod === "credit"}
                  onChange={() => setSelectedMethod("credit")}
                  className="sr-only"
                />
                <RadioCircle checked={selectedMethod === "credit"} />
                <span className="font-semibold text-[18px] text-gray-900">
                  Credit/Debit Card
                </span>
              </label>

              {/* Payment method icons */}
              <div className="flex items-center space-x-2">
                <IconVisa className="h-6" />
                <IconMastercard className="h-6" />
                <IconMastercard2 className="h-6" />
                <IconPaypal className="h-6" />
              </div>
            </div>

            {/* Expandable credit card input fields */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                selectedMethod === "credit"
                  ? "max-h-[800px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-4 pt-1">
                <div>
                  <label className={labelClass}>Cardholder Name*</label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    placeholder="Enter cardholder name"
                    className={inputClass(!!errors.cardholderName)}
                  />
                  {errors.cardholderName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardholderName}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Card Details*</label>
                  <div className="w-full border rounded-lg p-3 bg-white border-gray-300 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all">
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "14px",
                            color: "#1f2937",
                            "::placeholder": {
                              color: "#9ca3af",
                            },
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          },
                          invalid: {
                            color: "#ef4444",
                            iconColor: "#ef4444",
                          },
                        },
                        hidePostalCode: true,
                      }}
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    💳 For testing: 4242 4242 4242 4242, any future date, any
                    3-digit CVC
                  </p>
                </div>

                <div className="flex items-center gap-2 text-secondary text-sm pt-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Payment information is secure and encrypted</span>
                </div>

                {/* Status messages */}
                {isSuccess && (
                  <p className="text-green-600 mt-2 text-sm">
                    Payment created successfully!
                  </p>
                )}
                {isError && (
                  <p className="text-red-500 mt-2 text-sm">
                    Failed to create payment
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* BANK TRANSFER */}
          <div
            className={selectedMethod === "bank" ? activeCard : baseCard}
            onClick={() => setSelectedMethod("bank")}
          >
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="bank"
                  checked={selectedMethod === "bank"}
                  onChange={() => setSelectedMethod("bank")}
                  className="sr-only"
                />
                <RadioCircle checked={selectedMethod === "bank"} />
                <span className="font-semibold text-[18px] text-gray-900">
                  Bank Transfer
                </span>
              </label>
              <div className="flex items-center">
                <IconBank className="h-8 text-blue-600" />
              </div>
            </div>
          </div>

          {/* STRIPE */}
          <div
            className={selectedMethod === "stripe" ? activeCard : baseCard}
            onClick={() => setSelectedMethod("stripe")}
          >
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="stripe"
                  checked={selectedMethod === "stripe"}
                  onChange={() => setSelectedMethod("stripe")}
                  className="sr-only"
                />
                <RadioCircle checked={selectedMethod === "stripe"} />
                <span className="font-semibold text-[18px] text-gray-900">
                  Stripe
                </span>
              </label>
              <div className="flex items-center">
                <div className="px-3 py-1 bg-purple-100 rounded text-purple-700 font-medium text-sm">
                  stripe
                </div>
              </div>
            </div>
            {selectedMethod === "stripe" && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  You will be redirected to the PayPal website after submitting
                  your order
                </p>
              </div>
            )}
          </div>

          {/* PAYORDER */}
          <div
            className={selectedMethod === "payorder" ? activeCard : baseCard}
            onClick={() => setSelectedMethod("payorder")}
          >
            <div className="flex items-center justify-between">
              <label
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setSelectedMethod("payorder")}
              >
                <input
                  type="radio"
                  value="payorder"
                  checked={selectedMethod === "payorder"}
                  onChange={() => setSelectedMethod("payorder")}
                  className="sr-only"
                />
                <RadioCircle checked={selectedMethod === "payorder"} />
                <span className="font-semibold text-[18px] text-gray-900">
                  Payorder
                </span>
              </label>
            </div>
            {selectedMethod === "payorder" && (
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    Submit your bank slip and payorder number to complete the
                    payment
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPayorderPopup(true)}
                  className="w-full bg-secondary text-white py-3 px-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Upload Bank Slip & PO Number
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Payorder Popup Component */}
        <PayorderPopup
          isOpen={showPayorderPopup}
          onClose={() => setShowPayorderPopup(false)}
          courseId={courseId}
          studentId={auth?.user?.id || ""}
          financialContactId={auth?.user?.id}
          onSuccess={handlePayorderSuccess}
        />
      </>
    );
  }
);

PaymentForm.displayName = "PaymentForm";

export default PaymentForm;
export type { PaymentFormRef };
