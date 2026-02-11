export interface AuditingItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export type CategoryItem = {
  id: number;
  title: string;
  imageUrl: string;
};


export const auditingItems: AuditingItem[] = [
  {
    id: 1,
    title: "Internal & External Audits",
    description: "Independent assessments aligned with ISO standards, tailored to your operational needs.",
    imageUrl: "/images/bg/service-frame.png",
  },
  {
    id: 2,
    title: "Supplier & Second-Party Audits",
    description: "Objective evaluations of vendor performance, risk, and compliance.",
    imageUrl: "/images/bg/service-frame.png",
  },
  {
    id: 3,
    title: "Certification Readiness",
    description: "Gap analysis and system reviews to prepare you for third-party audits.",
    imageUrl: "/images/bg/service-frame.png",
  },
];

export const categoryItems: CategoryItem[] = [
  {
    id: 1,
    title: "Quality Management",
    imageUrl: "/images/courses/categories/1.png",
  },
  {
    id: 2,
    title: "Environmental Management",
    imageUrl: "/images/courses/categories/2.png",
  },
  {
    id: 3,
    title: "Health & Safety",
    imageUrl: "/images/courses/categories/3.png",
  },
  {
    id: 4,
    title: "Food Safety",
    imageUrl: "/images/courses/categories/4.png",
  },
  {
    id: 5,
    title: "Food Safety",
    imageUrl: "/images/courses/categories/4.png",
  },

];

export const auditingFaqItems = [
	{
		id: "1",
		title: "What is auditing and why is it important?",
		content:
			"",
	},
	{
		id: "2",
		title: "What types of auditing services do you offer?",
		content:
			".",
	},
	{
		id: "3",
		title: "How long does a typical audit take?",
		content:
			".",
	},
	{
		id: "4",
		title: "Who are your auditors?",
		content:
			".",
	},
	{
		id: "5",
		title: "How do I prepare for an audit?",
		content:
			".",
	},
	{
		id: "6",
		title: "What happens after the audit is completed?",
		content:
			".",
	},
	{
		id: "7",
		title: "Can you customize audits for specific industries?",
		content:
			".",
	},
	{
		id: "8",
		title: "How often should audits be conducted?",
		content:
			".",
	},
	{
		id: "9",
		title: "What is the difference between internal and external audits?",
		content:
			".",
	},
	{
		id: "10",
		title: "How much does an audit cost?",
		content:
			".",
	},
];