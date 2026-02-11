"use client";

import { Heading } from "@/components/ui/common/Heading";
import { Accordion } from "@/components/ui/common/Accordian/Accordian";
import { IconList } from "@/components/ui/common/IconList";

export default function Faqs() {
  const faqItems = [
    {
      id: "1",
      title: "Why choose ISO 9001:2015 Internal Auditor Training Course?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Hands-on, ISO 19011-aligned auditing practice (not just theory).",
            },
            {
              text: "Real audits, role-plays, and case work with reusable templates.",
            },
            {
              text: "Consultant-Trainers with industry experience and practical insights.",
            },
            {
              text: "Recognized credential (CQI & IRCA Certified: 18113).",
            },
            {
              text: "Remember: others train followers, we train leaders.",
            },
          ]}
        />
      ),
    },
    {
      id: "2",
      title: "Why choose ISO 9001:2015 Internal Auditor Training Course?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Hands-on, ISO 19011-aligned auditing practice (not just theory).",
            },
            {
              text: "Real audits, role-plays, and case work with reusable templates.",
            },
            {
              text: "Consultant-Trainers with industry experience and practical insights.",
            },
            {
              text: "Recognized credential (CQI & IRCA Certified: 18113).",
            },
            {
              text: "Remember: others train followers, we train leaders.",
            },
          ]}
        />
      ),
    },
    {
      id: "3",
      title: "What are the basic course requirements?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Best for learners with basic ISO 9001/QMS knowledge.",
            },
            {
              text: "ds competence to plan, conduct, report, and follow up audits.",
            },
            {
              text: "Practice-led (no clause-by-clause walkthrough)",
            },
            {
              text: "Emphasizes process/risk-based auditing.",
            },
            {
              text: "RWorking English for discussions and audit reporting.",
            },
          ]}
        />
      ),
    },
    {
      id: "4",
      title:
        "Who should attend the ISO 9001:2015 Internal Auditor Training Course?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "New and practicing internal auditors.",
            },
            {
              text: "Quality/Operations/Process owners supporting the audit programme.",
            },
            {
              text: "Compliance, procurement, regulatory, and document control staff.",
            },
            {
              text: "Supervisors/managers improving process performance.",
            },
            {
              text: "Aspiring Lead Auditors/consultants building toward advanced training.",
            },
          ]}
        />
      ),
    },
    {
      id: "5",
      title: "How long is the course and how is it structured?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "2 days (~16 hours); typically 08:00-17:00.",
            },
            {
              text: "Consultant-led Virtual or Classroom with workshops and simulations.",
            },
            {
              text: "Structured practice in planning, conducting, reporting, and follow-up.",
            },
            {
              text: "Continuous, in-class assessment of participation and performance.",
            },
          ]}
        />
      ),
    },
    {
      id: "6",
      title: "What exactly will I learn?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Translate ISO 9001 into process-based audit trails and sampling.",
            },
            {
              text: "Apply ISO 19011 principles, ethics, and auditor behaviours.",
            },
            {
              text: "Interview, observe, and verify objective evidence.",
            },
            {
              text: "Write clear findings; grade NCs; evaluate CARA effectiveness.",
            },
            {
              text: "Produce decision-ready reports that inform management review.",
            },
          ]}
        />
      ),
    },
    {
      id: "7",
      title: "Why should I opt for this course?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Immediate, job-ready internal auditing skills and tools..",
            },
            {
              text: "Strong bridge to ISO 9001 Lead Auditor progression.",
            },
            {
              text: "Improves compliance, risk control, and performance.",
            },
            {
              text: "Globally recognized certificate enhances credibility.",
            },
            {
              text: "Relevant across manufacturing, services, and public sector.",
            },
          ]}
        />
      ),
    },
    {
      id: "8",
      title: "Can the content be tailored to my industry?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Yes — scenarios, exercises, and emphasis can match your sector.",
            },
            {
              text: "Focus on the most relevant processes/requirements for your operations.",
            },
            {
              text: "Aligns with real work contexts to aid adoption.",
            },
            {
              text: "Supports your audit programme goals and priorities.",
            },
          ]}
        />
      ),
    },
    {
      id: "9",
      title: "What technology do I need (for virtual training)?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Modern laptop/desktop with current browser and reliable internet.",
            },
            {
              text: "HD webcam, microphone, and speakers/headset.",
            },
            {
              text: "Quiet space for interactive workshops; two monitors recommended.",
            },
            {
              text: "(Tablets/mobile not advised for audit exercises.)",
            },
          ]}
        />
      ),
    },
    {
      id: "10",
      title: "How is the course assessed?",
      content: (
        <IconList
          className="space-y-1 pl-2 text-xl md:text-lg"
          items={[
            {
              text: "Continuous, in-class assessment through exercises, simulations, and participation.",
            },
            {
              text: "Demonstrate competence in planning, conducting, reporting, and follow-up.",
            },
            {
              text: "Full attendance and satisfactory performance are required for certification.",
            },
            {
              text: "Successful learners receive the accredited Internal Auditor certificate",
            },
          ]}
        />
      ),
    },
  ];
  return (
    <section className="bg-light mt-12 overflow-hidden">
      <div className="main-container primary-py">
        <Heading
          subHeading="FAQ"
          heading="Frequently Asked Questions"
          headingClassName="text-primary"
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
