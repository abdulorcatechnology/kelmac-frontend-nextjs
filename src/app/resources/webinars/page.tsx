"use client";

import { Heading } from "@/components/ui/common/Heading";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import { useState } from "react";
import WebinarCard from "@/components/ui/webinar/webinarCard";
import {
  webinars,
  getUniqueInstructors,
  getUniqueCategories,
} from "@/data/webinar";
import { IconCalendarFilled, IconArrowRight } from "@/components/icons/icons";
import Button from "@/components/ui/button/Button";
import { IconChevronDown } from "@tabler/icons-react";

function CustomDropdown({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-64">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white text-gray-800 px-5 py-3 rounded-2xl border border-gray-300 shadow-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer hover:shadow-md transition-all"
      >
        {value || placeholder}
        <IconChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-2xl shadow-lg max-h-60 overflow-y-auto z-50">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`px-5 py-3 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-200 ${
                opt === value ? "bg-primary text-white" : ""
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function WebinarsPage() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedInstructor, setSelectedInstructor] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const [visibleCount, setVisibleCount] = useState<number>(4);
  const instructors: string[] = getUniqueInstructors(webinars) || [];
  const categories: string[] = getUniqueCategories(webinars) || [];

  const filteredWebinars = webinars.filter((webinar) => {
    if (selectedDate && webinar.date !== selectedDate) return false;
    if (selectedInstructor && webinar.instructor.name !== selectedInstructor)
      return false;
    if (selectedSubject && webinar.category !== selectedSubject) return false;
    return true;
  });

  const visibleWebinars = filteredWebinars.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const TrendingWebinar = ({ className = "" }) => {
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 w-fit ${className}`}
      >
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        <span>12 Jan, 2025</span>
      </div>
    );
  };

  return (
    <main>
      <section className="bg-primary bg-[url('/images/bg/whitepaper.png')] bg-center bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
        <div className="main-container primary-py">
          <div className="text-white md:w-[85%] lg:w-[62%]">
            <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
              Webinars
            </h1>
            <p className="md:text-xl font-inter text-capitalize mt-8">
              Join Kelmac Group Academy for an insightful and comprehensive
              webinar on ISO training! With our years of expertise and
              commitment to excellence, we are dedicated to equipping
              professionals like you with the knowledge and skills needed to
              excel in the ever-evolving world of ISO standards. Our webinar is
              designed to provide a deep understanding of various ISO standards
              and their practical implementation. Whether you're new to ISO or
              seeking to enhance your existing knowledge, our webinar will cater
              to your needs. Our experienced trainers will guide you through the
              intricacies of ISO requirements, helping you gain a competitive
              edge in your industry.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-2">
          <Heading
            heading="Upcoming Webinars"
            subHeading="Webinars"
            headingClassName="text-primary"
          ></Heading>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3.5 rounded-full hover:bg-secondary transition-colors font-medium">
              <span>Select Date</span>
              <IconCalendarFilled className="w-8 h-8 text-white" />
            </button>

            <CustomDropdown
              options={instructors}
              value={selectedInstructor}
              onChange={setSelectedInstructor}
              placeholder="Select Consultant"
            />

            <CustomDropdown
              options={categories}
              value={selectedSubject}
              onChange={setSelectedSubject}
              placeholder="Select Subject"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleWebinars.map((webinar) => (
              <WebinarCard key={webinar.id} {...webinar} />
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No webinars found matching your filters.
              </p>
            </div>
          )}

          {visibleCount < filteredWebinars.length && (
            <div className="flex justify-center items-center mt-12">
              <Button
                onClick={handleViewMore}
                spanclassName="px-4"
                className="gap-0 mt-4 border-black"
                text="View More"
                icon={
                  <div className="bg-[#182E4B] rounded-full p-3">
                    <IconArrowRight className="stroke-white" />
                  </div>
                }
                color="white"
                size="lg"
              />
            </div>
          )}
        </div>

        <section className="primary-py">
          <div className="main-container flex justify-center">
            <div className="w-full h-[550px] text-white rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/bg/webinar-3.png')] flex flex-col justify-end p-8">
              <TrendingWebinar className="mb-4 ml-20" />
              <p className="md:text-4xl mb-8 mr-20 ml-20">
                Mastering ISO 45001:2018 Compliance - Effectively Managing
                Occupational Health and Safety Indicators with the Kelmac Group
              </p>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </section>
    </main>
  );
}
