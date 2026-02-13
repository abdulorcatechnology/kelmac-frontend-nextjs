"use client";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import Stepper from "../stepper";
import PaymentForm, { PaymentFormRef } from "@/components/ui/form/PaymentForm";
import { IconCalender, IconLock } from "@/components/icons/icons";
import { IconArrowRight } from "@tabler/icons-react";
import { Heading } from "@/components/ui/common/Heading";
import { useState, useRef, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CourseFeesSummary from "@/components/ui/course/CourseFeesSummary";

interface Course {
  name: string;
  date: string;
  regularFee: number;
  certificationFee: number;
  examinationFee: number;
  discount: number;
  taxPercent: number;
  couponDiscount: number;
}

const dummyCourse: Course = {
  name: "ISO 9001:2015 Auditor Training",
  date: "Mar 15-19, 2025",
  regularFee: 1299,
  certificationFee: 99,
  examinationFee: 99,
  discount: 150,
  taxPercent: 10,
  couponDiscount: 50,
};

export default function payemntInfo(course: any) {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, // 👈 your Stripe public key
  );

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(course?.date);
  const paymentFormRef = useRef<PaymentFormRef>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    router.push("/payment");
  };

  const total =
    course.regularFee +
    course.certificationFee +
    course.examinationFee -
    course.discount +
    (course.regularFee +
      course.certificationFee +
      course.examinationFee -
      course.discount) *
      (course.taxPercent / 100) -
    course.couponDiscount;

  const sessions = [
    "Mar 15-19, 2025",
    "Apr 10-14, 2025",
    "May 6-10, 2025",
    "Jun 20-24, 2025",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (session: string) => {
    setSelectedSession(session);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <section className="bg-primary bg-[url('/images/bg/basicinfo.png')] bg-center bg-cover bg-no-repeat lg:min-h-50 flex flex-col items-start justify-center relative md:rounded-3xl">
        <div className="main-container primary-py">
          <div className="text-white md:w-[85%] lg:w-[62%]">
            <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
              Registration Form
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-4 md:mx-0">
        <Stepper currentStep={2} />
        <div className="max-w-6xl mx-auto mt-8 flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-6 lg:mb-0">
            <Heading
              heading="Payment Information"
              headingClassName="text-primary text-left"
            />
            <Elements stripe={stripePromise}>
              <PaymentForm ref={paymentFormRef} />
            </Elements>
          </div>
          <CourseFeesSummary
            certificationFee={99}
            examinationFee={99}
            taxRate={10}
            showCouponInput={true}
            showContinueButton={true}
            continueButtonText="Pay & Confirm"
            // continueButtonHref="/registration/confirmation"
            onFormSubmit={() => paymentFormRef.current?.submitPayment()}
          />
          {/* <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="w-full bg-gray-100 p-6 rounded-xl shadow flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-black">
                Course Fee Summary
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-black">Regular Price:</span>
                  <span className="text-black">
                    ${course.regularFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Certifications Fee:</span>
                  <span className="text-black">
                    ${course.certificationFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Examinations Fee:</span>
                  <span className="text-black">
                    ${course.examinationFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Discount:</span>
                  <span className="text-black">
                    -${course.discount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">
                    Tax ({course.taxPercent}%):
                  </span>
                  <span className="text-green-500">
                    $
                    {(
                      (course.regularFee +
                        course.certificationFee +
                        course.examinationFee -
                        course.discount) *
                      (course.taxPercent / 100)
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Coupon Applied:</span>
                  <span className="text-black">
                    -${course.couponDiscount.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between mt-2 border-t border-gray-300 font-semibold pt-2">
                  <span className="text-black">TOTAL</span>
                  <span className="text-black">${total.toFixed(2)}</span>
                </div>
              </div>

              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="w-full mt-6 p-3 border border-gray-300 rounded-full bg-white shadow-sm focus:ring-1 focus:ring-secondary focus:outline-none placeholder-gray-400"
              />

              <div className="mt-4">
                <Button
                  spanclassName="px-22"
                  className="gap-1 justify-center items-center w-full"
                  text="Confirm & pay"
                  href="/registration/confirmation"
                  icon={<IconArrowRight className="stroke-primary" />}
                  color="primary"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-3 space-x-2 w-full">
              <IconLock width={16} height={16} className="text-secondary" />
              <p className="text-secondary text-sm">
                Your information is secure and encrypted.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
