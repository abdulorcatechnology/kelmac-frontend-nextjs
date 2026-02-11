"use client";

import { Heading } from "@/components/ui/common/Heading";
import { IconList } from "@/components/ui/common/IconList";
import { IconBookFilled } from "@/components/icons/icons";
import { Course } from "@/types/course";

interface OverviewProps {
  course?: Course;
}

export default function Overview({ course }: OverviewProps) {
  const learningPoints = course?.details?.whatYouWillLearn
    ? course.details.whatYouWillLearn.map((text) => ({
        icon: <IconBookFilled />,
        text,
      }))
    : [
        {
          icon: <IconBookFilled />,
          text: "Interpretation of ISO 9001:2015 requirements",
        },
        {
          icon: <IconBookFilled />,
          text: "Audit planning, execution, reporting, and follow-up.",
        },
        {
          icon: <IconBookFilled />,
          text: "Identifying nonconformities and evaluating corrective actions.",
        },
        {
          icon: <IconBookFilled />,
          text: "Leading audit teams and managing audit programs.",
        },
        {
          icon: <IconBookFilled />,
          text: "Preparing for CQI-IRCA Lead Auditor registration.",
        },
      ];

  return (
    <section className="bg-light mt-12">
      <div className="main-container primary-py">
        <Heading
          className="text-start"
          wrapperClassName="justify-start"
          subHeading="Overview"
          heading="Course Overview"
          headingClassName="text-primary"
        />
        <p className="md:text-xl">
          {course?.overview ||
            "The CQI-IRCA Certified ISO 9001:2015 Lead Auditor Training Course is a comprehensive 5-day program designed to equip professionals with the knowledge and practical skills needed to conduct and lead effective quality management system (QMS) audits. Aligned with the latest ISO 9001:2015 standard and ISO 19011:2018 audit guidelines, this course provides in-depth training on auditing principles, practices, and techniques. Participants will gain hands-on experience through case studies, group activities, and role-play exercises, helping them to plan, conduct, report, and follow up audits with confidence. The course also prepares delegates for the CQI-IRCA certification exam and supports their journey toward becoming registered Lead Auditors."}
        </p>

        <h5 className="text-2xl md:text-3xl font-semibold text-black mt-6 mb-4">
          What You’ll Learn
        </h5>
        <IconList
          className="text-lg md:text-xl text-black"
          items={learningPoints}
        />

        {course?.details?.requirements &&
          course.details.requirements.length > 0 && (
            <>
              <h5 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4">
                Requirements
              </h5>
              <IconList
                className="text-lg md:text-xl text-black"
                items={course.details.requirements.map((req) => ({
                  icon: <IconBookFilled />,
                  text: req,
                }))}
              />
            </>
          )}

        {course?.details?.targetAudience &&
          course.details.targetAudience.length > 0 && (
            <>
              <h5 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4">
                Who Should Attend
              </h5>
              <IconList
                className="text-lg md:text-xl text-black"
                items={course.details.targetAudience.map((audience) => ({
                  icon: <IconBookFilled />,
                  text: audience,
                }))}
              />
            </>
          )}

        {course?.details?.features && course.details.features.length > 0 && (
          <>
            <h5 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4">
              Course Features
            </h5>
            <IconList
              className="text-lg md:text-xl text-black"
              items={course.details.features.map((feature) => ({
                icon: <IconBookFilled />,
                text: feature,
              }))}
            />
          </>
        )}

        <p className="mt-6 font-bold md:text-xl text-lg text-black">
          This course is ideal for quality professionals, auditors, consultants,
          and anyone responsible for maintaining or evaluating QMS performance.
          Upon successful completion, participants will receive a{" "}
          <span className="text-secondary">
            {course?.snapshot?.certificate
              ? "Certificate of Completion"
              : "CQI-IRCA Certified Lead Auditor Certificate"}
          </span>
          .
        </p>
      </div>
    </section>
  );
}
