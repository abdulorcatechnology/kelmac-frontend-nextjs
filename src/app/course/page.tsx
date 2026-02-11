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
import Overview from "./Overview";
import Methodology from "./Methodology";
import Faqs from "./Faqs";
import Requirements from "./BasicRequirements";
import Syllabus from "./Syllabus";
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
import ConfirmBooking from "./bundle-offers/BookingConfirmationModal";

export default function Course() {
  const sessions: CourseSessionProps[] = [
    {
      label: "Mar 15-19, 2025",
      date: "Mar 15-19, 2025",
      time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
      sessionBadge: "Full Week",
      sessionBadgeType: "green",
      href: "#",
      seatsLeft: 4,
    },
    {
      label: "Apr 8-9, 15-16, 2025",
      date: "Apr 8-9, 15-16, 2025",
      time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
      sessionBadge: "Split Week",
      sessionBadgeType: "purple",
      href: "#",
      seatsLeft: 4,
    },
    {
      label: "May 1-5, 2025",
      date: "May 1-5, 2025",
      time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
      sessionBadge: "Weekend",
      sessionBadgeType: "yellow",
      href: "#",
      seatsLeft: 4,
    },
    {
      label: "May 1-5, 2025",
      date: "May 1-5, 2025",
      time: "6:00 PM - 9:00 PM (Eastern Time GMT-5)",
      sessionBadge: "Evening",
      sessionBadgeType: "red",
      href: "#",
      seatsLeft: 4,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", content: <Overview /> },
    { id: "methodology", label: "Methodology", content: <Methodology /> },
    {
      id: "requirements",
      label: "Basic Requirements",
      content: <Requirements />,
    },
    { id: "syllabus", label: "Syllabus Breakdown", content: <Syllabus /> },
    { id: "faqs", label: "FAQs", content: <Faqs /> },
  ];

  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        clearSearch();
      }
    };
    if (isSearchActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive]);

  const handleQuestionSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const filteredCourses =
    isSearchActive && searchQuery
      ? coursesItems.filter(
          (course) =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            course.category.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : coursesItems;

  const handleSearchClick = () => {
    setIsSearchActive(true);
    coursesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchActive(false);
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirm = () => {
    console.log("Booking confirmed!");
  };

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
              label="Quality Management System"
            />
            <h1 className="main-heading">QMS ISO 9001:2015</h1>
            <ul className="md:text-2xl text-xl space-y-3">
              <li>
                Course ID: <b>18113</b>
              </li>
              <li>
                Accreditation: <b>CQI-IRCA Certified</b>
              </li>
              <li>
                Course Type : <b>Internal Auditor Training</b>
              </li>
            </ul>
            <p className="md:text-xl font-normal mb-6">
              The ISO 9001:2015 Internal Auditor Training Course is an
              intensive, Consultant-led program (Virtual Live or Classroom) that
              builds the skills to plan, conduct, report, and follow up internal
              audits against ISO 9001. Across two focused days, you’ll practice
              audit tools aligned to ISO 19011, draft clear findings, and
              evaluate corrective actions—gaining the confidence to provide
              assurance and drive improvement across your QMS. Ideal for
              professionals who must audit processes effectively and support
              continual improvement.
            </p>
            <Button
              iconclassName="p-0 bg-primary"
              spanclassName="px-2"
              //   href="/courses"
              text="Book Now"
              color="white"
              icon={<IconArrowRight className="stroke-white " />}
              onClick={() => setShowConfirm(true)}
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
                {sessions.map((session, index) => (
                  <CourseSession key={index} {...session} />
                ))}
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
                      heading="14 hours of internal Auditor IA class"
                    />
                    <IconBox
                      className="md:col-span-3"
                      icon={<IconScreencast />}
                      subHeading="Delivery method"
                      heading="Virtual / Classroom"
                    />
                    <IconBox
                      className="md:col-span-2"
                      icon={<IconTranslate />}
                      subHeading="Language"
                      heading="English"
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
                      subHeading="Consultant"
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
                      heading="QMS ISO 9001:2015 Fundamental"
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

      <section>
        <Tabs tabs={tabs} className="mt-10" />
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
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                category={course.category}
                title={course.title}
                description={course.description}
                hours={course.hours}
                lessons={course.lessons}
                mode={course.mode}
                imageUrl={course.imageUrl}
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
            <Button
              spanclassName="px-4"
              href="/courses"
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

      {showConfirm && (
        <ConfirmBooking
          onClose={() => setShowConfirm(false)}
          onConfirm={handleConfirm}
          // courseId={{}}
          timetable={[
            {
              id: "690fd1f2f69ec50177092041",
              date: "2025-11-06T13:44:37.064Z",
              description: "Full Week , Weekend Per day",
              time: "9:00 AM - 4:30 PM (Eastern Time GMT-5)",
            },
          ]}
        />
      )}
    </main>
  );
}
