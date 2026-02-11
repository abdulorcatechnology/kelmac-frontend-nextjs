import { CourseCardProps } from "@/components/ui/course/CourseCard";


export type CourseCategory = {
  id: number;
  title: string;
  imageUrl: string;
};

export const courses: CourseCardProps[] = [
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
		certificates: ["/images/rdbarma.png"],
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
		certificates: ["/images/rdbarma.png"],
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
		certificates: ["/images/rdbarma.png"],
	},
	{
		id: 4,
		category: "ISO fundamentals",
		title: "QMS ISO 9001:2015",
		description:
			"Quality Management Systems to enhance customer satisfaction and operational efficiency.",
		hours: "19+",
		lessons: 10,
		mode: "Online",
		imageUrl: "/images/course.png",
		certificates: ["/images/rdbarma.png"],
	},
	{
		id: 5,
		category: "ISO fundamentals",
		title: "QMS ISO 9001:2015",
		description:
			"Quality Management Systems to enhance customer satisfaction and operational efficiency.",
		hours: "19+",
		lessons: 10,
		mode: "Online",
		imageUrl: "/images/course.png",
		certificates: ["/images/rdbarma.png"],
	},
	{
		id: 6,
		category: "ISO fundamentals",
		title: "QMS ISO 9001:2015",
		description:
			"Quality Management Systems to enhance customer satisfaction and operational efficiency.",
		hours: "19+",
		lessons: 10,
		mode: "Online",
		imageUrl: "/images/course.png",
		certificates: ["/images/rdbarma.png"],
	},
];

export const CourseCategory: CourseCategory[] = [
  {
    id: 1,
    title: "Quality Management",
    imageUrl: "/images/courses/categories/1.png",
  },
  {
    id: 2,
    title: "ISO Standards",
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
