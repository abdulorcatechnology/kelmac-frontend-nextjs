"use client";

import Image from "next/image";
import { Heading } from "@/components/ui/common/Heading";
import WhyReadWhitepaper from "@/app/resources/white-papers/why-read-whitepaper";
import { whitepapers, whitepaperCategories, getFeaturedWhitepapers } from "@/data/whitepaperData";
import { WhitepaperList, WhitepaperCardProps } from "@/components/ui/whitepaper/WhitepaperCard";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";


export default function Whitepapers() {
    return (
        <main>
            <section className="bg-primary bg-[url('/images/bg/whitepaper.png')] bg-center bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container primary-py">
                    <div className="text-white md:w-[85%] lg:w-[62%]">
                        <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
                            Whitepapers
                        </h1>
                        <p className="md:text-xl font-inter text-capitalize mt-8">
                            Our whitepapers are designed for decision-makers, innovators, and
                            professionals who want more than just surface-level knowledge.
                            Each document blends in-depth research, expert analysis, and
                            real-world examples to help you tackle challenges and seize
                            opportunities in your industry.
                        </p>
                    </div>
                </div>
            </section>

            <WhyReadWhitepaper />

            <section className="bg-primary mb-10">
                <div className="main-container primary-py">
                    <Heading
                        subHeading="Resources"
                        heading="Our Whitepapers"
                        headingClassName="text-white"
                    />

                    <div className="mt-10">
                        <WhitepaperList whitepapers={whitepapers as WhitepaperCardProps[]} />        </div>
                </div>
            </section>
            <NewsletterSection />

        </main>
    );
}
