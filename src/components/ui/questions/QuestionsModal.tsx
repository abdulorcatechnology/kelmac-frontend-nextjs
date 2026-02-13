"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/button/Button";
import {
  IconArrowRight,
  IconArrowLeft,
  IconX,
  IconChevronDown,
} from "@tabler/icons-react";
import Sidebar from "@/components/ui/questions/questions";
import TrainingOption from "@/components/ui/questions/trainingoption";
import { subjects, industries, trainingOptions } from "@/data/questions";
import type {
  FormData,
  FormErrors,
  QuestionStep,
  QuestionsModalProps,
} from "@/data/questionTypes";
import { Heading } from "../common/Heading";
import { useRouter } from "next/navigation";

const QuestionsModal: React.FC<QuestionsModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<QuestionStep>(1);
  const [showWaiting, setShowWaiting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    industry: "",
    trainingType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    subject: false,
    industry: false,
    trainingType: false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (showWaiting) {
      const timer = setTimeout(async () => {
        console.log("Form submitted:", formData);

        if (onSubmit) {
          await onSubmit(formData);
        }

        router.push(
          `course/suggested-course?subject=${formData.subject}&industry=${formData.industry}&trainingType=${formData.trainingType}`,
        );
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showWaiting, formData, onSubmit, router]);

  const handleClose = () => {
    setCurrentStep(1);
    setShowWaiting(false);
    setFormData({ subject: "", industry: "", trainingType: "" });
    setErrors({ subject: false, industry: false, trainingType: false });
    onClose();
  };

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {
      subject: !formData.subject,
      industry: !formData.industry,
      trainingType: false,
    };
    setErrors(newErrors);
    return !newErrors.subject && !newErrors.industry;
  };

  const validateStep2 = (): boolean => {
    if (!formData.trainingType) {
      setErrors({ ...errors, trainingType: true });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setShowWaiting(true);
      }
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
      setErrors({ ...errors, trainingType: false });
    }
  };

  const updateFormField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  if (!isOpen) return null;

  if (showWaiting) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-start justify-center pt-10 z-50 overflow-y-auto">
        <div className="bg-white shadow-md p-6 flex flex-col items-center justify-center rounded-[32px] max-w-[700px] w-full mx-4 min-h-[486px]">
          <div className="flex justify-center mb-6">
            <div
              className="w-24 h-24 border-8 border-secondary border-t-transparent rounded-full animate-spin"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
          <h2
            className="text-4xl text-primary text-center mb-4"
            style={{ fontFamily: '"Hedvig Letters Serif", serif' }}
          >
            Please Wait A Few Seconds
          </h2>
          <p className="text-gray-600 text-center max-w-md">
            With the info you give us, our system will suggest a cool course to
            help you hit your learning goals!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-start pt-5 justify-center z-50 overflow-y-auto">
      <div className="max-w-4xl bg-white rounded-3xl shadow-md overflow-hidden w-full m-4">
        <div className="flex justify-between items-center p-6">
          <h1
            className="text-4xl text-gray-800"
            style={{ fontFamily: "Hedvig Letters Serif" }}
          >
            Suitable Course
          </h1>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-full bg-white hover:bg-red-50"
            aria-label="Close modal"
          >
            <IconX className="text-red-500 w-4 h-4 stroke-[2]" />
          </button>
        </div>

        <div
          className="flex flex-col md:flex-row rounded-3xl ml-2 mr-2 mb-2 overflow-hidden p-2 md:p-4"
          style={{ backgroundColor: "#6488E6" }}
        >
          <div className="w-1/3 py-8 px-4">
            <Sidebar activeIndex={currentStep - 1} />
          </div>

          <div className="w-full md:w-2/3 md:ml-2 md:mr-2 mb-2 mt-2 flex flex-col">
            <div className="bg-white p-8 rounded-3xl">
              {currentStep === 1 && (
                <>
                  <div className="flex items-center text-sm text-blue-600 mb-4">
                    <span className="text-blue-600 mr-2 text-xl">•</span>
                    Question 1/2
                  </div>

                  <Heading
                    heading="Which curriculum are you interested in?"
                    headingClassName="text-primary text-xl md:text-3xl text-left"
                  />

                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Please select a Subject
                        {errors.subject && (
                          <span className="text-red-500 ml-2">*Required</span>
                        )}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          updateFormField("subject", e.target.value)
                        }
                        className={`w-full p-3 border rounded-lg bg-white text-gray-600 appearance-none pr-10 ${
                          errors.subject ? "border-red-500" : ""
                        }`}
                        style={
                          !errors.subject ? { borderColor: "#6488E6" } : {}
                        }
                      >
                        <option value="">Subject list</option>
                        {subjects.map((subj) => (
                          <option key={subj.value} value={subj.value}>
                            {subj.label}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown className="absolute right-3 top-11 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Please select your Industry
                        {errors.industry && (
                          <span className="text-red-500 ml-2">*Required</span>
                        )}
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          updateFormField("industry", e.target.value)
                        }
                        className={`w-full p-3 border rounded-lg bg-white text-gray-600 appearance-none pr-10 ${
                          errors.industry ? "border-red-500" : ""
                        }`}
                        style={
                          !errors.industry ? { borderColor: "#6488E6" } : {}
                        }
                      >
                        <option value="">Industry list</option>
                        {industries.map((ind) => (
                          <option key={ind.value} value={ind.value}>
                            {ind.label}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown className="absolute right-3 top-11 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>

                    <div className="flex justify-center">
                      <Button
                        className="gap-0 bg-[#182E4B]"
                        spanclassName="px-4"
                        text="Next"
                        iconclassName="bg-white rounded-full p-1"
                        icon={<IconArrowRight className="text-[#182E4B]" />}
                        onClick={handleNext}
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="flex items-center text-sm text-blue-600 mb-4">
                    <span className="text-blue-600 mr-2 text-xl">•</span>
                    Question 2/2
                  </div>

                  <Heading
                    heading="What type of training do you need?"
                    headingClassName="text-primary text-3xl text-left"
                  />
                  {errors.trainingType && (
                    <span className="text-red-500 text-sm ml-2">
                      *Please select an option
                    </span>
                  )}

                  <div className="space-y-4 mb-6">
                    {trainingOptions.map((option) => (
                      <TrainingOption
                        key={option.id}
                        id={option.id}
                        label={option.label}
                        description={option.description}
                        checked={formData.trainingType === option.id}
                        onChange={() =>
                          updateFormField("trainingType", option.id)
                        }
                      />
                    ))}
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button
                      className="gap-0 bg-light hover:bg-gray-200 border-0 text-primary"
                      spanclassName="px-4"
                      text="Previous"
                      iconPosition="before"
                      iconclassName="bg-white rounded-full p-1 border border-gray-300"
                      icon={<IconArrowLeft className="text-[#182E4B]" />}
                      onClick={handleBack}
                    />
                    <Button
                      className="gap-4 bg-[#182E4B]"
                      spanclassName="px-4"
                      text="Next"
                      iconclassName="bg-white rounded-full p-1"
                      icon={<IconArrowRight className="text-[#182E4B]" />}
                      onClick={handleNext}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsModal;
