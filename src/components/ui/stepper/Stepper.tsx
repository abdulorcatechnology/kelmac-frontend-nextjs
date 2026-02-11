"use client";

import { Check } from "lucide-react";

type StepperProps = {
  currentStep: number;
};

const steps = [
  { number: 1, label: "Reset your password" },
  { number: 2, label: "Check Your Email" },
  { number: 3, label: "Enter your confirmation code" },
  { number: 4, label: "Create a new password" },
  { number: 5, label: "Password Changed Successfully" },
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="relative w-full md:w-1/2 lg:w-1/3 pl-6 md:pl-8 lg:pl-12">
      {/* Wrapper for steps */}
      <div className="relative flex flex-col items-start">
        {/* Vertical Line behind circles */}
        <div className="absolute left-[1.25rem] top-5 bottom-5 w-0.5 bg-white/30 z-0"></div>

        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div
              key={step.number}
              className={`flex items-start relative ${index < steps.length - 1 ? "mb-8" : ""}`}
            >
              {/* Step Circle */}
              <div className="relative w-10 h-10 flex items-center justify-center z-10 flex-shrink-0">
                {/* Left-side ring for current step */}
                {isCurrent && (
                  <svg className="absolute -top-1 -left-1 w-12 h-12 rotate-[-150deg] z-0">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#6488E6"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray="75 125" // 60% coverage
                      strokeLinecap="round"
                    />
                  </svg>
                )}

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                    ${isCompleted ? "bg-[#6488E6] border-[#6488E6]" : "bg-white border-white"}`}
                >
                  {isCompleted ? (
                    <Check className="text-black w-5 h-5" />
                  ) : isCurrent ? (
                    <span className="text-sm font-medium text-[#0B1C40]">{step.number}</span>
                  ) : (
                    <span className="text-sm font-medium text-[#0B1C40]">{step.number}</span>
                  )}
                </div>
              </div>

              {/* Step Label */}
              <div className="pl-4 pt-1">
                <p className="text-[10px] mb-1 whitespace-nowrap text-white/80">Step {step.number}</p>
                <h3
                  className={`text-sm font-small whitespace-nowrap ${isCurrent ? "text-[#A3BCFF]" : "text-white"
                    }`}
                >
                  {step.label}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}