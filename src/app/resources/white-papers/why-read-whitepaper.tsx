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
  IconCirclesFour,
} from "@/components/icons/icons";

const slides = [
  {
    icon: <IconBinocular />,
    title: "Research You Can Trust",
    description:
      "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
  },
  {
    icon: <IconDesign />,
    title: "Practical & Action-Oriented",
    description:
      "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
  },
  {
    icon: <IconRocket />,
    title: "Industry-Focused",
    description:
      "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
  },
  {
    icon: <IconCertificate />,
    title: "Future-Ready Thinking",
    description:
      "We begin by understanding your learning needs, goals, and current challenges. This could be a one-on-one meeting, a form, or a quick diagnostic session to assess where you are and where you want to go.",
  },
];

export default function WhyReadWhitepaper() {
  return (
    <section className="rounded-3xl bg-lighter overflow-hidden">
      <div className="main-container primary-py">
        <Heading subHeading="Reasons" heading="Why Read Our Whitepapers?" headingClassName="text-primary"/>
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
