"use client";

import React from "react";

type SidebarProps = {
  activeIndex: number;
};

const questions = [
  { id: "Ques-1", name: "Curriculum Selection" },
  { id: "Ques-2", name: "Training Type" },
];

export default function Sidebar({ activeIndex }: SidebarProps) {
  return (
    <div className="relative flex flex-col pl-6 space-y-8">
      <div className="absolute left-[2rem] top-5 bottom-5 w-0.5 bg-white/30 z-0"></div>

      {questions.map((q, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={q.id}
            className={`flex items-start relative ${index < questions.length - 1 ? "mb-8" : ""}`}
          >
            {/* Circle */}
            <div className="relative w-5 h-5 flex items-center justify-center z-10 flex-shrink-0">
              {isActive && (
                <svg className="absolute -top-1 -left-1 w-7 h-7 z-0">
                  <circle
                    cx="14"
                    cy="14"
                    r="10"
                    stroke="#6488E6"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray="62 62"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all
                  ${isActive ? "bg-white border-white/50" : "bg-white/80 border-gray-400"}`}
              ></div>
            </div>

            <div className="pl-4 pt-1 flex flex-col">
              <p className="text-base mb-1 whitespace-nowrap text-white/50">
                {q.id}
              </p>
              <p
                className={`text-base whitespace-nowrap ${
                  isActive ? "font-bold text-white" : "font-normal text-white/50"
                }`}
              >
                {q.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
