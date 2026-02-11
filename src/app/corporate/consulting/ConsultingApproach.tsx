"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import { Heading } from "@/components/ui/common/Heading";
import {
    IconBinocular,
    IconRocket,
    IconDesign,
    IconCertificate,
} from "@/components/icons/icons";

const slides = [
    {
        icon: <IconBinocular />,
        title: "Discovery & Planning",
        description:
            "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
    },
    {
        icon: <IconDesign />,
        title: "System Development",
        description:
            "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
    },
    {
        icon: <IconRocket />,
        title: "Training & Implementation",
        description:
            "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
    },
    {
        icon: <IconCertificate />,
        title: "Internal Audit ",
        description:
            "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
    },
];

export default function ConsultingApproach() {
    return (
        <section className="rounded-3xl bg-lighter overflow-hidden">
            <div className="main-container primary-py">
                <Heading subHeading="Timeline" heading="Our Consulting Approach" headingClassName="text-primary"/>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="!overflow-visible"
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i} className="!w-[320px]">
                            <div className="py-12 px-7 bg-white rounded-4xl space-y-6">
                                {slide.icon}
                                <h3 className="text-3xl text-primary font-semibold">
                                    {slide.title}
                                </h3>
                                <p className="text-black capitalize">{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
