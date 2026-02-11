"use client";

import { IconArrowRight, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import { corporateFormFields } from "@/data/auditingform";
import { EnquiryPayload } from "@/store/api/enquiriesApi";
import { toast } from "react-hot-toast";

interface Props {
  formData: Partial<EnquiryPayload>;
  updateFormData: (data: Partial<EnquiryPayload>) => void;
  onNext: () => void;
  onClose: () => void;
}

const CorporateAuditing: React.FC<Props> = ({
  formData,
  updateFormData,
  onNext,
  onClose,
}) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    updateFormData({ [field]: value });
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.subject?.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.company?.trim()) {
      newErrors.company = "Company name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    } else {
      toast.error("Please fill in all required fields correctly");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden">
        <div className="bg-gray-100 p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-3xl text-[#6488E6] font-hedvig">
            Corporate Auditing
          </h2>
          <button
            className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"
            onClick={onClose}
          >
            <IconX className="text-red-500 w-5 h-5 stroke-[2]" />
          </button>
        </div>

        <div className="p-6 bg-white">
          <h3 className="text-2xl mb-6 text-[#182E4B] font-hedvig">
            Primary contact details
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject*
              </label>
              <input
                type="text"
                placeholder="Enter your subject"
                value={formData.subject || ""}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className={`w-full rounded-lg border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] focus:border-transparent transition-all`}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {corporateFormFields[0].label}
                  {corporateFormFields[0].required ? "*" : ""}
                </label>
                <input
                  type={corporateFormFields[0].type}
                  placeholder={corporateFormFields[0].placeholder}
                  value={formData.name || ""}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] focus:border-transparent transition-all`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {corporateFormFields[2].label}
                  {corporateFormFields[2].required ? "*" : ""}
                </label>
                <div
                  className={`flex rounded-lg border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } bg-gray-50 focus-within:ring-2 focus-within:ring-[#6488E6] overflow-hidden`}
                >
                  <select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    className="px-3 py-3 bg-transparent border-none focus:outline-none text-gray-700 font-medium min-w-fit"
                    style={{
                      backgroundImage: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    {corporateFormFields[2].options?.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-white text-gray-700"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <input
                    type={corporateFormFields[2].type}
                    placeholder={corporateFormFields[2].placeholder}
                    value={formData.phone || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "phone",
                        `${selectedCountryCode}${e.target.value}`
                      )
                    }
                    className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none placeholder-gray-400"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {corporateFormFields[1].label}
                {corporateFormFields[1].required ? "*" : ""}
              </label>
              <input
                type={corporateFormFields[1].type}
                placeholder={corporateFormFields[1].placeholder}
                value={formData.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] focus:border-transparent transition-all`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {corporateFormFields[3].label}
                {corporateFormFields[3].required ? "*" : ""}
              </label>
              <input
                type={corporateFormFields[3].type}
                placeholder={corporateFormFields[3].placeholder}
                value={formData.company || ""}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className={`w-full rounded-lg border ${
                  errors.company ? "border-red-500" : "border-gray-300"
                } px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] focus:border-transparent transition-all`}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {corporateFormFields[4].label}
              </label>
              <input
                type={corporateFormFields[4].type}
                placeholder={corporateFormFields[4].placeholder}
                value={formData.designation || ""}
                onChange={(e) =>
                  handleInputChange("designation", e.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] focus:border-transparent transition-all"
              />
            </div>
          </form>
        </div>

        <div className="bg-[#6488E6] p-6 flex justify-center">
          <Button
            className="gap-1 bg-[#182E4B]"
            spanclassName="px-6"
            text="Proceed to Next"
            iconclassName="bg-white rounded-full p-1"
            icon={<IconArrowRight className="text-[#182E4B]" />}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default CorporateAuditing;
