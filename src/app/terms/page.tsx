"use client";

import { useState } from "react";
import { termsNavItems, termsSections, termsHeroData } from "@/data/terms";

export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState("bookings");

    const currentSection = termsSections.find(
        (section) => section.id === activeSection
    );

    return (
        <main className="main">
            <section
                className="bg-primary bg-center bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl"
                style={{ backgroundImage: `url('${termsHeroData.backgroundImage}')` }}
            >
                <div className="main-container primary-py">
                    <div className="text-white md:w-[85%] lg:w-[62%]">
                        <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
                            {termsHeroData.title}
                        </h1>
                        <p className="md:text-3xl font-inter mt-8 text-[#DCFCE7]">
                            {termsHeroData.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="main-container primary-py">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <aside className="lg:w-1/3">
                            <div className="lg:sticky lg:top-24 bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
                                <nav className="space-y-3">
                                    {termsNavItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={`w-full text-left text-sm md:text-base rounded-lg px-3 py-2 transition-all ${activeSection === item.id
                                                    ? "bg-primary text-white font-medium flex items-center gap-2"
                                                    : "text-gray-800 hover:text-primary"
                                                }`}
                                        >
                                            {activeSection === item.id && (
                                                <span className="text-white">→</span>
                                            )}
                                            {item.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>



                        <div className="lg:w-2/3">
                            <div className=" rounded-3xl p-6 md:p-12">
                                {currentSection && (
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-hedvig text-primary mb-8">
                                            {currentSection.title}
                                        </h2>

                                        <div className="space-y-6">
                                            {Array.isArray(currentSection.content) ? (
                                                currentSection.content.map((paragraph, idx) => (
                                                    <p
                                                        key={idx}
                                                        className="text-body leading-relaxed md:text-lg"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))
                                            ) : (
                                                <p className="text-body leading-relaxed md:text-lg">
                                                    {currentSection.content}
                                                </p>
                                            )}

                                            {currentSection.subsections && (
                                                <div className="mt-8 space-y-6">
                                                    {currentSection.subsections.map((subsection, idx) => (
                                                        <div key={idx} className="space-y-3">
                                                            <h4 className="text-xl font-semibold text-primary">
                                                                {subsection.title}
                                                            </h4>
                                                            {Array.isArray(subsection.content) ? (
                                                                subsection.content.map((para, pIdx) => (
                                                                    <p
                                                                        key={pIdx}
                                                                        className="text-body leading-relaxed"
                                                                    >
                                                                        {para}
                                                                    </p>
                                                                ))
                                                            ) : (
                                                                <p className="text-body leading-relaxed">
                                                                    {subsection.content}
                                                                </p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
