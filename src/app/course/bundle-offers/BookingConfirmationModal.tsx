"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/ui/button/Button";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import DateSelectionPopup from "@/app/course/bundle-offers/DateSelectionPopup";
import { Course } from "@/types/course";

interface ConfirmBookingProps {
  onClose: () => void;
  onConfirm: () => void;
  course?: Course;
  timetable?: {
    id: string;
    date: string;
    description: string;
    time: string;
  }[];
  sessions?: {
    id: string;
    timeBlocks: {
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
      timeZone: string;
    }[];
    seatsLeft: number;
    type: string;
  }[];
}

export default function ConfirmBooking({
  onClose,
  onConfirm,
  course,
  sessions,
}: ConfirmBookingProps) {
  const [mounted, setMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [items, setItems] = useState([
    {
      id: 1,
      text: `I have completed "Intro to Quality Standards" (or have equivalent foundational knowledge).`,
      checked: true,
    },
    {
      id: 2,
      text: `I have at least 2 years of work experience in operations, management, or a related field.`,
      checked: true,
    },
    {
      id: 3,
      text: `I have basic knowledge of English communication (reading & writing).`,
      checked: true,
    },
    {
      id: 4,
      text: `I have read and accept the Terms & Conditions.`,
      checked: true,
    },
    {
      id: 5,
      text: `I understand the Refund & Cancellation Policy.`,
      checked: false,
    },
  ]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it)),
    );
  };

  const allItemsChecked = items.every((item) => item.checked);

  const handleConfirm = () => {
    if (allItemsChecked) {
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-sm px-4">
        <div className="relative bg-white rounded-2xl w-full max-w-[700px] shadow-xl p-8">
          {/* Close (X) button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <IconX size={22} stroke={2} />
          </button>

          {/* Top Icon */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-600">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="text-center mb-8">
            <h2 className="font-hedvig text-3xl font-medium text-gray-800 mb-3">
              Before You Confirm Your Booking
            </h2>
            <p className="text-gray-600 text-base">
              Please review and confirm the following to complete your
              enrollment.
            </p>
          </div>

          {/* Checklist */}
          <div className="mb-8 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                {/* Checkmark Circle */}
                <div
                  className={` w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                    item.checked
                      ? "bg-green-500 border-green-500"
                      : "bg-gray-200 border-gray-300"
                  }`}
                >
                  {item.checked && (
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4.5L4.5 8L11 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                {/* Text */}
                <div className="text-gray-800 text-sm leading-relaxed">
                  {item.id === 4 ? (
                    <>
                      I have read and accept the{" "}
                      <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Terms & Conditions
                      </a>
                      .
                    </>
                  ) : item.id === 5 ? (
                    <>
                      I understand the{" "}
                      <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Refund & Cancellation Policy
                      </a>
                      .
                    </>
                  ) : (
                    item.text
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center">
            <Button
              className={`rounded-full font-medium px-6 py-3 gap-4 transition-all duration-200 ${
                allItemsChecked
                  ? "bg-primary text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              spanclassName=""
              text="Confirm & Book My Seat"
              iconclassName={`rounded-full ${
                allItemsChecked
                  ? "bg-white text-primary"
                  : "bg-gray-400 text-gray-600"
              }`}
              icon={
                <IconArrowRight
                  className={
                    allItemsChecked ? "stroke-primary" : "stroke-gray-600"
                  }
                  size={16}
                />
              }
              onClick={handleConfirm}
            />
          </div>
        </div>
      </div>

      {showPopup && (
        <DateSelectionPopup
          course={course}
          sessions={sessions || []}
          onClose={handlePopupClose}
        />
      )}
    </>,
    document.body,
  );
}
