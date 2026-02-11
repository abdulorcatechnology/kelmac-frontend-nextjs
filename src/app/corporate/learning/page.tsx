"use client";

import { Heading } from "@/components/ui/common/Heading";
import { Timeline } from "@/components/ui/common/Timeline";
import { learningTimelineItems, courses } from "@/data/learning";
import { PersonsIcon, IconCertificate, IconPolygon, Lifebuoy, Bookmark } from "@/components/icons/icons";
import { IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";
import { CourseCard } from "@/components/ui/course/CourseCard";
import WhyChooseUs from './why-choose-us';
import { ServiceCardSlider } from '@/components/ui/deliveryMethod/deliveryCard';
import {
    serviceCardContent,
    corporateServices
} from '@/data/learning';
import Image from 'next/image';
import Learning from "./cirriculum";
import { learningCapabilities } from "@/data/learning";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";




export default function Corporate() {
    return (
        <main className="main">
            <section className="relative bg-primary bg-[url('/images/bg/corporate_hero.png')] bg-right bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container primary-py relative z-10">
                    <div className="text-white md:w-[85%] lg:w-[60%]">
                        <h1 className="text-4xl md:text-6xl font-hedvig leading-snug mb-8">
                            Learning
                        </h1>
                        <p className="md:text-xl font-inter leading-relaxed mb-8">
                            We deliver high-impact training designed to help professionals and organizations grow. Whether you're preparing for ISO certification, improving internal systems, or advancing your career, our programs combine practical insights, expert instruction, and global standards.
                        </p>

                        <Button
                            spanclassName="px-4"
                            className="gap-0"
                            text="View Upcoming Courses"
                            icon={<IconArrowRight className="stroke-primary" />}
                            color="white"
                        />
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            <section className="w-full primary-py">
                <div className="main-container">
                    <Heading
                        heading={serviceCardContent.heading}
                        headingClassName="text-primary"
                        subHeading={serviceCardContent.subHeading}
                    />
                </div>

                <ServiceCardSlider
                    services={corporateServices}
                    {...serviceCardContent.sliderConfig}
                    className="mb-0"
                    buttonText={serviceCardContent.buttonText}
                    onServiceClick={(service) => console.log('Service clicked:', service)}
                />
            </section>

            <section className="rounded-3xl bg-secondary overflow-hidden mb-10">
                <div className="main-container primary-py">
                    <div className="text-center">
                        <Heading subHeading="Know More" heading="Learning Levels" className="text-white mx-auto max-w-5xl" subHeadingClassName="text-white" dotColor="white" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div className="p-6 sm:p-8 rounded-[20px] bg-[url('/images/bg/learning-level-bg-1.png')] bg-cover bg-no-repeat h-64 sm:h-72 md:h-72 lg:h-80 xl:h-72">
                            <div className="mb-4">
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 flex items-center justify-center">
                                    <Image
                                        src="/images/bg/learning-icon-1.svg"
                                        alt="Foundation"
                                        width={60}
                                        height={60}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h3 className="text-primary text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4">Foundation</h3>
                            <p className="text-primary/80 text-base sm:text-lg md:text-lg">
                                Focus on beginner and standards/regulation
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 rounded-[20px] bg-[url('/images/bg/learning-level-bg-2.png')] bg-cover bg-no-repeat h-64 sm:h-72 md:h-72 lg:h-80 xl:h-72">
                            <div className="mb-4">
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 flex items-center justify-center">
                                    <Image
                                        src="/images/bg/learning-icon-2.svg"
                                        alt="Internal Auditor"
                                        width={60}
                                        height={60}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h3 className="text-primary text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4">Internal Auditor</h3>
                            <p className="text-primary/80 text-base sm:text-lg md:text-lg">
                                Focus On Internal Audits Within Own Organization
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-6 sm:p-8 rounded-[20px] bg-white h-64 sm:h-72 md:h-72 lg:h-80 xl:h-72">
                            <div className="mb-4">
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 flex items-center justify-center">
                                    <Image
                                        src="/images/bg/learning-icon-3.svg"
                                        alt="Transition"
                                        width={60}
                                        height={60}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h3 className="text-primary text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4">Transition</h3>
                            <p className="text-primary/80 text-base sm:text-lg md:text-lg">
                                Focus On Understanding Of Changes In Standards, Regulations Etc
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 rounded-[20px] bg-white h-64 sm:h-72 md:h-72 lg:h-80 xl:h-72">
                            <div className="mb-4">
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 flex items-center justify-center">
                                    <Image
                                        src="/images/bg/learning-icon-4.svg"
                                        alt="Lead Auditor"
                                        width={60}
                                        height={60}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h3 className="text-primary text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4">Lead Auditor</h3>
                            <p className="text-primary/80 text-base sm:text-lg md:text-lg">
                                Focus On External And Supplier/Vendor And 3rd Management System Audits
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 rounded-[20px] bg-white h-64 sm:h-72 md:h-72 lg:h-80 xl:h-72">
                            <div className="mb-4">
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 flex items-center justify-center">
                                    <Image
                                        src="/images/bg/learning-icon-5.svg"
                                        alt="Expert/Master"
                                        width={60}
                                        height={60}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h3 className="text-primary text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4">Expert/Master</h3>
                            <p className="text-primary/80 text-base sm:text-lg md:text-lg">
                                Focus On Specialized Learning Courses And Development Of Auditor/Lead Auditor
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Learning />

            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Heading
                            heading="Imagine learning that enhances a learner's career and delivers transformational learning organization's capabilities"
                            subHeading="Learning Process"
                            headingClassName="text-primary"
                        />
                    </div>

                    <div className="mb-16">
                        <Image
                            src="/images/bg/learning-bg.png"
                            alt="Interactive classroom learning environment"
                            width={1200}
                            height={400}
                            className="w-full h-96 object-cover"
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {learningCapabilities.map((capability) => (
                            <div
                                key={capability.id}
                                className="p-8 rounded-xl hover:bg-secondary/10 cursor-pointer transition-colors duration-200 flex flex-col h-full"
                            >
                                <div className="flex-grow">
                                    <h3 className="leading-tight">
                                        <Heading
                                            heading={capability.title}
                                            headingClassName="text-2xl text-left text-primary"
                                        />
                                    </h3>
                                    <p className="text-primary/80 leading-relaxed line-clamp-3">
                                        {capability.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="main-container primary-py">
                <Heading
                    heading="Learning Methodology"
                    subHeading='Methodology'
                    headingClassName='text-secondary'
                    subHeadingClassName='text-primary'
                />

                <div className="mt-8 w-full">
                    <Image
                        src="/images/bg/corporate-image.svg"
                        alt="Learning Methodology"
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-3xl object-cover"
                    />
                </div>
            </section>

            <NewsletterSection />

        </main>
    );
}