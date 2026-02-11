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
import { useGetCourseByIdQuery } from "@/store/api/courseApi";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface PaymentFormRef {
  submitPayment: () => void;
}

interface PaymentFormProps {}

interface PaymentFormData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface FormErrors {
  cardholderName?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  general?: string;
}

const PaymentForm = forwardRef<PaymentFormRef, PaymentFormProps>(
  (props, ref) => {
    const [selectedMethod, setSelectedMethod] = useState("credit");
    const [formData, setFormData] = useState<PaymentFormData>({
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        const courseId = course?.id || "";
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

    const validateCardNumber = (cardNumber: string): string | null => {
      const cleanNumber = cardNumber.replace(/\s/g, "");
      if (!cleanNumber) return "Card number is required";
      if (!/^\d{13,19}$/.test(cleanNumber))
        return "Card number must be 13-19 digits";

      // List of valid Stripe test card numbers
      const validTestCards = [
        "4242424242424242", // Visa
        "4000056655665556", // Visa (debit)
        "5555555555554444", // Mastercard
        "2223003122003222", // Mastercard (2-series)
        "5200828282828210", // Mastercard (debit)
        "378282246310005", // American Express
        "371449635398431", // American Express
        "6011111111111117", // Discover
        "6011000990139424", // Discover
        "3056930009020004", // Diners Club
        "36227206271667", // Diners Club (14 digit)
        "3566002020360505", // JCB
        "6200000000000005", // UnionPay
      ];

      // Check if it's a known test card first
      if (validTestCards.includes(cleanNumber)) {
        return null; // Valid test card
      }

      // Basic Luhn algorithm check for other cards
      const luhnCheck = (num: string) => {
        let sum = 0;
        let shouldDouble = false;
        for (let i = num.length - 1; i >= 0; i--) {
          let digit = parseInt(num.charAt(i), 10);
          if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
          }
          sum += digit;
          shouldDouble = !shouldDouble;
        }
        return sum % 10 === 0;
      };

      if (!luhnCheck(cleanNumber)) {
        return "Invalid card number. For testing, use: 4242 4242 4242 4242";
      }
      return null;
    };

    const validateExpiryDate = (expiryDate: string): string | null => {
      if (!expiryDate) return "Expiry date is required";

      const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!regex.test(expiryDate)) return "Expiry date must be in MM/YY format";

      const [month, year] = expiryDate.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      const expYear = parseInt(year, 10);
      const expMonth = parseInt(month, 10);

      if (
        expYear < currentYear ||
        (expYear === currentYear && expMonth < currentMonth)
      ) {
        return "Card has expired";
      }

      return null;
    };

    const validateCVV = (cvv: string): string | null => {
      if (!cvv) return "CVV is required";
      if (!/^\d{3,4}$/.test(cvv)) return "CVV must be 3 or 4 digits";
      return null;
    };

    const validateForm = (): FormErrors => {
      const newErrors: FormErrors = {};

      const nameError = validateCardholderName(formData.cardholderName);
      if (nameError) newErrors.cardholderName = nameError;

      const cardError = validateCardNumber(formData.cardNumber);
      if (cardError) newErrors.cardNumber = cardError;

      const expiryError = validateExpiryDate(formData.expiryDate);
      if (expiryError) newErrors.expiryDate = expiryError;

      const cvvError = validateCVV(formData.cvv);
      if (cvvError) newErrors.cvv = cvvError;

      return newErrors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      let formattedValue = value;

      // Format card number with spaces
      if (name === "cardNumber") {
        formattedValue = value
          .replace(/\s/g, "")
          .replace(/(\d{4})/g, "$1 ")
          .trim();
        if (formattedValue.length > 19)
          formattedValue = formattedValue.slice(0, 19);
      }

      // Format expiry date
      if (name === "expiryDate") {
        formattedValue = value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "$1/$2");
        if (formattedValue.length > 5)
          formattedValue = formattedValue.slice(0, 5);
      }

      // Format CVV
      if (name === "cvv") {
        formattedValue = value.replace(/\D/g, "").slice(0, 4);
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
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

        const DateAndTime: any = data?.timeTable?.find(
          (item: any) => item?.id === sessionId
        );

        if (!DateAndTime) {
          throw new Error("Selected time slot not found");
        }

        console.log(DateAndTime, "DateAndTime");

        const formatted = {
          date: new Date(DateAndTime?.date).toISOString().split("T")[0], // "2025-11-17"
          time: DateAndTime?.time
            .split("-")[0]
            .trim()
            .replace("AM", "")
            .replace("PM", "")
            .trim(),
        };

        const [hour, minute] = formatted.time.split(":").map(Number);
        const timeWithZero = `${hour < 10 ? "0" + hour : hour}:${
          minute < 10 ? "0" + minute : minute
        }`;

        // 3️⃣ Create class schedule

        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/class-schedule`,
            {
              course: courseId,
              instructor: (data?.instructor as any)?.id,
              students: auth?.user?.id,
              date: formatted?.date,
              time: timeWithZero,
              duration: data?.sessions?.[0]?.duration,
              securityKey: "a6d2b99a-f81a-4cb5-a123-984e07fd9e33",
              status: "scheduled",
              progress: 0,
            }
          );
        } catch (scheduleError: any) {
          console.error("Class schedule creation failed:", scheduleError);
          throw new Error("Failed to create class schedule");
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
            cardNumber: "",
            expiryDate: "",
            cvv: "",
          });

          // Optionally redirect to success page
          router.push("/registration/confirmation");
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
                <label className={labelClass}>Card Number*</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                  className={inputClass(!!errors.cardNumber)}
                  maxLength={19}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.cardNumber}
                  </p>
                )}
                {!errors.cardNumber && (
                  <p className="text-gray-500 text-xs mt-1">
                    💳 For testing: 4242 4242 4242 4242 (Visa) or 5555 5555 5555
                    4444 (Mastercard)
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className={labelClass}>Expiry Date*</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className={inputClass(!!errors.expiryDate)}
                    maxLength={5}
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.expiryDate}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className={labelClass}>CVC/CVV*</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className={inputClass(!!errors.cvv)}
                    maxLength={4}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                  )}
                </div>
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
            <label className="flex items-center gap-3 cursor-pointer">
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
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                You will be redirected to the PayPal website after submitting
                your order
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

PaymentForm.displayName = "PaymentForm";

export default PaymentForm;
export type { PaymentFormRef };
