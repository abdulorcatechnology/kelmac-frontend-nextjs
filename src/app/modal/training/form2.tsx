"use client";
import Button from "@/components/ui/button/Button";
import React from "react";
import { corporateTrainingFields } from "@/data/trainingform";
import { IconChevronDown, IconX, IconArrowRight } from "@tabler/icons-react";
import { EnquiryPayload } from "@/store/api/enquiriesApi";

interface Props {
  formData: Partial<EnquiryPayload>;
  updateFormData: (data: Partial<EnquiryPayload>) => void;
  onBack: () => void;
  onNext: () => void;
}

const CorporateTrainingModal: React.FC<Props> = ({
  formData,
  updateFormData,
  onBack,
  onNext,
}) => {
  // Map field labels to formData keys
  const fieldKeyMap: Record<string, string> = {
    "Please select a Scheme": "scheme",
    "Please select a Training Category": "trainingCategory",
    "Please select a Training Type": "trainingType",
    "Please select Training delivery": "trainingDelivery",
    "Number of Learners": "numberOfLearners",
    "Preferred Learning Event Date": "preferredLearningDate",
  };

  const handleFieldChange = (label: string, value: string | number) => {
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
            Corporate Training
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
            We deliver tailored corporate training programs designed to upskill
            your workforce and drive organizational excellence. From leadership
            development and technical skills to compliance and soft skills
            training, our expert-led sessions combine practical knowledge with
            real-world application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporateTrainingFields.map((field, index) => (
              <div key={index} className="mb-4 relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <>
                    <select
                      className="w-full p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] text-gray-500 appearance-none pr-10 border border-gray-300"
                      value={
                        formData[
                          fieldKeyMap[field.label] as keyof EnquiryPayload
                        ] || ""
                      }
                      onChange={(e) =>
                        handleFieldChange(field.label, e.target.value)
                      }
                    >
                      <option value="" disabled hidden>
                        Select from the list
                      </option>
                      {field.options?.map((option, i) => (
                        <option
                          key={i}
                          value={option}
                          className="text-gray-700"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown
                      size={20}
                      stroke={2}
                      className="absolute right-3 top-11 text-[#6488E6] pointer-events-none"
                    />
                  </>
                ) : field.type === "number" ? (
                  <input
                    type="number"
                    className="w-full p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] text-gray-700 border border-gray-300"
                    value={
                      formData[
                        fieldKeyMap[field.label] as keyof EnquiryPayload
                      ] || ""
                    }
                    onChange={(e) =>
                      handleFieldChange(field.label, parseInt(e.target.value))
                    }
                    min="1"
                    placeholder={field.placeholder}
                  />
                ) : field.type === "date" ? (
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] text-gray-700 border border-gray-300"
                    value={
                      (formData[
                        fieldKeyMap[field.label] as keyof EnquiryPayload
                      ] as string) || undefined
                    }
                    onChange={(e) =>
                      handleFieldChange(field.label, e.target.value)
                    }
                  />
                ) : (
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6488E6] text-gray-700 border border-gray-300"
                    value={
                      formData[
                        fieldKeyMap[field.label] as keyof EnquiryPayload
                      ] || ""
                    }
                    onChange={(e) =>
                      handleFieldChange(field.label, e.target.value)
                    }
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
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

export default CorporateTrainingModal;
