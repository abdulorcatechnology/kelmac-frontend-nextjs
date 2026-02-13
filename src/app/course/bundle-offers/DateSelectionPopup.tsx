"use client";
import { useState, useEffect } from "react";
import { Clock, X } from "lucide-react";
import { Iconcheckmark } from "@/components/icons/icons";
import { Heading } from "@/components/ui/common/Heading";
import Link from "next/link";
import { Course } from "@/types/course";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useCreateBookingMutation } from "@/store/api/courseApi";
import { toast } from "react-hot-toast";

interface DateOption {
  date: string;
  time: string;
  type: string;
}

interface DateSelectionPopupProps {
  onClose: () => void;
  onCloseParent?: () => void; // optional hook to close parent modal too
  course?: Course;
  sessions?: {
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
  }[];
}

const dateOptions: DateOption[] = [
  {
    date: "Apr 8-9, 15-16, 2025",
    time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
    type: "Full Week",
  },
  {
    date: "Mar 15-19, 2025",
    time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
    type: "",
  },
  {
    date: "May 1-5, 2025",
    time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
    type: "Weekend",
  },
  {
    date: "May 1-5, 2025",
    time: "5:00 PM - 9:00 PM (Eastern Time GMT-5)",
    type: "Evening",
  },
  {
    date: "May 1-5, 2025",
    time: "6:00 PM - 9:00 PM (Eastern Time GMT-5)",
    type: "Evening",
  },
];

function getBadgeStyles(type: string) {
  if (!type) return "";
  const t = type.toLowerCase();
  if (t.includes("full")) return "bg-emerald-100 text-emerald-700";
  if (t.includes("weekend")) return "bg-amber-50 text-amber-600";
  if (t.includes("even")) return "bg-purple-100 text-purple-600";
  return "bg-purple-100 text-purple-600";
}

export default function DateSelectionPopup({
  onClose,
  onCloseParent,
  sessions,
  course,
}: DateSelectionPopupProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const auth = useSelector((state: any) => state?.auth);
  const router = useRouter();
  // const [createBooking, { isLoading: isBookingLoading }] =
  //   useCreateBookingMutation();
  // const router = useRouter();
  const handleDateSelect = async (id: string) => {
    setSelectedOption(id);
    const nextPath = auth?.user?.id
      ? "/registration/payment"
      : "/registration/basicinfo";

    if (course && sessions) {
      localStorage.setItem(
        "selectedCourse",
        JSON.stringify({
          id: course.id,
          discountedPrice: course.discountedPrice,
          price: course.price,
        }),
      );

      localStorage.setItem("selectedSessionId", id);
    }

    // if (auth?.user?.id && course?.id && selectedOption) {
    //   try {
    //     await createBooking({
    //       courseId: course.id,
    //       studentId: auth.user.id,
    //       timeTableId: selectedOption,
    //     }).unwrap();
    //   } catch (bookingError: any) {
    //     console.error("Booking error:", bookingError);
    //     if (bookingError?.data?.message || bookingError?.message) {
    //       if (
    //         bookingError?.data?.message ===
    //           "already you have booked this course or same other course" ||
    //         bookingError?.data?.message ===
    //           "Payment has already been used by this student"
    //       ) {
    //         toast.error(
    //           "You have not booked twice courses. Please check dashboard."
    //         );
    //         onClose();
    //         router.push("/dashboard/classes");
    //       } else {
    //         toast.error(bookingError?.data?.message);
    //       }
    //     } else {
    //       toast.error("Booking failed. Please try again later.");
    //     }
    //     return;
    //   }
    // }
    onClose();
    if (onCloseParent) onCloseParent();
    router.push(nextPath);
  };
  const formattedDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const savedTimetableId = localStorage.getItem("selectedSessionId");
    if (savedTimetableId) {
      setSelectedOption(savedTimetableId);
    }
  }, []);

  // const router = useRouter();
  // if (auth?.user?.id) {
  //   router.push("/registration/payment");
  // } else {
  //   router.push("/registration/basicinfo");
  // }

  // const handleClick = () => {
  //   if (!course || !sessions) return;
  //   localStorage.setItem(
  //     "selectedCourse",
  //     JSON.stringify({
  //       id: course.id,
  //       discountedPrice: course.discountedPrice,
  //       price: course.price,
  //     })
  //   );
  //   localStorage.setItem("selectedSessionId", selectedOption);
  //   onClose();
  // };
  return (
    <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="relative border-b border-gray-100 bg-white z-10 rounded-t-2xl h-[80px] flex items-center">
          <Heading
            heading="Please select the class date"
            headingClassName="text-primary text-xl md:text-4xl text-center absolute left-1/2 -translate-x-1/2 md:w-[70%]"
          />

          <button
            onClick={onClose}
            className="absolute right-6 text-red-500 hover:text-red-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-secondary rounded-b-2xl p-5 space-y-2 w-full">
          {sessions?.map((option: any, index: number) => {
            const isSelected = selectedOption === option.id;

            return (
              <div
                key={index}
                onClick={() => handleDateSelect(option.id)}
                className={`relative rounded-xl p-5 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-900 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className={`text-xl font-semibold ${
                          isSelected ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {/* {formattedDate(option.date)} */}
                        {formattedDate(option.timeBlocks[0].startDate)}
                      </h3>
                      {option.type && (
                        <span
                          className={`px-3 py-1 rounded-md text-xs font-medium ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : getBadgeStyles(option.type)
                          }`}
                        >
                          {option.type}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock
                        className={`w-4 h-4 ${
                          isSelected ? "text-white/80" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {option.timeBlocks[0].startTime} -{" "}
                        {option.timeBlocks[0].endTime} (
                        {option.timeBlocks[0].timeZone})
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <Iconcheckmark className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
