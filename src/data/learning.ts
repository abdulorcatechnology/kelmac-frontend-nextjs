import { TimelineItem } from "@/components/ui/common/Timeline";
import { CourseCardProps } from "@/components/ui/course/CourseCard";

export const learningTimelineItems: TimelineItem[] = [
    {
        id: 1,
        title: "Certified Training Courses",
        description:
            "End-to-end support for ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Health & Safety), and other standards. From documentation to training, we guide you through every step.",
        imageUrl: "/images/timeline/learning/learning-1.png",
        link: "/corporate/consulting",
    },
    {
        id: 2,
        title: "Flexible Delivery Options",
        description:
            "Streamline multiple standards into one efficient system — reducing duplication and improving overall effectiveness..",
        imageUrl: "/images/timeline/learning/learning-2.png",
        link: "/course",
    },
    {
        id: 3,
        title: "Course Bundles & Learning Paths",
        description:
            "We evaluate your current systems against standard requirements and provide a clear roadmap to compliance and certification.",
        imageUrl: "/images/timeline/learning/learning-3.png",
        link: "/course/all-courses",
    },
    {
        id: 4,
        title: "Exams, Certificates & Beyond",
        description:
            "Identify inefficiencies, reduce waste, and build stronger control over risks with proven methodologies like PDCA, FMEA, and root cause analysis.",
        imageUrl: "/images/timeline/learning/learning-4.png",
        link: "/course",
    },
];

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
    },
];

export interface ServiceCardData {
    id?: string | number;
    title: string;
    description: string;
    imageUrl: string;
}

export const corporateServices: ServiceCardData[] = [
    {
        id: 1,
        title: "Micro Learning",
        description: "Comprehensive quality management systems to enhance operational efficiency and customer satisfaction.",
        imageUrl: "/images/bg/delivery-bg-1.png",
    },
    {
        id: 2,
        title: "In-Person Learning",
        description: "Professional internal audit services to ensure compliance and identify improvement opportunities.",
        imageUrl: "/images/bg/delivery-bg-2.png",
    },
    {
        id: 3,
        title: "Self-Paced Learning",
        description: "Expert training programs to develop your team's skills and capabilities in quality management.",
        imageUrl: "/images/bg/delivery-bg-3.png",
    },
    {
        id: 4,
        title: "Virtual Learning ",
        description: "From compliance to capability, we support your organization through comprehensive auditing, strategic consulting.",
        imageUrl: "/images/bg/delivery-bg-4.png",
    },
    {
        id: 5,
        title: "Blended Learning",
        description: "From compliance to capability, we support your organization through comprehensive auditing, strategic consulting.",
        imageUrl: "/images/bg/delivery-bg-5.png",
    }
];

export const serviceCardContent = {
    heading: "Delivery Methods",
    subHeading: "How we deliver",
    buttonText: "Learn More",
    sliderConfig: {
        slidesPerView: { mobile: 1, tablet: 2, desktop: 3 },
        spaceBetween: 24,
        autoplay: { delay: 3000 },
        navigation: true,
        pagination: true,
        loop: true,
    }
};

export interface LearningItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
}

// Core Services Data
export const coreServicesItems: LearningItem[] = [
    {
    id: 1,
    icon: "IconTarget",
    title: "Quality Management Systems",
    description: "Quality Management System Based Framework For Achievement Goals And Improving Performance.",
    tags: ["ISO 9001", "Lead Auditor", "Internal Audit", "Overview"],
    link: "/learning/quality-management",
    imageUrl: "/images/bg/cirriculum-bg-1.png"
  },
  {
    id: 2,
    icon: "IconHeartBeat",
    title: "Medical Device Quality Management Systems",
    description: "International ISO 13485 for the Medical Device Quality And Health System Management.",
    tags: ["ISO 13485", "Lead Auditor", "Internal Audit", "Overview"],
    link: "/learning/medical-device",
    imageUrl: "/images/bg/cirriculum-bg-2.png"
  },
  {
    id: 3,
    icon: "IconPill",
    title: "Pharmaceutical Quality Systems",
    description: "Quality Management For Pharmaceutical And Manufacturing Guidelines For Good Manufacturing Practices.",
    tags: ["cGMP", "GDP", "GMP"],
    link: "/learning/pharmaceutical",
    imageUrl: "/images/bg/cirriculum-bg-3.png"
  },
  {
    id: 4,
    icon: "IconMicroscope",
    title: "Laboratory Management Systems",
    description: "Quality Standards For Testing And Calibration Laboratories To Achieve ISO/IEC 17025 Compliance.",
    tags: ["ISO/IEC 17025", "Internal Audit"],
    link: "/learning/laboratory",
    imageUrl: "/images/bg/cirriculum-bg-4.png"
  },
  {
    id: 5,
    icon: "IconAirplane",
    title: "Healthcare Management Systems",
    description: "International ISO 13485 for Healthcare Quality And Health System Management.",
    tags: ["ISO 13485", "Internal Audit"],
    link: "/learning/healthcare",
    imageUrl: "/images/bg/cirriculum-bg-5.png"
  },
  {
    id: 6,
    icon: "IconFeather",
    title: "Environment Management Systems",
    description: "Environmental Sustainability And Management System For Business Environmental Performance.",
    tags: ["ISO 14001"],
    link: "/learning/environment",
    imageUrl: "/images/bg/cirriculum-bg-6.png"
  },
  {
    id: 7,
    icon: "IconMicroscope",
    title: "Occupational Health & Safety Management Systems",
    description: "Occupational Health And Safety Management System For Workplace Risk And Compliance Management.",
    tags: ["ISO 45001"],
    link: "/learning/occupational-health",
    imageUrl: "/images/bg/cirriculum-bg-7.png"
  },
  {
    id: 8,
    icon: "IconDNA",
    title: "Food Safety Management Systems",
    description: "International Quality Control For The Food Industry And General Food Safety Management.",
    tags: ["ISO 22000", "HACCP", "FSMS"],
    link: "/learning/food-safety",
    imageUrl: "/images/bg/cirriculum-bg-8.png"
  },
  {
    id: 9,
    icon: "IconLock2",
    title: "Information Security, Privacy & Cyber Security Management Systems",
    description: "Information Security For Privacy And Cyber Risk Management And Cyber Security ISO Framework.",
    tags: ["ISO 27001", "ISO", "ISMS"],
    link: "/learning/information-security",
    imageUrl: "/images/bg/cirriculum-bg-9.png"
  },
  {
    id: 10,
    icon: "IconGraph",
    title: "Business Continuity Management Systems",
    description: "Business Continuity Planning And Risk Resilience Planning.",
    tags: ["ISO 22301"],
    link: "/learning/business-continuity",
    imageUrl: "/images/bg/cirriculum-bg-10.png"
  }
];

