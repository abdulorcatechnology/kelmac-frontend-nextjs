"use client";

import { useState, useEffect, useRef } from "react";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import { Heading } from "@/components/ui/common/Heading";
import { cookieData } from "@/data/cookie";
import { IconHandPointing } from "@/components/icons/icons";

export default function PrivacyPolicy() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-120px 0px -60% 0px",
                threshold: 0,
            }
        );

        cookieData.sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element && observerRef.current) {
                observerRef.current.observe(element);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <main className="main">
            <section className="bg-primary bg-[url('/images/bg/privacy.png')] bg-center bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container primary-py">
                    <div className="text-white md:w-[85%] lg:w-[62%]">
                        <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
                            {cookieData.hero.title}
                        </h1>
                        <p className="md:text-2xl font-inter mt-8 text-[#DCFCE7]">
                            Last Updated {cookieData.lastUpdated}
                        </p>
                        <p className="md:text-xl font-inter mt-8 text-white/80">
                            {cookieData.hero.description}
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="main-container primary-py">
                    <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12">
                        <div className="lg:sticky lg:top-8 lg:self-start">
                            <div className="bg-light p-8 rounded-2xl shadow-md border border-gray-200">
                                <Heading
                                    subHeading=""
                                    heading="Table of Content"
                                    headingClassName="text-primary text-left text-2xl mb-6 font-inter-tight"
                                />
                                <div className="space-y-4">
                                    {cookieData.tableOfContents.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={(e) => handleSmoothScroll(e, item.id)}
                                            className={`flex items-center gap-2 text-sm leading-relaxed transition-colors cursor-pointer ${
                                                activeId === item.id
                                                    ? "text-secondary font-medium"
                                                    : "text-primary hover:text-secondary"
                                            }`}
                                        >
                                            {activeId === item.id && (
                                                <IconHandPointing
                                                    width={20}
                                                    height={20}
                                                    fill="#6488E6"
                                                    className="flex-shrink-0"
                                                />
                                            )}
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-6">
                                {cookieData.introduction.map((paragraph, index) => (
                                    <p key={index} className="text-body leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {cookieData.sections.map((section) => (
                                <div key={section.id} id={section.id} className="space-y-6 scroll-mt-28">
                                    <h2 className="text-3xl md:text-4xl font-inter-tight text-primary font-semibold">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4 text-body leading-relaxed">
                                        {section.content.map((paragraph, index) => {
                                            if (section.id === "contact" && index === 1) {
                                                const lines = paragraph.split("\n");
                                                return (
                                                    <div
                                                        key={index}
                                                        className="bg-light p-6 rounded-2xl space-y-3"
                                                    >
                                                        <p className="font-medium text-primary">
                                                            {lines[0]}
                                                        </p>
                                                        <p>
                                                            {lines
                                                                .slice(1, 4)
                                                                .map((line, i) => (
                                                                    <span key={i}>
                                                                        {line}
                                                                        <br />
                                                                    </span>
                                                                ))}
                                                        </p>
                                                        <p>
                                                            Email:{" "}
                                                            <a
                                                                href="mailto:info@kelmacgroup.com"
                                                                className="text-secondary hover:text-primary underline"
                                                            >
                                                                info@kelmacgroup.com
                                                            </a>
                                                        </p>
                                                        <p>
                                                            Phone:{" "}
                                                            <a
                                                                href="tel:+353614912244"
                                                                className="text-secondary hover:text-primary"
                                                            >
                                                                +353 61 491 224
                                                            </a>
                                                        </p>
                                                    </div>
                                                );
                                            }

                                            if (section.id === "rights" && index === 1) {
                                                return (
                                                    <ul key={index} className="list-disc pl-6 space-y-2">
                                                        {paragraph.split("\n").map((item, i) => {
                                                            const cleanItem = item.replace(/^•\s*/, "").trim();
                                                            return cleanItem ? (
                                                                <li key={i}>{cleanItem}</li>
                                                            ) : null;
                                                        })}
                                                    </ul>
                                                );
                                            }

                                            if (paragraph.includes("info@kelmacgroup.com")) {
                                                const parts = paragraph.split("info@kelmacgroup.com");
                                                return (
                                                    <p key={index}>
                                                        {parts[0]}
                                                        <a
                                                            href="mailto:info@kelmacgroup.com"
                                                            className="text-secondary hover:text-primary underline"
                                                        >
                                                            info@kelmacgroup.com
                                                        </a>
                                                        {parts[1]}
                                                    </p>
                                                );
                                            }

                                            return <p key={index}>{paragraph}</p>;
                                        })}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-500">
                                    Last Updated: {cookieData.finalUpdatedDate}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewsletterSection />
        </main>
    );
}
