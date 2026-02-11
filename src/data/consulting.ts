// data/consulting.ts
import { TimelineItem } from "@/components/ui/common/Timeline";

export const consultingTimelineItems: TimelineItem[] = [
    {
        id: 1,
        title: "Consulting",
        description:
            "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
        imageUrl: "/images/timeline/consulting/consulting-1.png",
        link: "/corporate/consulting",
    },
    {
        id: 2,
        title: "Integrated Management Systems ",
        description:
            "Streamline multiple standards into one efficient system — reducing duplication and improving overall effectiveness.",
        imageUrl: "/images/timeline/consulting/consulting-2.png",
        link: "#",
    },
    {
        id: 3,
        title: "Gap Assessment & Certification Readiness",
        description:
            "We evaluate your current systems against standard requirements and provide a clear roadmap to compliance and certification.",
        imageUrl: "/images/timeline/consulting/consulting-3.png",
        link: "#",
    },
        {
        id: 4,
        title: "Process Improvement & Risk Management",
        description:
            "Identify inefficiencies, reduce waste, and build stronger control over risks with proven methodologies like PDCA, FMEA, and root cause analysis.",
        imageUrl: "/images/timeline/consulting/consulting-4.png",
        link: "#",
    },

];


export const industriesItems = [
	{
		id: 1,
		title: "Manufacturing & Engineering",
		imageUrl: "/images/slider/course-image-1.png",
	},
	{
		id: 2,
		title: "Education ",
		imageUrl: "/images/slider/consulting-slider/industries-1.png",
	},
	{
		id: 3,
		title: "Healthcare ",
		imageUrl: "/images/slider/consulting-slider/industries-2.png",
	},
	{
		id: 4,
		title: "Logistics ",
		imageUrl: "/images/slider/course-image-1.png",
	},
    	{
		id: 5,
		title: "Logistics ",
		imageUrl: "/images/slider/course-image-1.png",
	},
];


export interface ServiceCardData {
    id?: string | number;
    title: string;
    description: string;
    imageUrl: string;
}

export const consultingServices: ServiceCardData[] = [
    {
        id: 1,
        title: "Full Service",
        description: "From compliance to capability, we support your organization through comprehensive auditing, strategic consulting.",
        imageUrl: "/images/bg/consulting-delivery-1.png",
    },
    {
        id: 2,
        title: "Shared Approach",
        description: "From compliance to capability, we support your organization through comprehensive auditing, strategic consulting.",
        imageUrl: "/images/bg/consulting-delivery-2.png",
    },
    {
        id: 3,
        title: "Bespoke ",
        description: "From compliance to capability, we support your organization through comprehensive auditing, strategic consulting.",
        imageUrl: "/images/bg/consulting-delivery-3.png",
    },
    {
        id: 4,
        title: "Micro Learning",
        description: "Strategic consulting to help organizations implement effective management systems.",
        imageUrl: "/images/bg/consulting-delivery-1.png",
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


export const consultingApproach = [
    {
        id: 1,
        title: "Discover",
        description:
            "Clarify objectives, risks, obligations, and current maturity; agree the measurable outcomes.",
        image: "/images/bg/consulting-approach-1.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 2,
        title: "Design",
        description:
            "Co-create the process architecture, controls, and documented information sized to your operations.",
        image: "/images/bg/consulting-approach-2.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 3,
        title: "Develop",
        description:
            "Pilot, train, and coach; run live audits and management reviews to prove the design.",
        image: "/images/bg/consulting-approach-3.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
    {
        id: 4,
        title: "Assure",
        description:
            "Internal/supplier audits, pre-assessment, and readiness scoring aligned to certification timelines.",
        image: "/images/bg/consulting-approach-4.png",
        knowMore: true,
        href: "/auditing/transforming"

    },
];