// Advanced Programs Data
export const advancedProgramsItems: LearningItem[] = [
  {
    id: 6,
    icon: "IconFeather",
    title: "Environment Management Systems",
    description: "Environmental Sustainability And Management System For Business Environmental Performance.",
    tags: ["ISO 14001"],
    link: "/learning/environment",
    imageUrl: "/images/bg/cirriculum-bg-6.png"
  },
  {
    id: 7,
    icon: "IconMicroscope",
    title: "Occupational Health & Safety Management Systems",
    description: "Occupational Health And Safety Management System For Workplace Risk And Compliance Management.",
    tags: ["ISO 45001"],
    link: "/learning/occupational-health",
    imageUrl: "/images/bg/cirriculum-bg-7.png"
  },
  {
    id: 8,
    icon: "IconDNA",
    title: "Food Safety Management Systems",
    description: "International Quality Control For The Food Industry And General Food Safety Management.",
    tags: ["ISO 22000", "HACCP", "FSMS"],
    link: "/learning/food-safety",
    imageUrl: "/images/bg/cirriculum-bg-8.png"
  },
  {
    id: 9,
    icon: "IconLock2",
    title: "Information Security, Privacy & Cyber Security Management Systems",
    description: "Information Security For Privacy And Cyber Risk Management And Cyber Security ISO Framework.",
    tags: ["ISO 27001", "ISO", "ISMS"],
    link: "/learning/information-security",
    imageUrl: "/images/bg/cirriculum-bg-9.png"
  },
  {
    id: 10,
    icon: "IconGraph",
    title: "Business Continuity Management Systems",
    description: "Business Continuity Planning And Risk Resilience Planning.",
    tags: ["ISO 22301"],
    link: "/learning/business-continuity",
    imageUrl: "/images/bg/cirriculum-bg-10.png"
  }
];

export const learningItems: LearningItem[] = [...coreServicesItems, ...advancedProgramsItems];

export const learningConfig = {
  title: "ISO Management System Standards And Regulatory Curriculum",
  tabs: [
    { id: "core", label: "Core Services", active: true },
    { id: "advanced", label: "Advanced Programs", active: false }
  ]
};

//

export interface LearningCapability {
  id: number;
  title: string;
  description: string;
}

export const learningCapabilities: LearningCapability[] = [
  {
    id: 1,
    title: "Learner Controls The Own Learning",
    description: "We use technology and learning pathways to customize your experience and find you the right learning curriculum, courses and learning pathway decisions for themselves."
  },
  {
    id: 2,
    title: "Learning That Is Convenient, Current And Always Transformational In Terms Of Results Achieved",
    description: "We benchmark our learning of practical simulated exercises during a learning delivery and assessment is made at the organization-wide level so engagement and problem-based application is made."
  },
  {
    id: 3,
    title: "Delivering A High-Quality Learner Experience",
    description: "We manage and control the whole learning cycle from end to end and hence assuring experience that is described as the best in the industry."
  },
  {
    id: 4,
    title: "Ethical And Sustainable Approach And Learning",
    description: "We are not afraid to say what the requirements intend, and how they can best be implemented and verified."
  },
  {
    id: 5,
    title: "Latest Insights And Learning Best Practices",
    description: "Our learning curriculum and content are based upon best and latest academic, industry and Regulatory requirements and Regulatory requirements."
  },
  {
    id: 6,
    title: "Learner Access To Digital Materials",
    description: "We use leading edge technologies to provide early access and can easily prior to the learning cycle event."
  },
  {
    id: 7,
    title: "Excellent Learner Support Throughout The Learning Cycle",
    description: "Whether live real timed learning, virtual learning, or blended learning we support the learner from start to end and just add value during the learning delivery."
  },
  {
    id: 8,
    title: "Kelmac Group Academy Alumina",
    description: "Our Learner Consultants work directly for us, we do not outsource delivery hence the delivery is always high-quality, consistent and delivered effectively."
  },
  {
    id: 9,
    title: "Experts Who Keep Themselves Abreast Of Current Best Industry Standards",
    description: "We listen to create a fulfilled Group Academy Alumna to share learners career outcomes, networks and further learning."
  }
];