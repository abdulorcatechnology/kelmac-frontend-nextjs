"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/ui/common/Tag";

export type ClassSessionProps = {
    title?: string;
    courseId?: string;
    certificationBadge?: {
        logo: string;
    };
    className?: string;
};

export function ClassSession({
    title = "ISO 9001:2015",
    courseId = "QMS-2023-1234",
    certificationBadge = {
        logo: "/images/cqi-irca-cc.svg",
    },
    className = "",
}: ClassSessionProps) {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const handleSessionSelect = (sessionId: string) => {
        router.push(`/sessions/${sessionId}`);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const ClassSessionClasses = cn(
        "bg-primary rounded-4xl p-6 md:p-8 shadow-lg relative overflow-visible",
        className
    );

    return (
        <div className={ClassSessionClasses}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-hedvig">
                        {title}
                    </h2>
                    <Tag
                        label={`Course ID: ${courseId}`}
                        color="semiprimary"
                        dotClassName="hidden"
                        size="sm"
                        labelClassName="text-sm text-white/90"
                    />
                </div>

                <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                    <div className="relative w-full md:w-auto" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-between px-5 py-3 rounded-full border border-[#1e3a5f] bg-white text-[#1e3a5f] font-medium shadow-sm hover:bg-gray-50 transition-colors duration-200 w-full md:w-auto"
                        >
                            <span>Select session</span>
                            <span className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#DBEAFE]">
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 6L8 10L12 6"
                                        stroke="#182E4B"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 animate-fade-in">
                                <ul className="divide-y divide-gray-100">
                                    {[
                                        "QMS-2023-1234",
                                        "QMS-2023-5678",
                                        "QMS-2023-9012",
                                    ].map((id) => (
                                        <li
                                            key={id}
                                            onClick={() => handleSessionSelect(id)}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#1e3a5f]"
                                        >
                                            {id}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {certificationBadge && (
                        <div className="flex justify-center w-full mt-2">
                            <Image
                                src={certificationBadge.logo}
                                alt="Certification Badge"
                                width={150}
                                height={150}
                                className="object-contain"
                                priority
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
