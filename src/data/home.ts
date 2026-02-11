import { TimelineItem } from "@/components/ui/common/Timeline";
import { CourseCardProps } from "@/components/ui/course/CourseCard";
import { BlogCardProps } from "@/components/ui/blog/BlogCard";

export const timelineItems: TimelineItem[] = [
	{
		id: 1,
		title: "Consulting",
		description:
			"Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
		imageUrl: "/images/timeline/home-1.png",
		link: "#",
	},
	{
		id: 2,
		title: "Learning",
		description:
			"We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.",
		imageUrl: "/images/timeline/home-2.png",
		link: "#",
	},
	{
		id: 3,
		title: "Auditing",
		description:
			"From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you and your business with Stratex.",
		imageUrl: "/images/timeline/home-3.png",
		link: "#",
	},
];

export const coursesItems: CourseCardProps[] = [
	{
		id: 1,
		category: "Quality Management System",
		title: "QMS ISO 9001:2015",
		description:
			"Quality Management Systems to enhance customer satisfaction and operational efficiency.",
		hours: "08",
		lessons: 10,
		mode: "Online",
		imageUrl: "/images/course.png",
		certificates: ["/images/course-certified.png"],
	},
	{
		id: 2,
		category: "Quality Management System",
		title: "QMS ISO 9001:2015",
		description:
			"Quality Management Systems to enhance customer satisfaction and operational efficiency.",
		hours: "19+",
		lessons: 10,
		mode: "Online",
		imageUrl: "/images/course.png",
		certificates: ["/images/course-certified.png"],
	},
	{
		id: 3,
		category: "ISO fundamentals",
		title: "QMS ISO 9001:2015",
		description:
			"Quality Management Systems to enhance customer satisfaction and operational efficiency.",
		hours: "19+",
		lessons: 10,
		mode: "Online",
		imageUrl: "/images/course.png",
		certificates: ["/images/course-certified.png"],
	},
];

export const blogItems: BlogCardProps[] = [
	{
		id: 1,
		imageUrl: "/images/blog/post-1.png",
		category: "Food Safety",
		date: "24 March, 2024",
		title:
			"FSSC 22000 Lead Auditor vs. Internal Auditor: Understanding the Difference",
		excerpt:
			"Food safety is a critical concern in the food industry, and ensuring compliance with global standards is essential for organizations seeking to maintain high levels of food safety and",
		href: "/blog/fssc-22000-vs-internal-auditor",
	},
	{
		id: 2,
		imageUrl: "/images/blog/post-2.png",
		category: "Food Safety",
		date: "24 March, 2024",
		title: "Preparing for an ISO 45001 Internal Audit: Best Practices",
		excerpt:
			"Food safety is a critical concern in the food industry, and ensuring compliance with global standards is essential for organizations seeking to maintain high levels of food safety and",
		href: "/blog/fssc-22000-vs-internal-auditor",
	},
	{
		id: 3,
		imageUrl: "/images/blog/post-3.png",
		category: "Food Safety",
		date: "24 March, 2024",
		title:
			"Advanced Auditing Techniques for Experienced ISO 13485 Lead Auditors",
		excerpt:
			"Food safety is a critical concern in the food industry, and ensuring compliance with global standards is essential for organizations seeking to maintain high levels of food safety and",
		href: "/blog/fssc-22000-vs-internal-auditor",
	},

];

export const locationItems = [
	{
		id: 1,
		xPercent: 26.5,
		yPercent: 28,
		title: "Chicago",
		alwaysVisible: true,
	},
	{
		id: 2,
		xPercent: 42,
		yPercent: 20,
		title: "Ireland",
		alwaysVisible: true,
	},
	{
		id: 3,
		xPercent: 86,
		yPercent: 82,
		title: "Australia",
		alwaysVisible: true,
	},
	{
		id: 4,
		xPercent: 50,
		yPercent: 70,
		title: "Africa",
		alwaysVisible: true,
	},
];
