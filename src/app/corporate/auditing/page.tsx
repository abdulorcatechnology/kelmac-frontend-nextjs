"use client";

import Button from "@/components/ui/button/Button";
import { IconArrowRight } from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/pagination";
import WhyChooseUs from './whyChooseUs';
import { AuditServicesGrid } from './auditServices';
import { Heading } from "@/components/ui/common/Heading";
import ApproachSlider from "@/components/ui/approach/approachSlider";
import Image from 'next/image';
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import { auditingApproach } from "@/data/corporate";



export default function Auditing() {
    return (
        <main className="main">
            <section className="bg-primary bg-[url('/images/auditing.png')] bg-right md:bg-center bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container primary-py">
                    <div className="text-white w-full md:w-[85%] lg:w-[50%]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-hedvig leading-tight md:leading-snug mb-6 md:mb-8">
                            Auditing
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl font-inter leading-relaxed mb-6 md:mb-8">
                            We provide trusted auditing and training services that ensure your organization
                            meets compliance requirements with confidence. Our expert team focuses on
                            delivering actionable insights that drive continuous improvement and sustainable
                            success. Partner with us to strengthen your management systems and build lasting
                            quality assurance.
                        </p>

                        <Button
                            spanclassName="px-4"
                            className="gap-0"
                            text="View Upcoming Courses"
                            href="/course/all-courses"
                            icon={<IconArrowRight className="stroke-primary" />}
                            color="white"
                        />
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <Heading
                        heading="Audit Services"
                        subHeading="Services"
                        headingClassName="text-primary"
                    />
                    <AuditServicesGrid />
                </div>
            </section>

            <section className="bg-secondary rounded-3xl overflow-hidden">
                <div className="primary-py main-container">
                    <Heading
                        subHeading="Approach"
                        heading="Our Auditing Approach"
                        headingClassName="text-white"
                        subHeadingClassName="text-white"
                        dotColor="white"
                    />
                    <ApproachSlider data={auditingApproach} />
                </div>
            </section>

            <section className="main-container primary-py bg-[#DBEAFE]">
                <Heading
                    heading="Kelmac group Audit process"
                    subHeading='How we deliver'
                    headingClassName='text-primary'
                />
                <p className="max-w-4xl mx-auto text-center font-semibold">
                    One of the objectives of Audit & Advisory Services (A&AS) is to maintain a constructive and transparent relationship with our clients during their audits. A&AS strives to have your continued involvement at every stage so you understand what we do and why as well as how we work to minimize disruptions of your daily activities.
                </p>


                <div className="mt-8 w-full">
                    <Image
                        src="/images/bg/auditing-process-bg.svg"
                        alt="Learning Methodology"
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-3xl object-cover"
                    />
                </div>
            </section>

            <section>
                <div className="main-container primary-py">
                    {/* <Heading
                        subHeading="Approach"
                        heading="Enquire Now"
                        className="text-primary"
                    /> */}
                    <div>
                        <div className="relative group cursor-pointer min-h-[400px] md:min-h-[500px] justify-stretch bg-[url('/images/bg/enquire-now.png')] bg-cover bg-center bg-no-repeat rounded-4xl overflow-hidden">
                            <h2 className="absolute bottom-0 left-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none px-5 md:px-10 py-16 text-white font-hedvig text-4xl md:text-5xl lg:text-[64px] w-full bg-gradient-to-b from-transparent via-transparent/0 via-[0%] to-primary">
                                Organisation
                            </h2>
                            <div className="absolute bottom-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto px-5 md:px-10 py-8 text-white w-full">
                                <h1 className="font-hedvig text-4xl md:text-5xl lg:text-[64px] mb-6">
                                    Organisation
                                </h1>
                                <p className="mb-4">
                                    From compliance to capability, we support your organization through comprehensive auditing, strategic consulting
                                </p>
                                <Button
                                    className="w-95 bg-white text-primary"
                                    iconclassName="bg-primary"
                                    spanclassName="px-4 w-full text-center"
                                    text="Learn More"
                                    color="transparent"
                                    size="sm"
                                    icon={<IconArrowRight className="stroke-white" />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsletterSection />

        </main>
    );
}