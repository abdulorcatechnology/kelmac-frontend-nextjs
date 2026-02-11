"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";

export type BundleCardProps = {
	id: number;
	imageUrl: string;
	title: string;
	description: string;
	tags: string[];
	href: string;
};

export function BundleCard({
	imageUrl,
	title,
	description,
	tags,
	href,
}: BundleCardProps) {
	return (
		<div className="relative rounded-[32px] overflow-hidden h-[600px] flex flex-col">
			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Content - positioned at bottom */}
			<div className="relative z-10 flex flex-col justify-end h-full p-7 text-white">
				<h3 className="text-3xl md:text-4xl font-inter-tight font-semibold leading-tight mb-4">
					{title}
				</h3>

				<p className="text-base md:text-lg leading-relaxed mb-6 opacity-90">
					{description}
				</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20"
						>
							• {tag}
						</span>
					))}
				</div>

				<Button
					href={href}
					text="Purchase this bundle"
					icon={<IconArrowRight className="text-white" />}
					color="white"
					size="lg"
					className="w-full"
					spanclassName="px-4 w-full text-center"
					iconclassName="bg-[#1a2942] hover:bg-[#2a3f59]"
				/>
			</div>
		</div>
	);
}