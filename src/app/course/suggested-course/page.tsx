"use client";

import Image from "next/image";
import {
  IconArrowRight,
  IconClockHour3Filled,
  IconBookFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import { CourseCard } from "@/components/ui/course/CourseCard";
import Button from "@/components/ui/button/Button";
import { courses } from "@/data/suggested-courses";
import "swiper/css";
import "swiper/css/pagination";
import { Heading } from "@/components/ui/common/Heading";
import { Tag } from "lucide-react";
import { useGetAllCoursesQuery } from "@/store/api/courseApi";
import { BundleCard } from "@/components/ui/course/Bundle-card";
import { PromoSection } from "@/components/ui/course/PromoCard";

export default function SuggestedCoursePage() {
  const {
    data: coursesData,
    isLoading: coursesLoading,
    error: coursesError,
  } = useGetAllCoursesQuery({
    page: 1,
    limit: 2,
  });
  return (
    <main className="main bg-white">
      <section className="relative overflow-hidden rounded-3xl min-h-screen">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div
            className="absolute top-0 left-0 right-0 h-full min-h-screen bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/images/all-courses.png')" }}
          />
          <div className="absolute left-0 right-0 bottom-0 h-96 bg-gradient-to-b from-transparent to-primary"></div>
        </div>

        <div className="main-container primary-py relative z-10">
          <div className="text-center text-white mb-16 pt-8">
            <h1 className="text-4xl md:text-6xl font-hedvig leading-snug mb-6">
              QMS - Lead Auditor Training
            </h1>
            <p className="md:text-xl font-inter mb-8 max-w-3xl mx-auto">
              “Based on the answers our tools recommending this course
            </p>
          </div>
        </div>

        <div className="main-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {coursesData?.data.map((course) => (
              // <CourseCard
              //   key={course.id}
              //   category={course.category}
              //   title={course.title}
              //   description={course.description}
              //   hours={course.hours}
              //   lessons={course.lessons}
              //   mode={course.mode}
              //   imageUrl={course.imageUrl}
              // />
              <CourseCard
                key={course.id}
                category={course?.category?.name || "General"}
                title={course.title}
                description={course.description}
                hours={course.snapshot?.totalDuration?.toString() || "N/A"}
                lessons={course.snapshot?.totalLectures || 0}
                mode={course.snapshot?.skillLevel || "Online"}
                imageUrl={course.thumbnailUrl}
                slug={course.slug}
              />
            ))}

            {/* <div className="relative rounded-2xl p-6 flex flex-col justify-between text-white overflow-hidden shadow-[0_15px_30px_0_rgba(255,255,255,0.1)] hover:shadow-[15px_30px_30px_10px_rgba(100,136,230,0.5)] transition-shadow duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/bg/bundle-image.png')",
                }}
              />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <Heading heading="Bundle Offer"></Heading>

                <div className="text-center">
                  <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <span className="text-4xl font-bold text-white">
                        $1,199
                      </span>
                      <span className="text-xl text-red-700 line-through">
                        $1,497
                      </span>
                      <span className="bg-yellow-300 text-black px-3 py-2 rounded font-medium flex items-center gap-2">
                        <Tag size={16} className="text-black" />
                        Save $298
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    iconclassName="bg-primary"
                    spanclassName="px-4 w-full text-center"
                    href="/courses"
                    text="Enroll Now"
                    color="white"
                    size="sm"
                    icon={<IconArrowRight className="stroke-white" />}
                  />
                </div>
              </div>
            </div> */}
            <BundleCard />
          </div>
        </div>
      </section>

      <section className="bg-[url('/images/bg/bg.png')] bg-cover bg-center bg-no-repeat backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
        <div className="main-container">
          <div className="pt-8 pb-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
              The Lead Auditor Certification Bundle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  showButton={false}
                  showCertificates={false}
                  height="h-[340px]"
                />
              ))}
            </div>

            <div className="text-center mt-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-3 text-white text-lg font-medium">
                  <span>Bundle of 3 Courses:</span>
                  <span className="text-4xl font-bold ">$1,199</span>
                  <span className="text-xl text-red-600 line-through ">
                    $1,497
                  </span>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded font-medium">
                    You Save $298
                  </span>
                </div>

                <Button
                  href="/courses"
                  text="Enroll in Bundle & Save"
                  color="primary"
                  size="md"
                  icon={<IconArrowRight size={20} className="stroke-primary" />}
                  iconclassName="text-primary"
                  spanclassName="px-4 w-full text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="relative rounded-2xl overflow-hidden text-white text-center flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-[420px] md:h-[480px]"
              style={{
                backgroundImage: "url('/images/bg/suggested-bg-2.png')",
              }}
            >
              <div className="relative z-10 mt-50 flex flex-col items-center justify-center">
                <Heading heading="20% Off" headingClassName="text-7xl" />
                <p className="text-lg font-medium ">
                  This month only. Use Code{" "}
                  <span className="font-semibold">SAVE20</span>
                </p>

                <Button
                  className="mt-8 w-48"
                  text="Apply Now"
                  color="white"
                  size="sm"
                  icon={<IconArrowRight className="stroke-white" />}
                  iconclassName="bg-primary"
                  spanclassName="px-4 w-full text-center"
                />
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden text-white text-center flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-[420px] md:h-[480px]"
              style={{
                backgroundImage: "url('/images/bg/suggested-bg-1.png')",
              }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center">
                <Image
                  src="/images/bg/question-mark.png"
                  alt="Need Help"
                  width={190}
                  height={190}
                  className="mx-auto mb-4"
                />
                <Heading heading="Need help?" headingClassName="text-7xl" />
                <p className="text-lg">Reach us for any kind of assistance</p>

                <Button
                  className="mt-8 w-48"
                  text="Apply Now"
                  color="transparent"
                  size="sm"
                  icon={<IconArrowRight className="stroke-primary" />}
                  iconclassName="bg-white"
                  spanclassName="px-4 w-full text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <PromoSection />
    </main>
  );
}
