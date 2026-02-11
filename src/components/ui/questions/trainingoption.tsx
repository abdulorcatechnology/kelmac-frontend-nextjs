import React from "react";
import type { TrainingOptionProps } from "@/data/questionTypes";

const TrainingOption: React.FC<TrainingOptionProps> = ({
  id,
  label,
  description,
  checked = false,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        name="training"
        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-blue-600 checked:bg-blue-600 relative cursor-pointer"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-3 cursor-pointer" onClick={onChange}>
        <div className="font-medium text-gray-800">{label}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </label>
      <style jsx>{`
        input[type="radio"]::before {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: transparent;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        input[type="radio"]:checked::after {
          content: "✓";
          display: block;
          color: white;
          font-size: 12px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default TrainingOption;