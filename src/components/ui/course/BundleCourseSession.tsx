"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { IconChevronDown } from "@tabler/icons-react";

export type CourseSessionProps = {
    label: string;
    courseId?: string;
    href: string;
    className?: string;
    sessionBadge?: string;
    sessionBadgeType?: "purple" | "green" | "yellow" | "red" | "image";
};

export function CourseSession({
    label = "ISO 9001:2015",
    courseId = "QMS-2023-1234",
    sessionBadge = "Certified course",
    sessionBadgeType = "image",
    href = "#",
    className = "",
}: CourseSessionProps) {
    const CourseSessionClasses = cn(
        "bg-[#1E293B] rounded-xl p-4 md:p-7 flex flex-col shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] transition-shadow duration-300",
        className
    );

    const handleClick = () => {
        window.location.href = href;
    };

    return (
        <div className={CourseSessionClasses}>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-4xl" style={{ color: "white", fontFamily: "'Hedvig Letters Serif',", }}>	{label}</h3>
                <Button
                    className="text-black bg-white rounded-full px-4 py-2 flex items-center gap-2"
                    text="Select session"
                    icon={<IconChevronDown size={16} />}
                    onClick={handleClick}
                />
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="bg-[#2A3F59] p-1 rounded-lg">
                    <p className="text-sm text-white">Course ID: {courseId}</p>
                </div>
                {sessionBadgeType === "image" && (
                    <div className="flex flex-col items-center">
                        <div className="bg-[#182E4B] rounded-lg">
                            <Image
                                src="/images/coi-irca.png"
                                alt={sessionBadge}
                                width={170}
                                height={70}
                            />
                        </div>
                        <p className="text-sm text-white mt-1">{sessionBadge}</p> {/* Added text below image */}
                    </div>
                )}
            </div>
        </div>
    );
}