"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import { IconArrowRight, IconBook } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function CoursesMegaMenu() {
  const [courseData, setCourseData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch grouped courses from backend
    async function fetchCourses() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/grouped/by-category`,
          {
            cache: "no-store",
          },
        );
        if (res.ok) {
          const data = await res.json();
          setCourseData(data);
        } else {
          console.error("CoursesMegaMenu: fetch failed", res.status);
        }
      } catch (err) {
        console.error("CoursesMegaMenu: fetch error", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  // Extract all categories from the API response
  const columns = courseData
    ? [
        {
          title: courseData.ISOCourses?.categoryName || "ISO Courses",
          courses: courseData.ISOCourses?.courses || [],
        },
        {
          title:
            courseData.qualityManagementCourses?.categoryName ||
            "Quality Management Courses",
          courses: courseData.qualityManagementCourses?.courses || [],
        },
        {
          title:
            courseData.healthSafetyCourses?.categoryName ||
            "Health & Safety Courses",
          courses: courseData.healthSafetyCourses?.courses || [],
        },
        {
          title:
            courseData.businessTraining?.categoryName || "Business Training",
          courses: courseData.businessTraining?.courses || [],
        },
        {
          title:
            courseData.professionalDevelopment?.categoryName ||
            "Professional Development",
          courses: courseData.professionalDevelopment?.courses || [],
        },
      ]
    : [];

  // Fallback static data if API didn't return usable data
  const fallback = {
    isoCourses: [
      {
        href: "/course/",
        title: "ISO 9001 Foundation",
        hours: "19+ Hours",
        lessons: "10 Lessons",
        description:
          "Learn the fundamentals of ISO 9001 standards for quality management.",
      },
      {
        href: "/course",
        title: "ISO 9001 Lead Auditor",
        hours: "25+ Hours",
        lessons: "12 Lessons",
        description:
          "Become a certified lead auditor for ISO 9001 quality systems.",
      },
      {
        href: "/course",
        title: "ISO 14001 Foundation",
        hours: "15+ Hours",
        lessons: "8 Lessons",
        description:
          "Understand ISO 14001 standards for environmental management.",
      },
      {
        href: "/course",
        title: "ISO 45001 Foundation",
        hours: "18+ Hours",
        lessons: "9 Lessons",
        description:
          "Learn the basics of occupational health & safety management.",
      },
    ],
    qualityCourses: [
      {
        href: "/course",
        title: "Quality Basics",
        hours: "10+ Hours",
        lessons: "6 Lessons",
        description: "Introduction to quality management principles and tools.",
      },
      {
        href: "/course",
        title: "TQM Essentials",
        hours: "12+ Hours",
        lessons: "7 Lessons",
        description: "Master the fundamentals of Total Quality Management.",
      },
      {
        href: "/course",
        title: "Six Sigma Yellow Belt",
        hours: "20+ Hours",
        lessons: "11 Lessons",
        description:
          "Learn the basics of Six Sigma methodology and process improvement.",
      },
      {
        href: "/courses/six-sigma-green-belt",
        title: "Six Sigma Green Belt",
        hours: "30+ Hours",
        lessons: "15 Lessons",
        description:
          "Gain deeper knowledge to lead Six Sigma projects efficiently.",
      },
    ],
    safetyCourses: [
      {
        href: "/courses/hse-foundation",
        title: "HSE Foundation",
        hours: "14+ Hours",
        lessons: "7 Lessons",
        description: "Learn Health, Safety & Environment fundamentals.",
      },
      {
        href: "/courses/workplace-safety",
        title: "Workplace Safety",
        hours: "16+ Hours",
        lessons: "8 Lessons",
        description: "Understand safety standards and risk prevention at work.",
      },
      {
        href: "/courses/fire-safety-basics",
        title: "Fire Safety Basics",
        hours: "10+ Hours",
        lessons: "5 Lessons",
        description:
          "Essential fire safety practices and emergency procedures.",
      },
      {
        href: "/courses/risk-assessment",
        title: "Risk Assessment",
        hours: "12+ Hours",
        lessons: "6 Lessons",
        description:
          "Learn how to identify and manage workplace risks effectively.",
      },
    ],
  };

  const cardClass =
    "group flex items-start gap-3 bg-white p-2 rounded-lg transition-all duration-1000 ease-in-out " +
    "hover:scale-105 hover:translate-x-1 hover:translate-y-1 hover:bg-white";

  const renderCourseList = (
    courses: {
      href: string;
      title: string;
      hours: string;
      lessons: string;
      description: string;
    }[],
  ) => {
    return courses.map((course, index) => (
      <li key={index}>
        <div className={cardClass}>
          {/* Icon/Image Section */}
          <div className="relative w-10 h-10 flex-shrink-0 cursor-pointer">
            <IconBook className="w-7 h-7 text-primary mt-2.5 absolute transition-opacity duration-1000 opacity-100 group-hover:opacity-0" />
            <Image
              src="/images/bg/course-mega.png"
              alt="Course Icon"
              width={40}
              height={40}
              className="object-cover absolute top-0 left-0 transition-opacity duration-1000 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <Link
              href={course.href}
              className="relative block font-semibold text-gray-800 transition-colors duration-1000"
            >
              <span className="block transition-opacity duration-1000 opacity-100 group-hover:opacity-0">
                {course.title}
              </span>
              <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-black flex flex-col">
                <span className="font-normal">{course.title}</span>
                <span className="text-sm text-black">
                  {course.hours} {course.lessons}
                </span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 mt-0.5 transition-opacity duration-1000 opacity-100 group-hover:opacity-0 line-clamp-1">
              {course.description}
            </p>
          </div>
        </div>
      </li>
    ));
  };

  // Decide which data to render: API columns (if found) or fallback static
  const getColumnData = (
    index: number,
    fallbackTitle: string,
    fallbackCourses: any[],
  ) => {
    return (
      columns[index] || {
        title: fallbackTitle,
        courses: fallbackCourses,
      }
    );
  };

  const colA = getColumnData(0, "ISO Courses", fallback.isoCourses);
  const colB = getColumnData(
    1,
    "Quality Management Courses",
    fallback.qualityCourses,
  );
  const colC = getColumnData(
    2,
    "Health & Safety Courses",
    fallback.safetyCourses,
  );
  const colD = getColumnData(3, "Business Training", fallback.qualityCourses);
  const colE = getColumnData(
    4,
    "Professional Development",
    fallback.qualityCourses,
  );

  // Show loading state
  if (loading) {
    return (
      <div className="p-6 w-[800px]">
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((col) => (
            <div key={col}>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <div className="h-10 w-48 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 w-[800px] ">
      <div className="grid grid-cols-3 gap-6 w-full">
        {/* Dynamically render all columns , colD, colE */}
        {[colA, colB, colC].map((col, index) => (
          <div key={index} className="">
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              {col.title}
            </h3>
            <ul className="space-y-2">{renderCourseList(col.courses)}</ul>
          </div>
        ))}
      </div>
      {/* Browse All Button */}
      <div className="mt-6 flex justify-center">
        <Button
          href="/course/all-courses"
          text="Browse All Courses"
          color="primary"
          icon={<IconArrowRight className="text-primary" />}
        />
      </div>
    </div>
  );
}
