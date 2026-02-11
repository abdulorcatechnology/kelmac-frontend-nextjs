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
]