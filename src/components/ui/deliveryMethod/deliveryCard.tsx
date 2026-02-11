'use client';

import Image from 'next/image';
import Button from "@/components/ui/button/Button";
import { IconArrowRight } from "@tabler/icons-react";
import { ServiceCardData, corporateServices, serviceCardContent } from '@/data/corporate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heading } from "@/components/ui/common/Heading";


import 'swiper/css';

interface ServiceCardProps {
    service: ServiceCardData;
    className?: string;
    buttonText?: string;
    onButtonClick?: (service: ServiceCardData) => void;
}

interface ServiceCardSliderProps {
    services: ServiceCardData[];
    slidesPerView?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    spaceBetween?: number;
    autoplay?: boolean | { delay: number };
    loop?: boolean;
    className?: string;
    cardClassName?: string;
    buttonText?: string;
    onServiceClick?: (service: ServiceCardData) => void;
}

export const ServiceCard = ({
    service,
    className = "",
    buttonText = "Know More",
    onButtonClick
}: ServiceCardProps) => {
    const handleClick = () => {
        onButtonClick?.(service);
    };

    return (
        <div
            className={`relative min-h-150 rounded-3xl overflow-hidden text-white flex items-end shadow-[0_10px_10px_0_rgba(255,255,255,0.1)] hover:shadow-[15px_30px_30px_10px_rgba(100,136,230,0.5)] transition-all duration-500 ${className}`}
        >
            <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover rounded-3xl"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-8 lg:p-9 z-10 max-w-10xl">
                <Heading
                    heading={service.title}
                    className='text-3xl lg:text-4x leading-snug mb-3 break-words text-left'
                />
                <p>{service.description}</p>

                <Button
                    className="mt-5 border-white"
                    iconclassName="bg-transparent"
                    spanclassName="w-88 text-center"
                    text={buttonText}
                    color="transparent"
                    size="sm"
                    icon={<IconArrowRight className="stroke-white" />}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

// Slider Component
export const ServiceCardSlider = ({
    services,
    slidesPerView = { mobile: 1, tablet: 2, desktop: 3 },
    spaceBetween = 24,
    autoplay = false,
    loop = false,
    className = "",
    cardClassName = "",
    buttonText = "Know More",
    onServiceClick
}: ServiceCardSliderProps) => {
    return (
        <div className={`service-slider main-container ${className}`}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView.mobile}
                autoplay={autoplay}
                loop={loop}
                breakpoints={{
                    640: {
                        slidesPerView: slidesPerView.mobile,
                    },
                    768: {
                        slidesPerView: slidesPerView.tablet,
                    },
                    1024: {
                        slidesPerView: slidesPerView.desktop,
                    },
                }}
                className="pb-12 !overflow-visible"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={service.id || index}>
                        <ServiceCard
                            service={service}
                            className={cardClassName}
                            buttonText={buttonText}
                            onButtonClick={onServiceClick}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};