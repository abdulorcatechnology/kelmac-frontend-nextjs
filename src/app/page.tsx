"use client";

import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import Button from "@/components/ui/button/Button";
import { Search } from "lucide-react";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import Counter from "@/components/ui/common/Counter";
import { CourseCard } from "@/components/ui/course/CourseCard";
import { BlogCard } from "@/components/ui/blog/BlogCard";
import { Heading } from "@/components/ui/common/Heading";
import { Timeline } from "@/components/ui/common/Timeline";
import { useState, useRef, useEffect } from "react";
import CorporateAuditingModal from "@/components/CorporateModal/CorporateModal";
import { Marquee } from "@/components/ui/common/Marquee";
import QuestionsModal from "@/components/ui/questions/QuestionsModal";
import type { FormData } from "@/data/questionTypes";
import CoursesSection from "@/components/ui/course/CoursesSection";
import {
  coursesItems,
  timelineItems,
  blogItems,
  locationItems,
} from "@/data/home";
import { Hotspot } from "@/components/ui/common/Hotspot";
import { Tags } from "@/components/ui/common/Tag";
import HeroSlider from "@/app/hero-slider";
import { useGetAllCoursesQuery } from "@/store";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);

  const handleQuestionSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="main">
      <HeroSlider />

      <section className="primary-py">
        <div className=" primary-py bg-light">
          <div className="main-container flex flex-col md:flex-row gap-40 justify-center">
            <Counter
              number={30}
              icon={<IconPlus className="w-10 h-10" />}
              label="Years Experience"
            />
            <Counter
              number={45}
              icon={<IconPlus className="w-10 h-10" />}
              label="Countries served"
            />
            <Counter
              number={40000}
              icon={<IconPlus className="w-10 h-10" />}
              label="Professionals Trained"
            />
            <Counter
              number={900}
              icon={<IconPlus className="w-10 h-10" />}
              label="Audits & Projects Delivered"
            />
          </div>
        </div>
      </section>

      <CoursesSection
        title="Delivering sustainable, societal impact & process based solutions"
        subtitle="Courses"
        showSearchBar={true}
        showCategoryFilters={true}
        showViewAllButton={true}
        maxCoursesToShow={3}
        onCourseClick={(course) => {
          // Navigate to course page
          window.location.href = `/course/${course.slug}`;
        }}
        useApiCategories={true}
      />

      <section className="bg-secondary bg-[url('/images/bg/Learner.png')] bg-no-repeat bg-cover bg-center rounded-3xl overflow-hidden">
        <div className="main-container primary-py ">
          <div className="md:w-[60%] text-white space-y-8">
            <h6 className="sub-heading before:bg-white text-white">More</h6>
            <h2 className="main-heading">
              You can chose the curriculum & training that fits your needs
            </h2>
            <p className="mb-12">
              Answer a few quick questions, and we'll match you with tailored
              training <br className="hidden md:block" /> recommendations
              designed for your career stage and industry."
            </p>

            <Button
              spanclassName="px-4"
              className="gap-0"
              text="Get Started – Find Your Training"
              icon={<IconArrowRight className="stroke-primary" />}
              color="primary"
              onClick={() => setIsQuestionsModalOpen(true)}
            />
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="main-container primary-py">
          <Heading
            subHeading="Services"
            heading="Solutions we offer"
            headingClassName="text-primary"
          />
          <Timeline items={timelineItems} />
        </div>
      </section>

      <section>
        <div className="main-container primary-py">
          <Heading
            subHeading="Services"
            heading="Our Clients"
            className="text-primary"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group cursor-pointer min-h-112 md:min-h-188 justify-stretch bg-[url('/images/corporate.png')] bg-cover bg-center rounded-4xl overflow-hidden">
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/70 transition-all duration-500"></div>

              {/* Default state - just title */}
              <h2 className="absolute bottom-0 left-0 transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-4 px-5 md:px-10 py-16 text-white font-hedvig text-4xl md:text-5xl lg:text-[64px] w-full z-10">
                Corporate
              </h2>

              <div className="absolute inset-0 flex flex-col justify-end transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 px-5 md:px-10 py-8 text-white z-10">
                <h1 className="font-hedvig text-4xl md:text-5xl lg:text-[64px] mb-6">
                  Corporate
                </h1>
                <p className="mb-4 text-white/90">
                  From compliance to capability, we support your organization
                  through comprehensive auditing, strategic consulting
                </p>
                <Tags
                  className="mb-10"
                  items={["Auditing", "Consulting", "Learning"]}
                />
                <Button
                  className="w-full"
                  iconclassName="bg-transparent"
                  spanclassName="px-4 w-full text-center"
                  text="Learn More"
                  color="transparent"
                  size="sm"
                  onClick={openModal}
                  icon={<IconArrowRight />}
                />
              </div>
            </div>

            <div className="relative group cursor-pointer min-h-112 md:min-h-188 justify-stretch bg-[url('/images/professionals.png')] bg-cover bg-center rounded-4xl overflow-hidden">
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/70 transition-all duration-500"></div>

              <h2 className="absolute bottom-0 left-0 transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-4 px-5 md:px-10 py-16 text-white font-hedvig text-4xl md:text-5xl lg:text-[64px] w-full z-10">
                Professionals
              </h2>

              <div className="absolute inset-0 flex flex-col justify-end transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 px-5 md:px-10 py-8 text-white z-10">
                <h1 className="font-hedvig text-4xl md:text-5xl lg:text-[64px] mb-6">
                  Professionals
                </h1>
                <p className="mb-4 text-white/90">
                  From compliance to capability, we support your organization
                  through comprehensive auditing, strategic consulting
                </p>
                <Tags
                  className="mb-10"
                  items={["Auditing", "Consulting", "Learning"]}
                />
                <Button
                  className="w-full"
                  iconclassName="bg-transparent"
                  spanclassName="px-4 w-full text-center"
                  text="Learn More"
                  color="transparent"
                  size="sm"
                  onClick={openModal}
                  icon={<IconArrowRight />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="primary-pb">
        <Marquee
          images={[
            "/images/client/nestle.png",
            "/images/client/ifc.png",
            "/images/client/diageo.png",
            "/images/client/dell.png",
            "/images/client/nsai.png",
          ]}
          gap={80}
          speed={25}
        />
      </section>

      <section className="bg-gradient-to-b from-[#F8F8FA] via-[#F8F8FA] via-[67%] to-[#FFFFFF]">
        <div className="main-container primary-py">
          <Heading
            subHeading="Geographic regions we operate in"
            heading="Thinking Globally, Acting Locally"
            className="text-primary"
          />
          <div className="w-full">
            <Hotspot
              src="/images/world-map.png"
              alt="Demo"
              items={locationItems}
              hotspotSize={18}
              hotspotColorClass="bg-secondary"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="primary-py main-container">
          <Heading
            subHeading="Blog"
            heading="Featured Blogs"
            className="text-primary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogItems.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                imageUrl={blog.imageUrl}
                category={blog.category}
                date={blog.date}
                title={blog.title}
                excerpt={blog.excerpt}
                href={blog.href}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12 md:mt-16">
            <Button
              className="border-primary gap-2"
              spanclassName="px-8"
              href="/resources/latest-blogs"
              text="View all Blogs"
              color="white"
              iconclassName="bg-primary text-white"
              icon={<IconArrowRight />}
            />
          </div>
        </div>
      </section>
      <NewsletterSection />

      <QuestionsModal
        isOpen={isQuestionsModalOpen}
        onClose={() => setIsQuestionsModalOpen(false)}
        onSubmit={handleQuestionSubmit}
      />
      {isModalOpen && <CorporateAuditingModal onClose={closeModal} />}
    </main>
  );
}
