"use client";

import Button from "@/components/ui/button/Button";
import { IconArrowRight, IconLock } from "@/components/icons/icons";
import { useEffect, useState } from "react";

interface CourseFeesSummaryProps {
  certificationFee?: number;
  examinationFee?: number;
  taxRate?: number;
  showCouponInput?: boolean;
  showContinueButton?: boolean;
  continueButtonText?: string;
  continueButtonHref?: string;
  onContinue?: () => void;
  onFormSubmit?: () => void;
  className?: string;
}

export default function CourseFeesSummary({
  certificationFee = 99,
  examinationFee = 99,
  taxRate = 10,
  showCouponInput = true,
  showContinueButton = true,
  continueButtonText = "Continue to payment",
  continueButtonHref = "/registration/payment",
  onContinue,
  onFormSubmit,
  className = "",
}: CourseFeesSummaryProps) {
  const [couponCode, setCouponCode] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== "undefined") {
      const course = JSON.parse(localStorage.getItem("selectedCourse") || "{}");
      setSelectedCourse(course);
    }
  }, []);

  // Safe calculations with fallback values
  const regularFee = selectedCourse?.price || 0;
  const discountedPrice = selectedCourse?.discountedPrice || regularFee;
  const discount = regularFee - discountedPrice;

  const subtotal = discountedPrice + certificationFee + examinationFee;
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  const handleContinue = async () => {
    setIsSubmitting(true);
    try {
      if (onFormSubmit) {
        // Call the form submit function instead of navigation
        await onFormSubmit();
      } else if (onContinue) {
        await onContinue();
      }
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full lg:w-1/3 flex flex-col items-center ${className}`}>
      <div className="w-full bg-gray-100 p-6 rounded-xl shadow flex flex-col">
        <h3 className="text-lg font-semibold mb-4 text-black">
          Course Fee Summary
        </h3>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-black">Regular Fee:</span>
            <span className="text-black">${regularFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-black">Certifications Fee:</span>
            <span className="text-black">${certificationFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-black">Examinations Fee:</span>
            <span className="text-black">${examinationFee.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between">
              <span className="text-black">Discount:</span>
              <span className="text-red-500">-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span className="text-black">Tax ({taxRate}%):</span>
            <span className="text-green-500">${taxAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-2 border-t border-gray-300 font-semibold pt-2">
            <span className="text-black">TOTAL</span>
            <span className="text-black">${total.toFixed(2)}</span>
          </div>
        </div>

        {showCouponInput && (
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter Coupon Code"
            className="w-full mt-6 p-3 border border-gray-300 rounded-full bg-white shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none placeholder-gray-400"
          />
        )}

        {showContinueButton && (
          <div className="mt-4">
            <Button
              spanclassName="px-15"
              className={`gap-3 justify-center items-center w-full ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              text={isSubmitting ? "Processing..." : continueButtonText}
              href={onFormSubmit || onContinue ? undefined : continueButtonHref}
              onClick={
                isSubmitting
                  ? undefined
                  : onFormSubmit || onContinue
                  ? handleContinue
                  : undefined
              }
              icon={
                isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                ) : (
                  <IconArrowRight className="stroke-primary" />
                )
              }
              color="primary"
            />
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mt-3 space-x-2 w-full">
        <IconLock width={16} height={16} className="text-secondary" />
        <p className="text-secondary text-sm">
          Your information is secure and encrypted.
        </p>
      </div>
    </div>
  );
}
