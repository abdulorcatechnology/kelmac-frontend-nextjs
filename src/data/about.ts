import { CaseCardProps } from "@/components/ui/case/CaseCard";
import { CardProps } from "@/components/ui/common/Card";
import { TimelineItem } from "@/components/ui/common/Timeline";

export const caseItems: CaseCardProps[] = [
	{
		id: 1,
		imageUrl: "/images/case/case-1.png",
		category: "Case study",
		date: "24 March, 2024",
		title: "Expanding economic opportunities for rural farmers in East Africa",
		href: "/",
	},
	{
		id: 2,
		imageUrl: "/images/case/case-2.jpg",
		category: "Case study",
		date: "15 april, 2024",
		title: "Analyzing consumer behavior trends in urban areas",
		href: "/",
	},
	{
		id: 3,
		imageUrl: "/images/case/case-3.jpg",
		category: "Case study",
		date: "30 may, 2024",
		title: "Assessing the success of education in underserved areas.",
		href: "/",
	},
];

export const exploreCaseItems: CardProps[] = [
	{
		id: 1,
		imageUrl: "/images/case/case-1.png",
		title: "Our Latest blog.",
		excerpt:
			"A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.",
		btnText: "Read all blogs",
		href: "/resources/latest-blogs",
	},
	{
		id: 2,
		imageUrl: "/images/about-kelmac.jpg",
		title: "About Kelmac",
		excerpt:
			"A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.",
		href: "/about/kelmac-group",
	},
	{
		id: 3,
		imageUrl: "/images/our-history.png",
		title: "Our History",
		excerpt:
			"A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.",
		href: "/about/our-history",
	},
	{
		id: 4,
		imageUrl: "/images/our-founder.jpg",
		title: "Our Founder",
		excerpt:
			"A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.",
		href: "/about/our-founder",
	},
];

export const timelineItems: TimelineItem[] = [
	{
		id: 1,
		title: "Training",
		description:
			"We build auditor and practitioner capability that stands up to certification-body scrutiny and real-world pressure. Public schedules and tailored in-house cohorts—delivered on-site or live virtual—cover Fundamentals, Internal Auditor, and Lead Auditor levels. Our auditor programmes are CQI & IRCA Certified, taught by practitioners who audit and implement the same systems they teach.",
		imageUrl: "/images/timeline/home-1.png",
		link: "/corporate/learning",
	},
	{
		id: 2,
		title: "Auditing",
		description:
			"Independent internal, supplier, and pre-assessment audits that surface risk, close gaps, and build certification-ready confidence across your value chain. We plan and execute audits to ISO 19011 good practice with a risk-based sampling approach that respects your operating realities. What you get: audit plan and scope, risk and process maps, evidence trails, concise findings, prioritised corrective-action plan, and a readiness score you can track..",
		imageUrl: "/images/timeline/home-3.png",
		link: "/corporate/auditing",
	},
	{
		id: 3,
		title: "Consulting",
		description:
			"Pragmatic system design and improvement aligned to strategy, risk, and regulatory expectations—delivered by consultants who also teach and audit. We co-design Lean Business Process Management Systems with ISO Certification Inside™, making processes simple, owned by users, and resilient. What you get: process architecture and SOPs, risk registers and controls, KPI/assurance frameworks, documented information packs, governance cadence, and change-management support to embed the system",
		imageUrl: "/images/timeline/home-2.png",
		link: "/corporate/consulting",
	},
];