"use client";

import Image from "next/image";
import Button from "@/components/ui/button/Button";
import {
  IconCheckCircle,
  IconClockCountdown,
  IconCertificate,
  IconBookBookmark,
  IconScreencast,
  IconTranslate,
} from "@/components/icons/icons";
import { IconArrowRight } from "@tabler/icons-react";
import { CourseCard } from "@/components/ui/course/CourseCard";
import { ClassSession } from "@/components/ui/Bundle-offer/classSession";
import { Heading } from "@/components/ui/common/Heading";
import { Tag } from "@/components/ui/common/Tag";
import { Tabs } from "@/components/ui/common/Tabs";
import { IconList } from "@/components/ui/common/IconList";
import { IconBox } from "@/components/ui/common/IconBox";
import ConfirmBooking from "@/app/course/bundle-offers/BookingConfirmationModal";
import { useState } from "react";

import BundleOverview from "./BundleOverview";
import BundleInstructors from "./BundleInstructors";
import BundleSyllabus from "./BundleSyllabus";
import Faqs from "./BundleFaqs";

import { coursesItems } from "@/data/home";
import ViewCertificateButton from "@/components/ui/course/View-Certificate-Button";

export default function Course() {
  const sessions = [
    { title: "ISO 9001:2015 (Batch 1)", courseId: "QMS-2023-1234" },
    { title: "ISO 9001:2015 (Batch 2)", courseId: "QMS-2023-1235" },
    { title: "ISO 9001:2015 (Batch 3)", courseId: "QMS-2023-1236" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", content: <BundleOverview /> },
    { id: "instructors", label: "Consultants", content: <BundleInstructors /> },
    {
      id: "syllabus",
      label: "Syllabus Breakdown",
      content: <BundleSyllabus />,
    },
    { id: "faqs", label: "FAQs", content: <Faqs /> },
  ];

  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirm = () => {
    console.log("Booking confirmed!");
  };

  return (
    <main className="main">
      <section className="relative bg-primary bg-[url('/images/courses/1.png')] bg-cover bg-[-250px_center] md:bg-[300px_center] lg:bg-[350px_center] bg-no-repeat flex flex-col items-start justify-center overflow-hidden rounded-3xl">
        <div className="absolute inset-0 w-[80%] lg:w-[74%] bg-gradient-to-r from-primary from-[75%] via-primary/90 via-[90%] to-transparent to-[100%]"></div>
        <div className="main-container primary-py relative z-10">
          <div className="text-white w-full space-y-1 md:w-[75%] lg:w-[67%]">
            <h1 className="main-heading">
              ISO 9001:2015 Quality Management System
            </h1>
            <ul className="flex flex-nowrap items-center gap-4 overflow-hidden">
              <li className="flex-shrink-0">
                <Tag
                  color="semiprimary"
                  dotClassName="hidden"
                  size="sm"
                  label="Quality Management System"
                />
              </li>
              <li className="flex-shrink-0 w-36 h-36 bg-[url('/images/coi-irca.png')] bg-contain bg-no-repeat bg-center"></li>
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
                heading="Please Select The Class Date"
                headingClassName="text-primary"
              />
              <div className="space-y-4">
                {sessions.map((session, index) => (
                  <ClassSession key={index} {...session} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-4xl overflow-hidden">
                <h2 className="text-3xl md:text-4xl px-4 md:px-6 pt-7 pb-4 text-center font-hedvig font-regular text-white border-b border-secondary">
                  Course Snapshot
                </h2>
                <div className="px-4 md:px-6 py-4">
                  <div className="mb-5 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <IconBox
                      className="md:col-span-3"
                      icon={<IconClockCountdown />}
                      subHeading="Duration"
                      heading="2Days (16 hours)"
                    />
                    <IconBox
                      className="md:col-span-2"
                      icon={<IconBookBookmark />}
                      subHeading="Lessons"
                      heading="20"
                    />
                    <IconBox
                      className="md:col-span-3"
                      icon={<IconScreencast />}
                      subHeading="Delivery method"
                      heading="Visual / Classroom"
                    />
                    <IconBox
                      className="md:col-span-2"
                      icon={<IconTranslate />}
                      subHeading="Language"
                      heading="English"
                    />
                    <IconBox
                      className="md:col-span-3"
                      icon={<IconTranslate />}
                      subHeading="Consultants"
                      heading="Gerlad"
                    />
                    <IconBox
                      className="md:col-span-5"
                      icon={
                        <IconCertificate width={32} height={32} fill="white" />
                      }
                      subHeading="Certifications"
                      heading="QMS ISO 9001:2015 Fundamental"
                    />
                  </div>

                  <div className="p-4 bg-white rounded-3xl">
                    <h3 className="text-2xl font-medium text-[#EF1A23] mb-4">
                      Requirements
                    </h3>
                    <IconList
                      className="space-y-3 font-medium"
                      items={[
                        {
                          icon: <IconCheckCircle />,
                          text: "Target Audience: Delegates with basic QM/MS knowledge who must audit to ISO 9001.",
                        },
                        {
                          icon: <IconCheckCircle />,
                          text: "Learning Goal: Build skill to plan, conduct, report, and follow up audits.",
                        },
                        {
                          icon: <IconCheckCircle />,
                          text: "Training Approach: Practice-led, ISO 19011-aligned; process/risk focus (not clause-by-clause).",
                        },
                        {
                          icon: <IconCheckCircle />,
                          text: "Industry Relevance: Tailorable to sectors (e.g., construction, automotive).",
                        },
                        {
                          icon: <IconCheckCircle />,
                          text: "Prerequisites: ISO 9001 basics (Foundations / Fundamentals ideal) and working English.",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-40 w-full bg-[#182E4B] flex items-center justify-center">
        <Button
          iconclassName="p-3 bg-primary group-hover:bg-white transition-colors duration-300"
          spanclassName="px-4"
          text="Book Now"
          color="white"
          icon={
            <IconArrowRight className="stroke-white group-hover:stroke-primary transition-colors duration-300" />
          }
          className="group"
          onClick={() => setShowConfirm(true)}
        />
      </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesItems.map((course) => (
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
              alt="Certificate"
            />
            <Heading
              className="mb-6"
              wrapperClassName="justify-start"
              subHeading="Certificate"
              headingClassName="text-start text-primary"
              heading="View Sample Certificate of Completion"
            />
            <p className="text-lg md:text-xl">
              Upon successful completion, each Learner shall receive a
              <br className="hidden xl:block" /> digital Certificate of
              Completion that is recognized
              <br className="hidden xl:block" /> globally
            </p>
            {/* Certificate page doesnt exist */}
            <ViewCertificateButton />
          </div>
        </div>
      </section>

      {showConfirm && (
        <ConfirmBooking
          onClose={() => setShowConfirm(false)}
          onConfirm={handleConfirm}
        />
      )}
    </main>
  );
}
