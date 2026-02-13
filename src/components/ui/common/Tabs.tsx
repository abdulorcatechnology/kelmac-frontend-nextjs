"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export type TabsProps = {
  tabs: Tab[];
  className?: string;
};

export function Tabs({ tabs, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const tabContainerClasses = cn(
    "w-full text-center snap-x snap-mandatory scroll-smooth",
    className,
  );

  return (
    <>
      <section className={tabContainerClasses}>
        <div className="bg-light rounded-[50px] inline-flex border border-black/20">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "cursor-pointer px-2 py-1.5 md:py-6 md:px-16 text-xs md:text-xl font-medium transition rounded-full",
                  isActive ? "bg-primary text-white" : "hover:text-black ",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>
      {/* Tab content */}
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <div key={tab.id} className="animate-fadeIn">
              {tab.content}
            </div>
          ),
      )}
    </>
  );
}
