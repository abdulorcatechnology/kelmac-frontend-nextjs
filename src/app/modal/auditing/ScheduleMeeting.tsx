"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button/Button";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import {
  EnquiryPayload,
  useCreateEnquiryMutation,
} from "@/store/api/enquiriesApi";
import { toast } from "react-hot-toast";

interface ScheduleMeetingProps {
  formData: Partial<EnquiryPayload>;
  onClose: () => void;
}

export default function ScheduleMeeting({
  formData,
  onClose,
}: ScheduleMeetingProps) {
  const router = useRouter();
  const [createEnquiry, { isLoading }] = useCreateEnquiryMutation();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === "calendly.event_scheduled") {
        // Redirect to confirmation page when meeting is scheduled
        router.push("/meeting-confirmed");
        onClose();
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, [router, onClose]);

  const handleScheduleNow = () => {
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  const handleSubmit = async () => {
    // Basic required validation before submit
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.company ||
      !formData.enquiryType
    ) {
      toast.error("Please complete all required fields before submitting");
      return;
    }

    try {
      setSubmitting(true);
      await createEnquiry(formData as EnquiryPayload).unwrap();
      toast.success("Enquiry submitted successfully");
      onClose();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to submit enquiry");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden">
        <div className="bg-gray-100 p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-3xl font-bold text-[#6488E6] font-hedvig">
            Schedule A Meeting
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"
          >
            <IconX className="text-red-500 w-5 h-5 stroke-[2]" />
          </button>
        </div>

        <div className="p-8 bg-white">
          <div className="flex justify-center mb-6">
            <img
              src="/images/celendly.png"
              alt="Calendly Logo"
              className="h-20"
            />
          </div>

          <p className="text-gray-600 mb-8 text-center text-lg">
            Booking a meeting is quick and simple—just pick a day and time that
            fits your schedule. The calendar below shows our availability, and
            once you select a slot, you'll get an instant confirmation.
          </p>

          <div className="flex justify-center items-center">
            <Button
              text="Schedule Now"
              icon={<IconArrowRight className="stroke-primary" />}
              iconPosition="after"
              size="lg"
              color="primary"
              href="/meeting-confirmed"
              onClick={handleScheduleNow}
              spanclassName="px-6"
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <Button
              text={
                submitting || isLoading ? "Submitting..." : "Submit Enquiry"
              }
              icon={<IconArrowRight className="stroke-primary" />}
              iconPosition="after"
              size="lg"
              color="secondary"
              disabled={submitting || isLoading}
              onClick={handleSubmit}
              spanclassName="px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
