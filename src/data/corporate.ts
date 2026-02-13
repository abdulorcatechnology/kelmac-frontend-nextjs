// data/corporates.ts
import { TimelineItem } from "@/components/ui/common/Timeline";

export const corporateTimelineItems: TimelineItem[] = [
    {
        id: 1,
        title: "Consulting",
        description:
            "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
        imageUrl: "/images/timeline/home-1.png",
        link: "/corporate/consulting",
    },
    {
        id: 2,
        title: "Auditing",
        description:
            "We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.",
        imageUrl: "/images/timeline/home-2.png",
        link: "/corporate/implementation",
    },
    {
        id: 3,
        title: "Learning",
        description:
            "From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you and you business with stratex.",
        imageUrl: "/images/timeline/home-3.png",
        link: "/corporate/learning",
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

//  Approach Data

export const auditingApproach = [
    {
        id: 1,
        title: "Transforming to drive Quality",
        description:
            "We are bringing our bold vision for the future of audit to life, with quality at the center.",
        image: "/images/bg/approach-1.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 2,
        title: "The Kelmac Group Digital Platform",
        description:
            "Discover how the EY global audit platform leverages an organization's data to empower audit teams to focus on the risks that matter.",
        image: "/images/bg/approach-2.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 3,
        title: "Future Audit Ready",
        description:
            "See how diverse perspectives, deep business knowledge, multidisciplinary skills and digital capabilities differentiate our EY audit teams.",
        image: "/images/bg/approach--3.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 4,
        title: "Unlocking the value from the audit",
        description:
            "Powered by the capabilities of our teams and our global technology platform, the EY data-first approach delivers high-quality audits that empower.",
        image: "/images/bg/approach-4.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
];

export const consultingApproach = [
    {
        id: 1,
        title: "Discover",
        description:
            "Clarify objectives, risks, obligations, and current maturity; agree the measurable outcomes.",
        image: "/images/bg/approach-1.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 2,
        title: "Design",
        description:
            "Co-create the process architecture, controls, and documented information sized to your operations.",
        image: "/images/bg/approach-2.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 3,
        title: "Develop",
        description:
            "Pilot, train, and coach; run live audits and management reviews to prove the design.",
        image: "/images/bg/approach--3.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 4,
        title: "Assure",
        description:
            "Internal/supplier audits, pre-assessment, and readiness scoring aligned to certification timelines.",
        image: "/images/bg/approach-4.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
];
