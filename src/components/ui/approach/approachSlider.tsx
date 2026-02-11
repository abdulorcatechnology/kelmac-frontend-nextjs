"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { auditingApproach, consultingApproach } from "@/data/corporate";
import LinkButton from "@/components/ui/button/LinkButton";
import { IconArrowRight } from "@/components/icons/icons";

interface SliderItem {
  title: string;
  description: string;
  image: string;
  knowMore?: boolean;
  href?: string;
}

interface ApproachSliderProps {
  activeTab?: "auditing" | "consulting";
  data?: SliderItem[];
  autoplayDelay?: number;
  spaceBetween?: number;
  slideWidthClass?: string;
}

export default function ApproachSlider({
  activeTab,
  data,
  autoplayDelay = 3000,
  spaceBetween = 24,
  slideWidthClass = "!w-[320px]",
}: ApproachSliderProps) {
  const items =
    data || (activeTab === "consulting" ? consultingApproach : auditingApproach);

  return (
    <Swiper
      observer
      observeParents
      modules={[Autoplay, Navigation]}
      spaceBetween={spaceBetween}
      slidesPerView="auto"
      loop
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      className="!overflow-visible"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className={slideWidthClass}>
          {/* Image section */}
          <div
            className="h-[260px] w-full rounded-t-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          {/* Content section with fixed height */}
          <div className="flex flex-col p-3 text-left h-[280px]">
            {/* Title - fixed height */}
            <h3 className="text-3xl text-white leading-snug mb-3 h-[80px] flex items-start">
              <span className="line-clamp-2">{item.title}</span>
            </h3>
            
            {/* Description - fixed height */}
            <div className="flex-1 flex items-start">
              <p className="text-white/80 text-lg leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>

            {/* Button - aligned at bottom */}
            <div className="mt-auto">
              {item.knowMore ? (
                <LinkButton
                  href={item.href || "#"}
                  text="Know more"
                  icon={<IconArrowRight />}
                  className="text-white"
                />
              ) : (
                <div className="h-10" />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}