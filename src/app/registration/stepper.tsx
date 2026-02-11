//app/registration/stepper.tsx
import { IconBasicInfo, IconPayment, IconConformation } from "@/components/icons/icons";

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { icon: IconBasicInfo, label: "Basic Info" },
    { icon: IconPayment, label: "Payment" },
    { icon: IconConformation, label: "Confirmation" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12">
      <div className="absolute top-6 left-0 right-0 flex justify-between items-center z-0">
        {steps.map((_, index) => (
          index < steps.length - 1 && (
            <div key={index} className="flex-1 h-0.5 border-t border-dotted border-black"></div>
          )
        ))}
      </div>

      <div className="flex justify-between items-center relative z-10">
        {steps.map((step, index) => {
          const isCompleted = currentStep > index + 1;
          const isActive = currentStep === index + 1;
          const Icon = step.icon;

          return (
            <div key={index} className="flex flex-col items-center bg-white px-2">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300`}
                style={{
                  backgroundColor: isActive || isCompleted ? "#6488E6" : "#E5E7EB",
                }}
              >
                <Icon
                  className={`w-6 h-6 ${isActive || isCompleted ? "text-white" : "text-gray-400"}`}
                />
              </div>
              <p
                className="mt-2 text-sm font-medium"
                style={{
                  color: isActive
                    ? "#6488E6"
                    : isCompleted
                    ? "#89A4EC"
                    : "#6B7280",
                }}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;