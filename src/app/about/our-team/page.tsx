"use client";

import { Heading } from "@/components/ui/common/Heading";
import { teamMembers } from "@/data/our-team";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type TeamMember = {
    id: string;
    imageUrl: string;
    name: string;
    role: string;
};

export default function TeamSection() {
    const firstSliderMembers = teamMembers.slice(0, 6);
    const secondSliderMembers = teamMembers.slice(6);

    return (
        <main className="main">
            <section className="bg-primary md:bg-[url('/images/bg/our-team.png')] bg-cover lg:bg-top md:bg-[70%_top] bg-no-repeat lg:min-h-150 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container primary-py">
                    <div className="text-white md:w-[85%] lg:w-[68%]">
                        <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
                            Team members
                        </h1>
                        <h6 className="text-3xl mt-2">Founder &CEO</h6>
                        <p className="md:text-xl font-inter text-capitalize mt-8">
                            What began as a small training initiative has grown into a trusted name in professional development and certification.
                            Founded by industry experts who believed in practical, high-impact learning, we started with one goal: make quality training accessible and globally recognized.

                            Over the years, we've trained thousands of professionals, partnered with global organizations, and earned international accreditation — but our core purpose remains unchanged: empowering people through knowledge that works.
                        </p>
                    </div>
                </div>
            </section>
            
            <div className="flex justify-center text-center w-full mt-16">
                <Heading
                    subHeading="Message"
                    heading="Message from founder"
                    subHeadingClassName="text-primary text-center"
                    headingClassName="text-primary text-center"
                />
            </div>

            <section className="bg-primary md:bg-[url('/images/bg/message-from-founder.png')] bg-cover lg:bg-top md:bg-[70%_top] bg-no-repeat lg:min-h-150 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
                <div className="main-container flex justify-center">
                    <div className="text-white md:w-[85%] lg:w-[75%] text-center mx-auto">
                        <p className="md:text-4xl mt-10 mb-2 font-inter-tight italic leading-relaxed tracking-normal">
                            When I founded Kelmac Group® in 1994, I had a simple conviction: international
                            standards should do more than secure a certificate—they should unlock better
                            businesses and better outcomes for people. If we teach them well, apply them wisely,
                            and audit them with integrity, standards become a catalyst for excellence, not a hurdle
                            to clear.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <Heading
                        subHeading="Leadership"
                        heading="Meet Our Leadership Team"
                        headingClassName="text-primary"
                    />
                    
                    <div className="mt-12">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {firstSliderMembers.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm">
                                        <div className="aspect-[3/4] relative">
                                            <img 
                                                src={member.imageUrl} 
                                                alt={member.name} 
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-3xl mb-1">{member.name}</h3>
                                            <p className="text-xl text-white/70">{member.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className=" bg-light">
                <div className="container mx-auto px-4">
                    <div className="mt-0">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {secondSliderMembers.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm">
                                        <div className="aspect-[3/4] relative">
                                            <img 
                                                src={member.imageUrl} 
                                                alt={member.name} 
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-3xl mb-1">{member.name}</h3>
                                            <p className="text-xl text-white/70">{member.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </main>
    );
}