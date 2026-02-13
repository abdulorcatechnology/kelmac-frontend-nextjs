"use client";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { IconArrowRight, IconArrowDown } from "@tabler/icons-react";
import { CourseCard } from "@/components/ui/course/CourseCard";
import {
  CourseSession,
  CourseSessionProps,
} from "@/components/ui/course/CourseSession";
import { Heading } from "@/components/ui/common/Heading";
import { Tag } from "@/components/ui/common/Tag";
import { Tabs } from "@/components/ui/common/Tabs";
import Overview from "../Overview";
import Tutors from "../Tutors";
import Faqs from "../Faqs";

import Syllabus from "../Syllabus";
import { coursesItems } from "@/data/home";
import {
  IconClockCountdown,
  IconCertificate,
  IconScreencast,
  IconTranslate,
  IconLocation,
} from "@/components/icons/icons";
import { IconBox } from "@/components/ui/common/IconBox";
import QuestionsModal from "@/components/ui/questions/QuestionsModal";
import type { FormData } from "@/data/questionTypes";
import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  useGetAllCoursesQuery,
  useGetCourseBySlugQuery,
} from "@/store/api/courseApi";
import ConfirmBooking from "../bundle-offers/BookingConfirmationModal";
import Methodology from "../Methodology";

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: course,
    isLoading: loading,
    isError,
    error: apiError,
  } = useGetCourseBySlugQuery(slug, {
    skip: !slug, // Skip the query if slug is not available
  });

  const error = isError
    ? apiError && "status" in apiError
      ? `Error: ${apiError.status}`
      : "Failed to load course"
    : null;

  // const sessions: CourseSessionProps[] = [
  //   {
  //     label: "Mar 15-19, 2025",
  //     date: "Mar 15-19, 2025",
  //     time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
  //     sessionBadge: "Full Week",
  //     sessionBadgeType: "green",
  //     href: "#",
  //     seatsLeft: 4,
  //   },
  //   {
  //     label: "Apr 8-9, 15-16, 2025",
  //     date: "Apr 8-9, 15-16, 2025",
  //     time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
  //     sessionBadge: "Split Week",
  //     sessionBadgeType: "purple",
  //     href: "#",
  //     seatsLeft: 4,
  //   },
  //   {
  //     label: "May 1-5, 2025",
  //     date: "May 1-5, 2025",
  //     time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
  //     sessionBadge: "Weekend",
  //     sessionBadgeType: "yellow",
  //     href: "#",
  //     seatsLeft: 4,
  //   },
  //   {
  //     label: "May 1-5, 2025",
  //     date: "May 1-5, 2025",
  //     time: "6:00 PM - 9:00 PM (Eastern Time GMT-5)",
  //     sessionBadge: "Evening",
  //     sessionBadgeType: "red",
  //     href: "#",
  //     seatsLeft: 4,
  //   },
  // ];

  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [sessionId, setTimetableId] = useState<string>("");

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       searchBarRef.current &&
  //       !searchBarRef.current.contains(event.target as Node)
  //     ) {
  //       clearSearch();
  //     }
  //   };
  //   if (isSearchActive) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isSearchActive]);

  const handleQuestionSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const {
    data: coursesData,
    isLoading: coursesLoading,
    error: coursesError,
  } = useGetAllCoursesQuery({
    page: 1,
    limit: 3,
  });
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirm = () => {
    console.log("Booking confirmed!");
  };
  // Loading state
  if (loading) {
    return (
      <main className="main">
        <div className="main-container primary-py">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">Loading course...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error || !course) {
    return (
      <main className="main">
        <div className="main-container primary-py">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                {error || "Course not found"}
              </h2>
              <Button
                href="/course"
                text="Browse All Courses"
                color="primary"
                icon={<IconArrowRight className="text-primary" />}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <section className="relative bg-primary bg-[url('/images/courses/1.png')] bg-cover bg-[-250px_center] md:bg-[300px_center] lg:bg-[350px_center] bg-no-repeat flex flex-col items-start justify-center overflow-hidden rounded-3xl">
        <div className="absolute inset-0 w-[80%] lg:w-[74%] bg-gradient-to-r from-primary from-[75%] via-primary/90 via-[90%] to-transparent to-[100%]" />
        <div className="main-container primary-py relative z-10">
          <div className="text-white w-full space-y-3 md:w-[75%] lg:w-[67%]">
            <Tag
              color="semiprimary"
              dotClassName="hidden"
              size="sm"
              label={course.subcategories[0] || "Professional Development"}
            />
            <h1 className="main-heading">{course.title}</h1>
            {course.subtitle && (
              <p className="md:text-2xl text-xl font-semibold">
                {course.subtitle}
              </p>
            )}
            <ul className="md:text-2xl text-xl space-y-3">
              <li>
                <b>{course.topics[0]}</b>
              </li>
              <li>
                <b>{course.topics[1]}</b>
              </li>
              <li>
                <b>{course.topics[2]}</b>
              </li>
            </ul>
            <p className="md:text-xl font-normal mb-6">{course.overview}</p>
            <Button
              iconclassName="p-0 bg-primary"
              spanclassName="px-2"
              onClick={() => {
                const tabsSection = document.querySelector(
                  "[data-tabs-section]",
                );
                tabsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              text="See Details"
              color="white"
              icon={<IconArrowDown className="stroke-white " />}
            />
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="main-container primary-py">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Heading
                className="text-start"
                wrapperClassName="justify-start"
                subHeading="Course Dates"
                heading="Upcoming Sessions"
                headingClassName="text-primary"
              />
              <div className="space-y-4">
                {course.sessions && course.sessions.length > 0 ? (
                  course.sessions.map((session, index) => (
                    <CourseSession
                      sessionId={sessionId}
                      setTimetableId={setTimetableId}
                      showConfirm={showConfirm}
                      setShowConfirm={setShowConfirm}
                      key={index}
                      session={session}
                      course={course}
                    />
                  ))
                ) : (
                  <p className="text-gray-600">
                    No sessions available at this time.
                  </p>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-primary rounded-4xl overflow-hidden h-180 flex flex-col">
                <h2 className="text-3xl md:text-4xl px-4 md:px-6 pt-7 pb-4 font-hedvig font-regular text-white border-b border-secondary">
                  Course Snapshot
                </h2>
                <div className="px-4 md:px-6 py-10 flex-1 flex flex-col">
                  <div className="mb-5 grid grid-cols-1 md:grid-cols-5 gap-4 flex-1">
                    <IconBox
                      className="md:col-span-5"
                      icon={<IconClockCountdown />}
                      subHeading="Duration"
                      heading={`${course.snapshot.totalDuration} hours of internal Auditor IA class`}
                    />
                    <IconBox
                      className="md:col-span-3"
                      icon={<IconScreencast />}
                      subHeading="Delivery method"
                      heading={course.snapshot.skillLevel}
                    />
                    <IconBox
                      className="md:col-span-2"
                      icon={<IconTranslate />}
                      subHeading="Language"
                      heading={course.snapshot.language}
                    />
                    <IconBox
                      className="md:col-span-5"
                      icon={<IconLocation />}
                      subHeading="Location"
                      heading="Old Windmill Office Suites, Lower Gerald Griffin Street"
                    />
                    <IconBox
                      className="md:col-span-3"
                      icon={<IconTranslate />}
                      subHeading="Instructor"
                      heading="Gerald"
                    />
                    <IconBox
                      className="md:col-span-5"
                      icon={
                        <IconCertificate
                          className="text-white"
                          width={32}
                          height={32}
                        />
                      }
                      subHeading="Certifications"
                      heading={
                        course.snapshot.certificate
                          ? "QMS ISO 9001:2015 Fundamental"
                          : "Not Included"
                      }
                    />
                  </div>
                  <Button
                    spanclassName="px-6"
                    className="gap-2 mx-auto rounded-full border border-white/70"
                    text="Download course curriculum"
                    icon={<IconArrowDown className="stroke-primary" />}
                    color="transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary bg-[url('/images/bg/Learner.png')] bg-no-repeat bg-cover bg-center rounded-3xl overflow-hidden">
        <div className="main-container primary-py">
          <div className="md:w-[60%] text-white space-y-8">
            <h6 className="sub-heading before:bg-white text-white">More</h6>
            <h2 className="main-heading">
              You can choose the curriculum & training that fits your needs
            </h2>
            <p className="mb-12">
              Answer a few quick questions, and we'll match you with tailored
              training recommendations designed for your career stage and
              industry.
            </p>
            <Button
              spanclassName="px-4"
              className="gap-0"
              text="Get Started – Find Your Training"
              icon={<IconArrowRight className="stroke-primary" />}
              color="primary"
              onClick={() => setIsQuestionsModalOpen(true)}
            />
          </div>
        </div>
      </section>

      <section data-tabs-section className="main-container primary-py">
        <Tabs
          tabs={[
            {
              id: "overview",
              label: "Overview",
              content: <Overview course={course} />,
            },
            {
              id: "methodology",
              label: "Methodology",
              content: <Methodology />,
            },
            {
              id: "instructors",
              label: "Instructors",
              content: <Tutors course={course} />,
            },
            // {
            //   id: "syllabus",
            //   label: "Syllabus Breakdown",
            //   content: <Syllabus course={course} />,
            // },
            { id: "faqs", label: "FAQs", content: <Faqs course={course} /> },
          ]}
          className="mt-10"
        />
      </section>

      <section>
        <div className="main-container primary-py">
          <Heading
            subHeading="Course"
            heading="Similar Courses"
            headingClassName="text-primary"
          />
          <div
            ref={coursesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coursesData?.data?.map((course: any) => (
              <CourseCard
                key={course._id}
                category={course?.category?.name || "General"}
                title={course.title}
                description={course.description}
                hours={course.snapshot?.totalDuration?.toString() || "N/A"}
                lessons={course.snapshot?.totalLectures || 0}
                mode={course.snapshot?.skillLevel || "Online"}
                imageUrl={course.thumbnailUrl}
                slug={course.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light lg:bg-[length:533px] xl:bg-[length:auto_95%] bg-bottom-right lg:bg-[url('/images/cert.png')] bg-no-repeat">
        <div className="main-container primary-py">
          <div className="space-y-6 lg:w-[46%]">
            <Image
              className="lg:hidden mb-5"
              width={768}
              height={100}
              src={"/images/cert.png"}
              alt={"Certificate"}
            />
            <Heading
              className="mb-6"
              wrapperClassName="justify-start"
              subHeading="Certificate"
              headingClassName="text-start text-primary"
              heading="View Sample Certificate of Completion"
            />
            <p className="text-lg md:text-xl">
              Upon successful completion, each learner shall receive a digital
              Certificate of Completion that is recognized globally.
            </p>
            {/* Certificate page doesnt exist */}
            <Button
              spanclassName="px-4"
              href="/course"
              text="View Certificate"
              color="primary"
              icon={<IconArrowRight className="text-primary" />}
            />
          </div>
        </div>
      </section>

      {isQuestionsModalOpen && (
        <QuestionsModal
          isOpen={isQuestionsModalOpen}
          onClose={() => setIsQuestionsModalOpen(false)}
          onSubmit={handleQuestionSubmit}
        />
      )}

      {showConfirm && course && course.sessions && (
        <ConfirmBooking
          sessions={course.sessions}
          course={course}
          onClose={() => setShowConfirm(false)}
          onConfirm={handleConfirm}
        />
      )}
    </main>
  );
}
