import React, { useState } from "react";
import { cn } from "@/lib/utils";
import LinkButton from "@/components/ui/button/LinkButton";
import { IconArrowRight } from "@tabler/icons-react";
import { IconClock } from "@/components/icons/icons";
import { Tag } from "@/components/ui/common/Tag";
import { Course } from "@/types/course";
import { authAPI } from "@/store/api/authApi";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import { useRouter } from "next/navigation";

export type CourseSessionProps = {
  label?: string;
  date?: string;
  time?: string;
  href?: string;
  className?: string;
  sessionBadge?: string;
  sessionBadgeType?: "purple" | "green" | "yellow" | "red";
  seatsLeft?: number;
  description?: string;
  course?: Course;
  session?: {
    id: string;
    timeBlocks: {
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
      timeZone: string;
    }[];
    seatsLeft: number;
    type: string;
  };
  sessionId?: string;
  setTimetableId?: React.Dispatch<React.SetStateAction<string>>;
  showConfirm?: boolean;
  setShowConfirm?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CourseSession({
  session,
  course,
  sessionId,
  setTimetableId,
  showConfirm,
  setShowConfirm,
  className = "",
}: CourseSessionProps) {
  const isSelected = sessionId === session?.id;

  const CourseSessionClasses = cn(
    "bg-white rounded-xl p-4 md:p-7 grid grid-cols-1 md:grid-cols-4 items-center justify-center shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer",
    isSelected &&
      "border-2 border-primary bg-primary/5 shadow-[0_20px_40px_0_rgba(0,0,0,0.12)]",
    className
  );

  if (!session) {
    return null;
  }

  const { type, seatsLeft } = session;

  const formattedDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  function getBadgeStyles(type: string) {
    if (!type) return "";
    const t = type.toLowerCase();
    if (t.includes("full")) return "bg-emerald-100 text-emerald-700";
    if (t.includes("weekend")) return "bg-amber-50 text-amber-600";
    if (t.includes("even")) return "bg-purple-100 text-purple-600";
    return "bg-purple-100 text-purple-600";
  }
  const auth = useSelector((state: any) => state?.auth);
  const router = useRouter();
  const handleClick = () => {
    if (!course || !session) return;

    localStorage.setItem(
      "selectedCourse",
      JSON.stringify({
        id: course.id,
        discountedPrice: course.discountedPrice,
        price: course.price,
      })
    );
    localStorage.setItem("selectedSessionId", session.id);

    setShowConfirm?.(true);
  };

  return (
    <div
      onClick={() => setTimetableId?.(session.id)}
      className={CourseSessionClasses + " relative"}
    >
      {seatsLeft && (
        <div className="absolute top-0 right-0 bg-[#EF4A6A] text-white px-3 py-1 rounded-bl-xl rounded-tr-xl text-lg">
          {seatsLeft < 10 ? `0${seatsLeft}` : seatsLeft} seats left
        </div>
      )}
      <div className="col-span-3 space-y-4">
        <div className="flex flex-wrap gap-3 items-center">
          <h3 className="font-semibold text-2xl text-black">
            {formattedDate(session.timeBlocks[0].startDate)}
          </h3>
          <div
            className={` px-3 py-1 rounded-md text-xs font-medium ${getBadgeStyles(
              type
            )}`}
          >
            {type}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <IconClock />
          <span className="md:text-lg font-medium text-primary/75">
            {session.timeBlocks[0].startTime} - {session.timeBlocks[0].endTime}{" "}
            ({session.timeBlocks[0].timeZone})
          </span>
        </div>
      </div>
      <div className="text-end">
        {/* <button
          onClick={() => {}}
          className="text-primary flex items-center gap-2 font-medium ml-auto hover:underline cursor-pointer"
        >
          Book Now
          <IconArrowRight size={16} />
        </button> */}
        {/* <Button
          className="text-primary"
          onClick={handleClick}
          text="Book Now"
          icon={<IconArrowRight size={16} />}
        /> */}
        <Button
          iconclassName="p-0 bg-primary"
          spanclassName="px-2"
          onClick={handleClick}
          text="Book Now"
          color="white"
          icon={<IconArrowRight className="stroke-white " />}
        />
        {/* <LinkButton
          className="text-primary"
          on
          text="Book Now"
          icon={<IconArrowRight size={16} />}
        /> */}
      </div>
    </div>
  );
}
