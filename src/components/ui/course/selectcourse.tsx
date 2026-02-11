// src/components/ui/course/selectcourse.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { IconClock } from "@/components/icons/icons";

export type CourseSessionProps = {
    label: string;
    date: string;
    time: string;
    href: string;
    className?: string;
    sessionBadge?: string;
    sessionBadgeType?: "purple" | "green" | "yellow" | "red";
};

export function CourseSession({
    label = "CourseSession",
    date = "Mar 15-19, 2025",
    time = "9:00 AM - 4:30 PM (Eastern Time (GMT-5))",
    sessionBadge = "Split Week",
    sessionBadgeType = "purple",
    href = "#",
    className = "",
}: CourseSessionProps) {
    const CourseSessionClasses = cn(
        "bg-white rounded-xl p-4 md:p-7 grid grid-cols-1 items-center justify-center shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] transition-shadow duration-300",
        className
    );
    const colorMap = {
        purple: "text-[#9747FF] bg-[#9747FF]/15",
        green: "bg-[#DCFCE7] text-[#15803D]",
        yellow: "bg-[#FFFBEB] text-[#C69311]",
        red: "bg-[#E6647A1F]/12 text-[#E6647A1F]",
    };
    const sessionBadgeTypeClasses = cn(
        "px-3 py-1 text-[12px] font-medium flex items-center justify-center rounded-lg",
        colorMap[sessionBadgeType]
    );

    return (
        <div className={CourseSessionClasses}>
            <div className="space-y-1">
                <div className="flex flex-wrap gap-3 items-center">
                    <h3 className="font-semibold text-2xl">{date}</h3>
                    {sessionBadge && (
                        <div className={sessionBadgeTypeClasses}>{sessionBadge}</div>
                    )}
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                    <IconClock />
                    <span className="md:text-lg font-medium text-primary/75">{time}</span>
                </div>
            </div>
        </div>
    );
}