'use client';

import Image from 'next/image';
import { Heading } from "@/components/ui/common/Heading";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";
import Counter from "@/components/ui/common/Counter";
import { ServiceCardSlider } from '@/components/ui/deliveryMethod/deliveryCard';
import {
  corporateServices,
  serviceCardContent
} from '@/data/corporate';
import ApproachSlider from "@/components/ui/approach/approachSlider";
import { useState } from "react";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import { auditingApproach, consultingApproach } from "@/data/corporate";


export default function Corporate() {
  const localCorporateServices = [
    {
      id: 1,
      title: "Consulting",
      description: "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
      imageUrl: "/images/bg/corporate-card-bg.png",
      href: "/corporate/consulting/",
    },
    {
      id: 2,
      title: "Auditing",
      description: "Comprehensive approach to effective internal auditing",
      imageUrl: "/images/bg/corporate-card-bg-2.png",
      href: "/corporate/auditing/",
    },
    {
      id: 3,
      title: "Learning",
      description: "Building robust compliance management systems",
      imageUrl: "/images/bg/corporate-card-bg-3.png",
      href: "/corporate/learning/",
    },
  ];

  const [activeTab, setActiveTab] = useState<"auditing" | "consulting">("auditing");

  return (
    <main className="main">
      <section className="relative bg-primary bg-[url('/images/bg/corporate_hero.png')] bg-right bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
        <div className="main-container primary-py relative z-10">
          <div className="text-white md:w-[85%] lg:w-[60%]">
            <h1 className="text-4xl md:text-6xl font-hedvig leading-snug mb-8">
              Elevate Your Skills with<br /> Globally Recognized Training
            </h1>
            <p className="md:text-xl font-inter leading-relaxed mb-8">
              We provide trusted auditing and training services that ensure your organization
              meets compliance requirements with confidence. Our expert team focuses on
              delivering actionable insights that drive continuous improvement and sustainable
              success. Partner with us to strengthen your management systems and build lasting
              quality assurance.
            </p>

            <Button
              spanclassName="px-4"
              className="gap-0"
              text="Enquire now"
              href="#"
              icon={<IconArrowRight className="stroke-primary" />}
              color="white"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="main-container primary-py">
          <Heading
            heading="What We Offer"
            headingClassName="text-primary"
            subHeading="Specialty"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {localCorporateServices.map((service, index) => (
              <div
                key={service.id || index}
                className="relative min-h-130 rounded-3xl overflow-hidden text-white flex items-end shadow-[0_10px_10px_0_rgba(255,255,255,0.1)] hover:shadow-[15px_30px_30px_10px_rgba(100,136,230,0.5)] transition-all duration-500"
              >
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover rounded-3xl"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-9 z-10">
                  <h2 className="text-3xl lg:text-4xl font-inter-tight text-white leading-snug mb-3 break-words">
                    {service.title}
                  </h2>
                  <p>
                    {service.description}
                  </p>

                  <Button
                    href={service.href}
                    className="mt-5 border-white"
                    iconclassName="bg-white"
                    spanclassName="w-78 text-center"
                    text="Know More"
                    color="transparent"
                    size="sm"
                    icon={<IconArrowRight className="stroke-primary" />}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="primary-py bg-[url('/images/bg/counter-bg.png')] bg-no-repeat bg-cover">
          <div className="main-container flex flex-col md:flex-row gap-12 justify-between">
            <Counter
              number={30}
              labelClassName="text-white"
              headingClassName="text-white"
              icon={<IconPlus className="w-6 h-6" />}
              label="Years Experience"
            />
            <Counter
              number={45}
              labelClassName="text-white"
              headingClassName="text-white"
              icon={<IconPlus className="w-6 h-6" />}
              label="Countries served"
            />
            <Counter
              number={40000}
              labelClassName="text-white"
              headingClassName="text-white"
              icon={<IconPlus className="w-6 h-6" />}
              label="Professionals Trained"
            />
            <Counter
              number={900}
              labelClassName="text-white"
              headingClassName="text-white"
              icon={<IconPlus className="w-6 h-6" />}
              label="Audits & Projects Delivered"
            />
          </div>
        </div>
      </section>

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


      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="primary-py main-container">
          <Heading
            subHeading="How we deliver"
            heading="Our Approach"
            headingClassName="text-white"
            subHeadingClassName="text-white"
          />

          <div className="flex justify-center mb-8">
            <div className="flex bg-white/20 rounded-full p-1">
              <button
                onClick={() => setActiveTab("auditing")}
                className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === "auditing"
                  ? "bg-white text-primary"
                  : "text-white hover:text-primary hover:bg-white/10"
                  }`}
              >
                Auditing
              </button>
              <button
                onClick={() => setActiveTab("consulting")}
                className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === "consulting"
                  ? "bg-white text-primary"
                  : "text-white hover:text-primary hover:bg-white/10"
                  }`}
              >
                Consulting
              </button>
            </div>
          </div>

          <ApproachSlider activeTab={activeTab} />
        </div>
      </section>

      <section className="main-container primary-py">
        <Heading
          heading="Learning Methodology"
          subHeading='Methodology'
          headingClassName='text-secondary'
          subHeadingClassName='text-primary'
        />

        <div className="flex justify-center mt-8">
          <Button
            className="mt-5 border-primary text-primary"
            iconclassName="bg-primary"
            spanclassName="w-78 text-center"
            text="Know More"
            color="transparent"
            size="sm"
            icon={<IconArrowRight className="stroke-white" />}
          />
        </div>

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