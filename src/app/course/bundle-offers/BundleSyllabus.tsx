"use client";

import { Heading } from "@/components/ui/common/Heading";
import { AccordionTwo } from "@/components/ui/common/Accordian/AccordianTwo";
import { IconList } from "@/components/ui/common/IconList";
import { IconBookFilled } from "@/components/icons/icons";

export default function BundleSyllabus() {
    const syllabusContent = [
        {
            day: 1,
            points: [
                "Understand the principles of Quality Management Systems (QMS)",
                "Introduction to ISO 9001:2015 requirements",
                "Audit planning and process-based approach",
                "PDCA Cycle overview",
                "Session 1 - Learner Evaluation",
            ],
        },
        {
            day: 2,
            points: [
                "Internal Audit Opening Meeting",
                "Collecting and verifying audit evidence",
                "Techniques to obtain objective evidence",
                "Audit findings and reporting",
                "Session 2 - Learner Evaluation",
            ],
        },
        {
            day: 3,
            points: [
                "Internal QMS Audit Planning workflow",
                "Initiating the audit: scope & objectives",
                "Audit working documents",
                "Audit lifecycle exercise",
                "Session 3 - Learner Evaluation",
            ],
        },
        {
            day: 4,
            points: [
                "Audit team roles and responsibilities",
                "Desired auditor behaviors",
                "Conducting audit interviews",
                "Nonconformity identification",
                "Session 4 - Learner Evaluation",
            ],
        },
        {
            day: 5,
            points: [
                "Closing/Exit Meeting",
                "Audit follow-up and corrective actions",
                "Course review and Q&A",
                "CQI-IRCA Lead Auditor registration preparation",
                "Final learner evaluation",
            ],
        },
    ];

    const syllabusItems = syllabusContent.map((section) => ({
        id: `day-${section.day}`,
        title: `Day ${section.day}`,
        subtitle: `${section.points.length} Lessons`,
        content: (
            <>
                <h5 className="text-2xl md:text-3xl font-semibold text-primary mt-6 mb-4">
                    What You’ll Learn
                </h5>
                <IconList
                    className="text-lg md:text-xl text-primary"
                    items={section.points.map((point) => ({
                        icon: <IconBookFilled />,
                        text: point,
                    }))}
                />
            </>
        ),
    }));

    return (
        <section className="bg-primary rounded-4xl mt-12 overflow-hidden">
            <div className="main-container primary-py">
                <Heading
                    headingClassName="text-white"
                    subHeading="Overview"
                    heading="Syllabus breakdown"
                />
                <p className="text-white text-center max-w-6xl mx-auto md:text-xl text-lg mb-12">
                    This course is ideal for quality professionals, auditors, consultants,
                    and anyone responsible for maintaining or evaluating QMS performance.
                    Upon successful completion, participants will receive a CQI-IRCA
                    Certified Lead Auditor certification.
                </p>
                <AccordionTwo items={syllabusItems} />
            </div>
        </section>
    );
}
