"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import LinkButton from "@/components/ui/button/LinkButton";

export type CaseCardProps = {
	id: number;
	imageUrl: string;
	category: string;
	date: string;
	title: string;
	href: string;
};

export function CaseCard({
	imageUrl,
	category,
	date,
	title,
	href,
}: CaseCardProps) {
	return (
		<div className="bg-white rounded-xl overflow-hidden flex flex-col">
			<div className="relative w-full h-52">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover rounded-lg"
				/>
				<span className="absolute top-3 left-3 bg-white/93 text-primary text-sm font-normal px-3 py-1 rounded-sm ">
					{category}
				</span>
			</div>

			<div className="pt-4 flex flex-col flex-1">
				<p className="mb-2">{date}</p>
				<h3 className="text-2xl font-medium text-primary leading-normal mb-5 line-clamp-2">
					{title}
				</h3>

				<LinkButton
					href={href}
					text="Read more"
					icon={<IconArrowRight size={16} />}
					className="text-secondary font-semibold hover:text-primary"
				/>
			</div>
		</div>
	);
}
