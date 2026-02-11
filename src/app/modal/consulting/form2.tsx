"use client";
import Button from "@/components/ui/button/Button";
import React from "react";
import { corporateConsultingFields } from "@/data/consultingform";
import { IconChevronDown, IconX, IconArrowRight } from "@tabler/icons-react";
import { EnquiryPayload } from "@/store/api/enquiriesApi";

interface Props {
  formData: Partial<EnquiryPayload>;
  updateFormData: (data: Partial<EnquiryPayload>) => void;
  onBack: () => void;
  onNext: () => void;
}

const CorporateConsultingModal: React.FC<Props> = ({
  formData,
  updateFormData,
  onBack,
  onNext,
}) => {
  const mid = Math.ceil(corporateConsultingFields.length / 2);
  const leftFields = corporateConsultingFields.slice(0, mid);
  const rightFields = corporateConsultingFields.slice(mid);

  // Map field labels to formData keys
  const fieldKeyMap: Record<string, string> = {
    "Please select a Scheme": "scheme",
    "Please select Organization Type": "organizationType",
    Language: "language",
    "Certifications held (if any)": "certificationsHeld",
    Delivery: "delivery",
    "Please select an Industry": "industry",
    "Number of Locations/Suppliers": "numberOfLocations",
    "Hours of Operation": "hoursOfOperation",
    "Certified Scope": "certifiedScope",
    "Auditing delivery": "auditingDelivery",
  };

  const handleSelectChange = (label: string, value: string) => {
    const key = fieldKeyMap[label];
    if (key) {
      updateFormData({ [key]: value });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden">
        <div className="bg-gray-100 p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-3xl text-[#6488E6] font-hedvig">
            Corporate Consulting
          </h2>
          <button
            className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"
            onClick={onBack}
          >
            <IconX className="text-red-500 w-5 h-5 stroke-[2]" />
          </button>
        </div>

        <div className="p-6 bg-white">
          <p className="text-gray-600 mb-8">
            We provide strategic consulting services designed to help
            organizations unlock growth, optimize operations, and navigate
            change with confidence. Our approach combines industry expertise
            with actionable insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              {leftFields.map((field, index) => (
                <div key={index} className="mb-4 relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <select
                    className="w-full p-2 text-sm rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] text-gray-600 appearance-none pr-8 border border-gray-300"
                    value={
                      formData[
                        fieldKeyMap[field.label] as keyof EnquiryPayload
                      ] || ""
                    }
                    onChange={(e) =>
                      handleSelectChange(field.label, e.target.value)
                    }
                  >
                    <option value="" disabled hidden>
                      Select from the list
                    </option>
                    {field.options?.map((option, i) => (
                      <option key={i} value={option} className="text-gray-700">
                        {option}
                      </option>
                    ))}
                  </select>
                  <IconChevronDown
                    size={20}
                    stroke={2}
                    className="absolute right-3 top-11 text-[#6488E6] pointer-events-none"
                  />
                </div>
              ))}
            </div>

            <div>
              {rightFields.map((field, index) => (
                <div key={index} className="mb-4 relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <select
                    className="w-full p-2 text-sm rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] text-gray-600 appearance-none pr-8 border border-gray-300"
                    value={
                      formData[
                        fieldKeyMap[field.label] as keyof EnquiryPayload
                      ] || ""
                    }
                    onChange={(e) =>
                      handleSelectChange(field.label, e.target.value)
                    }
                  >
                    <option value="" disabled hidden>
                      Select from the list
                    </option>
                    {field.options?.map((option, i) => (
                      <option key={i} value={option} className="text-gray-700">
                        {option}
                      </option>
                    ))}
                  </select>
                  <IconChevronDown
                    size={20}
                    stroke={2}
                    className="absolute right-3 top-11 text-[#6488E6] pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#6488E6] p-6 flex justify-center gap-4">
          <Button
            className="gap-1 bg-[#182E4B]"
            spanclassName="px-6"
            text="Proceed to Next"
            iconclassName="bg-white rounded-full p-1"
            icon={<IconArrowRight className="text-[#182E4B]" />}
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};

export default CorporateConsultingModal;
