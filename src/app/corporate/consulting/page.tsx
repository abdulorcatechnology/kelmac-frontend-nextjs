"use client";
import { Heading } from "@/components/ui/common/Heading";
import { IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";
import "swiper/css";
import "swiper/css/pagination";
import ChooseUs from './why-choose-us';
import {
    consultingServices,
    serviceCardContent,
    consultingApproach
} from '@/data/consulting';
import { ServiceCardSlider } from '@/components/ui/deliveryMethod/deliveryCard';
import ApproachSlider from "@/components/ui/approach/approachSlider";
import Image from 'next/image'
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";

export default function Corporate() {
    return (
        <main className="main">
            <section className="relative bg-primary bg-[url('/images/bg/corporate_hero.png')] bg-right bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container primary-py relative z-10">
                    <div className="text-white md:w-[85%] lg:w-[60%]">
                        <h1 className="text-4xl md:text-6xl font-hedvig leading-snug mb-8">
                            Consulting
                        </h1>
                        <p className="md:text-xl font-inter leading-relaxed mb-8">
                            We help organizations design, implement, and improve management systems aligned with international standards. Whether you're seeking ISO certification, optimizing operations, or addressing compliance gaps, our consultants bring deep experience, practical strategies, and a results-driven mindset.
                        </p>

                        <Button
                            spanclassName="px-4"
                            className="gap-0"
                            text="Enquire now"
                            icon={<IconArrowRight className="stroke-primary" />}
                            color="white"
                        />
                    </div>
                </div>
            </section>

            <ChooseUs />

            <section className="w-full primary-py">
                <div className="main-container">
                    <Heading
                        heading={serviceCardContent.heading}
                        headingClassName="text-primary"
                        subHeading={serviceCardContent.subHeading}
                    />
                </div>

                <ServiceCardSlider
                    services={consultingServices}
                    {...serviceCardContent.sliderConfig}
                    className="mb-0"
                    buttonText={serviceCardContent.buttonText}
                    onServiceClick={(service) => console.log('Service clicked:', service)}
                />
            </section>

            <section className="bg-secondary rounded-3xl overflow-hidden">
                <div className="primary-py main-container">
                    <Heading
                        subHeading="Approach"
                        heading="Consulting Process"
                        headingClassName="text-white"
                        subHeadingClassName="text-white"
                        dotColor="white"
                    />
                    <ApproachSlider data={consultingApproach} />
                </div>

                <div className="relative w-full h-150 md:h-[800px] rounded-3xl overflow-hidden">
                    <Image
                        src="/images/bg/roi-graph.svg"
                        alt="Business consulting team collaboration"
                        fill
                        className="object-contain object-center"
                        priority={false}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-secondary to-transparent"></div>
                </div>
            </section>

            <section>
                <div className="main-container primary-py">
                    {/* <Heading
                        subHeading="Approach"
                        heading="Enquire Now "
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