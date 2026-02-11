"use client";
import React, { use, useState } from "react";
import { toast } from "react-hot-toast";
import ImageUploader from "@/components/ui/ImageUploader";
import { useCreatePayorderMutation } from "@/store/api/stripeApi";
import axios from "axios";
import { useSelector } from "react-redux";
import { useGetCourseByIdQuery } from "@/store";
import { useCreateBookingMutation } from "@/store/api/courseApi";

interface PayorderPopupProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  studentId: string;
  financialContactId?: string;
  onSuccess?: (data: any) => void;
}

const PayorderPopup: React.FC<PayorderPopupProps> = ({
  isOpen,
  onClose,
  courseId,
  studentId,
  financialContactId,
  onSuccess,
}) => {
  const [poNumber, setPoNumber] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // RTK Query mutation
  const [createPayorder, { isLoading: isCreatingPayorder }] =
    useCreatePayorderMutation();

  // Handle file selection
  const handleFileSelect = (file: File) => {
    setUploadedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle successful file upload
  const handleUploadSuccess = (url: string) => {
    setUploadedFileUrl(url);
    console.log("File uploaded successfully:", url);
  };

  // Handle upload error
  const handleUploadError = (error: any) => {
    console.error("File upload failed:", error);
    setUploadedFile(null);
    setFilePreview(null);
  };

  // Handle file removal
  const handleFileRemove = () => {
    setUploadedFile(null);
    setFilePreview(null);
    setUploadedFileUrl(null);
  };

  // Reset form
  const resetForm = () => {
    setPoNumber("");
    setUploadedFile(null);
    setFilePreview(null);
    setUploadedFileUrl(null);
  };

  // Handle close
  const handleClose = () => {
    if (!isSubmitting) {
      resetForm();
      onClose();
    }
  };

  const { data: courseData } = useGetCourseByIdQuery(courseId);
  const auth = useSelector((state: any) => state?.auth);

  const [createBooking, { isLoading: isBookingLoading }] =
    useCreateBookingMutation();
  // Handle form submission
  const handleSubmit = async () => {
    // Validation
    if (!poNumber.trim()) {
      toast.error("Please enter PO Number");
      return;
    }

    if (!uploadedFileUrl) {
      toast.error("Please upload bank slip image");
      return;
    }

    setIsSubmitting(true);
    const sessionId = localStorage.getItem("selectedSessionId");

    const course: any = JSON.parse(
      localStorage.getItem("selectedCourse") || "{}",
    );

    if (auth?.user?.id && course?.id && sessionId) {
      try {
        await createBooking({
          courseId: course.id,
          studentId: auth?.user?.id,
          sessionId: sessionId,
          timeTableId: sessionId,
          paymentMethod: "purchase_order",
          status: "pending",
          notes: "Excited to start the class!",
        }).unwrap();
      } catch (error: any) {
        console.error("Booking error:", error);
        if (error?.data?.message) {
          toast.error(error.data.message);
        } else {
          toast.error("Booking failed. Please contact support.");
        }
        setIsSubmitting(false);
        return;
      }
    }
    try {
      // Create PO with the uploaded file URL using RTK mutation
      const poData = {
        poNumber: poNumber.trim(),
        instructor: (courseData?.instructor as any)?.id,
        studentId: studentId,
        courseId: courseId,
        financialContactId: financialContactId || studentId,
        bankSlipUrl: uploadedFileUrl,
        submittedAt: new Date().toISOString(),
      };

      const poResponse = await createPayorder(poData).unwrap();

      toast.success("Payorder submitted successfully!");

      // Call success callback if provided
      if (onSuccess) {
        onSuccess(poResponse);
      }
      const data = poResponse.data;

      // Reset and close
      resetForm();
      onClose();
    } catch (error: any) {
      console.error("Payorder submission error:", error);
      const errorMessage =
        error?.data?.message || error?.message || "Failed to submit payorder";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      {/* Transparent Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b border-gray-200 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Submit Payorder</h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* PO Number Input */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-2 font-medium">
              Payorder Number*
            </label>
            <input
              type="text"
              value={poNumber}
              onChange={(e) => setPoNumber(e.target.value)}
              placeholder="e.g., PO-2025-00045"
              disabled={isSubmitting}
              className="w-full border rounded-lg p-3 focus-visible:outline-none focus-visible:ring-2 text-sm text-gray-800 placeholder-gray-400 bg-white transition border-gray-300 focus-visible:border-blue-500 focus-visible:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-2 font-medium">
              Bank Slip Image*
            </label>

            <ImageUploader
              onFileSelect={handleFileSelect}
              onFileRemove={handleFileRemove}
              preview={filePreview}
              label="Upload Bank Slip"
              helperText="PNG, JPG, JPEG"
              maxSize={5}
              disabled={isSubmitting}
              autoUpload={true}
              onUploadSuccess={handleUploadSuccess}
              onUploadError={handleUploadError}
            />
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex gap-2">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xs text-blue-800">
                Please ensure the bank slip is clear and readable. Include the
                PO number exactly as it appears on your payorder document.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white p-6 border-t border-gray-200 flex gap-3 rounded-b-2xl">
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || !poNumber.trim() || !uploadedFileUrl}
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Payorder"
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PayorderPopup;
