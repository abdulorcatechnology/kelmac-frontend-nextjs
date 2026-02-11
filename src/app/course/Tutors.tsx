"use client";
import { Heading } from "@/components/ui/common/Heading";
import Image from "next/image";
import { IconList } from "@/components/ui/common/IconList";
import { IconGraduationHat } from "@/components/icons/icons";
import { Course } from "@/types/course";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface TutorsProps {
  course?: Course;
}

export default function Tutors({ course }: TutorsProps) {
  // TODO: Fetch full instructor details using course.instructor ID
  // Currently course.instructor only contains the instructor ID
  // Need to create an instructor endpoint to fetch full details

  const authorPoints = [
    {
      icon: <IconGraduationHat />,
      text: "IRCA Certified ISO 9001:2015 Lead Auditor",
    },
    {
      icon: <IconGraduationHat />,
      text: "ISO 45001 & ISO 14001 Internal Auditor",
    },
    {
      icon: <IconGraduationHat />,
      text: "Certified Trainer – International Quality Federation",
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
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide>
              <section className="relative bg-secondary overflow-hidden rounded-3xl flex flex-col items-center">
                <div className="absolute md:hidden inset-0 z-10 bg-gradient-to-b from-transparent from-[0%] via-secondary via-[25%] to-secondary to-[100%]"></div>
                <div className="hidden md:block md:absolute inset-0 z-10 bg-gradient-to-r from-transparent from-[30%] via-secondary via-[45%] to-secondary to-[100%]"></div>

                <div className="relative md:absolute w-full md:w-[45%] h-80 md:h-full top-0 left-0">
                  <img
                    src="/images/tutor.png"
                    className="w-full h-full absolute object-cover"
                    alt=""
                  />
                </div>
                <div className="main-container primary-py relative z-10 flex items-end justify-end">
                  <div className="text-white w-full md:w-[60%] space-y-4 md:pl-12">
                    <h2 className="text-4xl font-semibold capitalize">
                      {typeof course?.instructor === "object" &&
                      course?.instructor
                        ? course.instructor.firstName +
                          " " +
                          course.instructor.lastName
                        : ""}
                    </h2>
                    <p className="md:text-lg text-xl">
                      CQI-IRCA Certified Lead Auditor & Trainer
                    </p>
                    <div className="inline-block bg-[#2A3F59] py-2 px-4 rounded-lg mb-8">
                      IRCA Registration No: 0123456
                    </div>
                    <p className="md:text-lg mb-8">
                      Md. Anthony D.costa is a certified CQI-IRCA Lead Auditor
                      with over 12 years of experience in quality management
                      systems, compliance audits, and corporate training. He has
                      conducted 200+ training sessions globally across ISO 9001,
                      ISO 14001, and ISO 45001 standards. Known for his
                      interactive delivery style and real-world case examples,
                      Mr. Karim ensures that learners not only pass their exams
                      but also gain practical industry insight.
                    </p>
                    <IconList
                      className="text-white font-semibold md:text-xl"
                      items={authorPoints}
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
