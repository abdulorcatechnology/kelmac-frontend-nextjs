"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import LinkButton from "@/components/ui/button/LinkButton";
import { cn } from "@/lib/utils";

export type BlogCardProps = {
	id: number;
	imageUrl: string;
	category: string;
	date: string;
	title: string;
	excerpt: string;
	href: string;
	className?: string;
};

export function BlogCard({
	imageUrl,
	category,
	date,
	title,
	excerpt,
	href,
	className,
}: BlogCardProps) {
	return (
		<article
			className={cn(
				"rounded-3xl overflow-hidden w-full",
				className
			)}
		>
			<div className="relative w-full h-90 p-4">
				<div className="relative w-full h-full">
					<Image
						src={imageUrl}
						alt={title}
						fill
						className="object-cover rounded-2xl "
					/>

					<span className="absolute top-4 left-4 bg-white/80 text-primary text-sm font-medium px-4 py-2 rounded-full">
						{category}
					</span>
				</div>
			</div>

			<div className="px-5 pt-2 pb-6 flex flex-col">
				<p className="text-gray-500 text-lg mb-3 font-normal">
					{date}
				</p>

				<h3 className="text-3xl text-primary leading-tight mb-4 line-clamp-2">
					{title}
				</h3>

				<LinkButton
					href={href}
					text="Read more"
					icon={<IconArrowRight size={16} />}
					className="text-secondary font-medium self-start"
				/>
			</div>
		</article>
	);
}