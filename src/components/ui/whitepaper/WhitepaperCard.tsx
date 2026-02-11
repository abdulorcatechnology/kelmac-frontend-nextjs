"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { IconArrowRight } from "@tabler/icons-react";
import { Search } from "lucide-react";

export type WhitepaperCardProps = {
    id?: number;
    category: string;
    title: string;
    description: string;
    imageUrl: string;
    fileUrl: string;
    publishedDate: string;
    author?: string;
    showButton?: boolean;
    height?: string;
};

export function WhitepaperCard({
    category,
    title,
    description,
    imageUrl,
    fileUrl,
    publishedDate,
    author,
    showButton = true,
    height = "min-h-160",
}: WhitepaperCardProps) {
    return (
        <div
            className={`relative ${height} rounded-3xl overflow-hidden bg-primary text-white flex items-end shadow-[0_10px_10px_0_rgba(255,255,255,0.1)] hover:shadow-[15px_30px_30px_10px_rgba(100,136,230,0.5)] transition-all duration-500`}
        >
            {/* Background Image */}
            <Image src={imageUrl} alt={title} fill className="object-cover rounded-3xl" />

            {/* Blur Overlay */}
            <div className="absolute w-full h-[80%]">
                <Image
                    src="/images/designs/course-blur-2.png"
                    alt="overlay"
                    fill
                    className="object-cover rounded-3xl"
                />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-9 z-10">
                <h2 className="text-2xl lg:text-3xl font-inter-tight text-white leading-snug mb-0 break-words">
                    {title}
                </h2>

                {showButton && (
                    <Button
                        className="mt-5 border-black"
                        iconclassName="bg-primary"
                        spanclassName="w-78 text-center"
                        href={fileUrl}
                        text="Download Now"
                        color="white"
                        size="sm"
                        icon={<IconArrowRight className="stroke-white" />}
                    />
                )}
            </div>
        </div>
    );
}

type WhitepaperListProps = {
    whitepapers: WhitepaperCardProps[];
    initialCount?: number;
};

export function WhitepaperList({ whitepapers, initialCount = 6 }: WhitepaperListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleSearch = (e: React.FormEvent) => e.preventDefault();
    const handleSearchClick = () => {};

    const filteredWhitepapers = whitepapers.filter((paper) => {
        const query = searchQuery.toLowerCase();
        return (
            paper.title.toLowerCase().includes(query) ||
            paper.description.toLowerCase().includes(query) ||
            paper.category.toLowerCase().includes(query) ||
            paper.author?.toLowerCase().includes(query)
        );
    });

    const visibleWhitepapers = filteredWhitepapers.slice(0, visibleCount);
    const hasMore = visibleCount < filteredWhitepapers.length;

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="text-center text-white mb-16">
                <div className="max-w-xs mx-auto">
                    <form className="relative" onSubmit={handleSearch}>
                        <button
                            type="submit"
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-transform hover:scale-105 active:scale-95"
                            onClick={handleSearchClick}
                        >
                            <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors">
                                <Search className="w-5 h-5 md:w-6 md:h-6 text-white stroke-[2.5]" />
                            </div>
                        </button>

                        <input
                            type="text"
                            placeholder="Find your whitepaper"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-[56px] md:h-[64px] pl-[60px] md:pl-[68px] pr-6 md:pr-8 rounded-full text-primary text-base md:text-lg font-normal placeholder:text-gray-500 placeholder:font-light bg-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                        />
                    </form>
                </div>
            </div>

            {/* Search Results Info */}
            {searchQuery && (
                <div className="text-center text-white mb-6">
                    <p className="text-lg">
                        {filteredWhitepapers.length > 0
                            ? `Found ${filteredWhitepapers.length} whitepaper${filteredWhitepapers.length !== 1 ? "s" : ""} for "${searchQuery}"`
                            : `No whitepapers found for "${searchQuery}"`}
                    </p>
                </div>
            )}

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {visibleWhitepapers.map((whitepaper, index) => (
                    <WhitepaperCard key={whitepaper.id || index} {...whitepaper} />
                ))}
            </div>

            {/* No Results */}
            {filteredWhitepapers.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-white mb-4">
                        No whitepapers found matching your search.
                    </p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="text-secondary hover:text-white underline"
                    >
                        Clear search
                    </button>
                </div>
            )}

            {/* View More Button */}
            {hasMore && (
                <div className="text-center pb-8">
                    <button
                        onClick={() => setVisibleCount((prev) => prev + initialCount)}
                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300 group"
                    >
                        View more
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform group-hover:translate-x-1"
                        >
                            <path
                                d="M3 8H13M13 8L8 3M13 8L8 13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
