'use client';

import { useState } from "react";
import { Iconcheckmark } from "@/components/icons/icons";

interface HoverImageCardProps {
    title: string;
    image: string;
}

export default function HoverImageCard({ title, image }: HoverImageCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image (always the same) */}
            <img
                src={image}
                alt={`${title} image`}
                className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <h2
                    className="text-white text-3xl"
                    style={{ fontFamily: "Hedvig Letters Serif" }}
                >{title}</h2>
            </div>

            {/* Hover Icon */}
            {isHovered && (
                <div className="absolute  top-40 right-28">
                    <Iconcheckmark className="text-white text-4xl opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}
        </div>
    );
}
