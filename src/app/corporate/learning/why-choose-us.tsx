import React from 'react';
import { Heading } from '@/components/ui/common/Heading';
import { Tag } from '@/components/ui/common/Tag';

interface FeatureCardProps {
  title: string;
  imageUrl?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, imageUrl, className = "" }) => (
  <div 
    className={` p-6 flex items-end relative overflow-hidden min-h-[260px] ${className}`}
    style={imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
  >
    <h3 className="text-white text-2xl leading-tight z-10 relative mb-5">
      {title}
    </h3>
  </div>
);

export default function WhyChooseUs() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/bg/chooseUs-bg.png')"
            }}
        >

            <div className="relative z-10 main-container primary-py flex items-center min-h-screen">
                <div className="w-full">
                    <Heading
                        heading="Why Choose Us"
                        subHeading='Reasons'
                        headingClassName='text-white'
                        subHeadingClassName='text-white'
                        dotColor='white'
                    />

                    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">

                        <div className="space-y-5">
                            <FeatureCard
                                title="Successful track records with 100% success"
                                imageUrl="/images/bg/why-choose-us-1.png"
                            />
                            <FeatureCard
                                title="Full service provider, no outsourcing"
                                imageUrl="/images/bg/why-choose-us-2.png"
                            />
                            <FeatureCard
                                title="Client Experience/ Success"
                                imageUrl="/images/bg/why-choose-us-3.png"
                            />
                        </div>

                        <div className="space-y-5">
                            <FeatureCard
                                title="Multi-disciplinary and Diverse Auditing Team"
                                imageUrl="/images/bg/why-choose-us-4.png"
                                className="min-h-[400px]"
                            />
                            <FeatureCard
                                title="Client 24×7 Project Management visibility via our audit platform"
                                imageUrl="/images/bg/why-choose-us-5.png"
                                className="min-h-[400px]"
                            />
                        </div>

                        <div className="space-y-5">
                            <FeatureCard
                                title="Partner led audits"
                                imageUrl="/images/bg/why-choose-us-6.png"
                            />
                            <FeatureCard
                                title="Local Delivery, Global Thinking"
                                imageUrl="/images/bg/why-choose-us-7.png"
                            />
                            <FeatureCard
                                title="Geographic coverage"
                                imageUrl="/images/bg/why-choose-us-8.png"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}