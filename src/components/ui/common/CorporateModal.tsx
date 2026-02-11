'use client';

import { IconArrowRight } from "@tabler/icons-react";
import React, { useState } from 'react';
import Button from "@/components/ui/button/Button";
import { FormField } from '@/data/form'; 

interface CorporateModalProps {
  type: 'Training' | 'Consulting' | 'Auditing';
  formFields: FormField[];
  onClose: () => void;
}

const CorporateModal: React.FC<CorporateModalProps> = ({ type, formFields, onClose }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880");

  return (
    <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-white/50 p-4">
          <h2 className="text-2xl text-[#6488E6] font-serif">
            Corporate {type}
          </h2>
          <button
            className="text-2xl text-red-500 hover:text-red-700 focus:outline-none"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        {/* Form */}
        <div className="p-6 bg-white">
          <h3 className="text-2xl mb-4 text-[#182E4B] font-serif">
            Primary contact details
          </h3>
          <form className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}{field.required ? '*' : ''}
                </label>
                {field.type === 'select' ? (
                  <select
                    className="w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-100/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'tel' ? (
                  <div className="relative">
                    <div className="flex rounded-md border border-gray-300 bg-gray-100/30 focus-within:ring-2 focus-within:ring-blue-400">
                      <select
                        value={selectedCountryCode}
                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                        className="px-3 py-2 bg-transparent border-none focus:outline-none text-gray-700 font-medium min-w-fit appearance-none"
                        style={{
                          backgroundImage: 'none',
                          WebkitAppearance: 'none',
                          MozAppearance: 'none'
                        }}
                      >
                        {field.options?.map((option) => (
                          <option key={option} value={option} className="bg-white text-gray-700">
                            {option}
                          </option>
                        ))}
                      </select>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="flex-1 px-3 py-2 bg-transparent border-none focus:outline-none placeholder-gray-400"
                      />
                    </div>
                  </div>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-100/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </div>
            ))}
          </form>
        </div>
        {/* Bottom */}
        <div className="bg-[#6488E6] p-4 flex justify-center">
          <Button
            className="gap-1 bg-[#182E4B]"
            spanclassName="px-4"
            text="Proceed to Next"
            iconclassName="bg-white rounded-full p-1"
            icon={<IconArrowRight className="text-[#182E4B]" />}
          />
        </div>
      </div>
    </div>
  );
};

export default CorporateModal;