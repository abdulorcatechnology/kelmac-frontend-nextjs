"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { BundleCard, BundleCardProps } from "@/components/ui/course/BundleCard";

type BundleSliderProps = {
  bundles: BundleCardProps[];
};

export default function BundleSlider({ bundles }: BundleSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative pb-20 ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={32}
        slidesPerView={2}
        navigation={{
          prevEl: ".bundle-prev",
          nextEl: ".bundle-next",
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.2,
          },
        }}
        onSlideChange={handleSlideChange}
        className=""
      >
        {bundles.map((bundle, index) => {
          // For slidesPerView: 2.2, visible slides are activeIndex and activeIndex+1
          const isVisible = index === activeIndex || index === activeIndex + 1;

          return (
            <SwiperSlide key={bundle.id}>
              <div
                className={`transition-all duration-300 ${
                  isVisible ? "opacity-100" : "opacity-50"
                }`}
              >
                <BundleCard
                  id={bundle.id}
                  imageUrl={bundle.imageUrl}
                  title={bundle.title}
                  description={bundle.description}
                  tags={bundle.tags}
                  href={bundle.href}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
        <button
          className={`bundle-prev w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
            activeIndex === 0
              ? "bg-black opacity-50 cursor-not-allowed"
              : "border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-primary"
          }`}
          aria-label="Previous slide"
          disabled={activeIndex === 0}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              d="M13 8H3M3 8L8 13M3 8L8 3"
              stroke={activeIndex === 0 ? "white" : "#4B5563"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={`bundle-next w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
            activeIndex >= bundles.length - 2
              ? "bg-black opacity-50 cursor-not-allowed"
              : "bg-black hover:bg-secondary"
          }`}
          aria-label="Next slide"
          disabled={activeIndex >= bundles.length - 2}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              d="M3 8H13M13 8L8 3M13 8L8 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
