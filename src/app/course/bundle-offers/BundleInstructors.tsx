"use client";

import { Heading } from "@/components/ui/common/Heading";
import { IconList } from "@/components/ui/common/IconList";
import { IconGraduationHat } from "@/components/icons/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function BundleInstructors() {
  const instructors = [
    {
      name: "Anthony D.costa",
      bio: "CQI-IRCA Certified Lead Auditor & Trainer with over 12 years of experience in quality management systems, compliance audits, and corporate training. Conducted 200+ training sessions globally across ISO 9001, ISO 14001, and ISO 45001 standards. Known for interactive delivery style and real-world case examples.",
      regNo: "0123456",
      points: [
        "IRCA Certified ISO 9001:2015 Lead Auditor",
        "ISO 45001 & ISO 14001 Internal Auditor",
        "Certified Trainer – International Quality Federation",
      ],
    },
  ];

  return (
    <section>
      <div className="primary-py">
        <Heading
          subHeading="Consultants"
          heading="Introducing our skilled Consultants!"
          headingClassName="text-primary"
        />
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          autoplay={false}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="tutor-swiper bottom-pagination"
        >
          {instructors.map((instructor, index) => (
            <SwiperSlide key={index}>
              <section
                className="relative overflow-hidden rounded-3xl flex flex-col items-center bg-cover bg-center bg-no-repeat h-screen"
                style={{ backgroundImage: "url('/images/bg/bundle-bg.png')" }}
              >
                <div className="main-container primary-py relative z-10 flex items-start justify-end w-full h-full pt-16 md:pt-20">
                  <div className="text-white w-full md:w-[60%] space-y-4 md:pl-12">
                    <h2 className="text-4xl font-semibold">
                      {instructor.name}
                    </h2>
                    <p className="md:text-lg text-xl">{instructor.bio}</p>
                    <div className="inline-block bg-[#2A3F59] py-2 px-4 rounded-lg mb-8">
                      IRCA Registration No: {instructor.regNo}
                    </div>
                    <IconList
                      className="text-white md:text-xl"
                      items={instructor.points.map((point) => ({
                        icon: <IconGraduationHat />,
                        text: point,
                      }))}
                    />
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
