"use client";

import { useState } from "react";
import { 
    coreServicesItems, 
    advancedProgramsItems, 
    learningConfig, 
    LearningItem 
} from "@/data/learning";
import { Heading } from "@/components/ui/common/Heading";
import Image from "next/image";
import {
    IconTarget,
    IconHeartBeat,
    IconPill,
    IconMicroscope,
    IconMicroscope2,
    IconFeather,
    IconAirplane,
    IconDNA,
    IconLock2,
    IconGraph
} from "@/components/icons/icons";

interface LearningCardProps {
    item: LearningItem;
}

const getIcon = (iconName: string) => {
    const iconProps = { className: "w-10 h-10", fill: "white" };

    switch (iconName) {
        case "IconTarget":
            return <IconTarget {...iconProps} />;
        case "IconHeartBeat":
            return <IconHeartBeat {...iconProps} />;
        case "IconPill":
            return <IconPill {...iconProps} />;
        case "IconMicroscope":
            return <IconMicroscope {...iconProps} />;
        case "IconMicroscope2":
            return <IconMicroscope2 {...iconProps} />;
        case "IconFeather":
            return <IconFeather {...iconProps} />;
        case "IconAirplane":
            return <IconAirplane {...iconProps} />;
        case "IconDNA":
            return <IconDNA {...iconProps} />;
        case "IconLock2":
            return <IconLock2 {...iconProps} />;
        case "IconGraph":
            return <IconGraph {...iconProps} />;
        default:
            return <IconTarget {...iconProps} />;
    }
};

function LearningCard({ item }: LearningCardProps) {
    return (
        <div className="relative rounded-3xl overflow-hidden text-white h-[480px] flex flex-col justify-between shadow-lg">
            <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                priority
            />

            <div className="relative z-10 p-6 flex flex-col flex-1">
                <div className="w-15 h-15 bg-white/20 border-1 border-white/30 rounded-2xl flex items-center justify-center mb-10 mt-4 ml-1">
                    {getIcon(item.icon)}
                </div>

                <h3 className="text-4xl leading-tight mb-3">
                    {item.title}
                </h3>

                <p className="text-blue-100 text-sm mb-6 max-w-md">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-4 py-1 bg-white text-primary text-sm font-medium rounded-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Learning() {
    const [activeTab, setActiveTab] = useState("core");

    const getCurrentItems = () => {
        switch (activeTab) {
            case "core":
                return coreServicesItems;
            case "advanced":
                return advancedProgramsItems;
            default:
                return coreServicesItems;
        }
    };

    const currentItems = getCurrentItems();

    return (
        <section className="primary-py bg-light">
            <div className="main-container">
                <Heading
                    subHeading="Learning"
                    heading={learningConfig.title}
                    headingClassName="text-primary"
                />

                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full p-0.1 border border-secondary">
                        {learningConfig.tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-3 rounded-full font-medium transition-all text-base ${
                                    activeTab === tab.id
                                        ? "bg-primary text-white"
                                        : "text-gray-600 hover:text-primary cursor-pointer"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((item) => (
                        <LearningCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}