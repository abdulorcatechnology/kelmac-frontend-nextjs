"use client";

import { Heading } from "@/components/ui/common/Heading";
import { AccordionTwo } from "@/components/ui/common/Accordian/AccordianTwo";
import { SyllabusCards } from "@/components/ui/common/SyllabusCard";
import { Course } from "@/types/course";

interface SyllabusProps {
  course?: Course;
}

export default function Syllabus({ course }: SyllabusProps) {
  // Transform course sessions into syllabusItems format
  const syllabusItems =
    course?.sessions && course.sessions.length > 0
      ? Object.entries(
          course.sessions.reduce((acc, session) => {
            const day = session.dayGroup || `Day ${session.dayNumber}`;
            if (!acc[day]) {
              acc[day] = [];
            }
            acc[day].push(session);
            return acc;
          }, {} as Record<string, typeof course.sessions>)
        ).map(([day, sessions], index) => ({
          id: String(index + 1),
          title: day,
          subtitle: `${sessions.length} Lessons`,
          content: (
            <SyllabusCards
              cards={sessions.map((session) => ({
                startTime: session.startTime,
                title: session.title,
                items: session.topics.map((topic) => topic.title),
                ...(session.isBreak && {
                  breakTime: session.startTime,
                  breakLabel: session.title,
                }),
              }))}
            />
          ),
        }))
      : [
          {
            id: "1",
            title: "Day 01",
            subtitle: "5 Lessons",
            content: (
              <SyllabusCards
                cards={[
                  {
                    startTime: "08:00",
                    title: "Course Introduction",
                    items: [
                      "Course Logistics and Rules",
                      "Attendance and Continuous Assessment",
                      "Course Aims and Objectives",
                      "Ice Breaker Exercise",
                      "Audit Terminology Exercise",
                    ],
                  },
                  {
                    startTime: "08:45",
                    title: "Session 1",
                    items: [
                      "Introduction and Objectives",
                      "Quality Management System and Its Be...",
                      "Introduction to ISO 9001:201...",
                      "Process Based Approach ...",
                      "PDCA ...",
                      "Session 1 - Learner Evaluation",
                    ],
                    breakTime: "10:15",
                    breakLabel: "Tea/Coffee",
                  },
                  {
                    startTime: "10:30",
                    title: "Session 2",
                    items: [
                      "Introduction and Objectives",
                      "Audit Terminology",
                      "Management System Audit Types",
                      "SO 9001:2015 Internal Auditing and Internal Audit Program",
                      "Process based internal auditing/Tools",
                      "Principles of auditing",
                      "Audit Lifecycle Exercise",
                    ],
                    breakTime: "12:30",
                    breakLabel: "Lunch",
                  },
                  {
                    startTime: "13:15",
                    title: "Session 2-Continued",
                    items: [
                      "Desired Auditor Behaviours",
                      "Audit Team/Auditee Roles throughout the Audit Lifecycle",
                      "Session 2 - Learner Evaluation",
                      "SO 9001:2015 Internal Auditing and Internal Audit Program",
                    ],
                  },
                  {
                    startTime: "14:15",
                    title: "Session 3",
                    items: [
                      "Introduction and Objectives",
                      "Internal QMS Audit Planning workflow",
                      "Initiating the Audit/Audit Objectives, Scope, Criteria",
                      "Initial contact with Process owner",
                      "Audit Feasibility",
                      "Audit Working Documents",
                    ],
                    breakTime: "15:15",
                    breakLabel: "Tea/Coffee",
                  },
                  {
                    startTime: "15:30",
                    title: "Session 3-Continued",
                    items: [
                      "Case Study - Audit Plan",
                      "Case Study - Audit Checklist",
                      "Initiating the Audit/Audit Objectives, Scope, Criteria",
                      "Session 3 - Learner Evaluation",
                    ],
                    breakTime: "17:30",
                    breakLabel: "End of first day",
                  },
                ]}
              />
            ),
          },
          {
            id: "2",
            title: "Day 02",
            subtitle: "5 Lessons",
            content: (
              <SyllabusCards
                cards={[
                  {
                    startTime: "08:00",
                    title: "Session 4",
                    items: [
                      "Introduction and Objectives",
                      "Internal Audit Opening Meeting",
                      "Session 4 - Learner Evaluation",
                      "Ice Breaker Exercise",
                      "Audit Terminology Exercise",
                    ],
                    breakTime: "09:30",
                    breakLabel: "Tea/Coffee",
                  },
                  {
                    startTime: "09:45",
                    title: "Session 5",
                    items: [
                      "Communication during the Audit",
                      "Collecting and Verifying Information",
                      "Techniques to Obtain Objective Evidence",
                      "Case Study – Document Review",
                      "Session 5 - Learners Evaluation",
                    ],
                    breakTime: "12:15",
                    breakLabel: "Lunch",
                  },
                  {
                    startTime: "10:30",
                    title: "Session 6",
                    items: [
                      "Generating Audit Findings and Reporting Non-Conformity",
                      "Final Audit Team Meeting",
                      "Audit Findings Exercise",
                      "Audit Report",
                      "Audit Conclusion Exercise",
                    ],
                    breakTime: "15:00",
                    breakLabel: "Tea/Coffee",
                  },
                  {
                    startTime: "13:15",
                    title: "Session 6-Continued",
                    items: [
                      "Closing/Exit Meeting",
                      "Audit Follow up",
                      "Session 2 - Learner Evaluation",
                      "Correction/Corrective Actions",
                      "Closing/Exit Meeting and C/CA Exercise",
                      "Session 6 - Learner Evaluation",
                      "16:30 Course review and Questions",
                    ],
                    breakTime: "16:30",
                    breakLabel: "End of second day",
                  },
                ]}
              />
            ),
          },
        ];
  return (
    <section className="bg-primary rounded-4xl mt-12 overflow-hidden">
      <div className="main-container primary-py">
        <Heading
          headingClassName="text-white"
          subHeading="Overview"
          heading="Syllabus breakdown"
        />
        <p className="text-white text-center max-w-2xl mx-auto md:text-xl text-lg mb-12">
          This course is ideal for quality professionals, auditors, consultants,
          and anyone responsible for maintaining or evaluating QMS performance.
          Upon successful completion, participants will receive a CQI-IRCA
          Certified Lead Auditor{" "}
        </p>
        <AccordionTwo items={syllabusItems} />
      </div>
    </section>
  );
}
