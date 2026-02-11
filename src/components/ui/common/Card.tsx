"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import LinkButton from "@/components/ui/button/LinkButton";

export type CardProps = {
	id: number;
	imageUrl: string;
	date?: string;
	title: string;
	excerpt: string;
	btnText?: string;
	href: string;
	className?: string;
};

export function Card({
	imageUrl,
	title,
	excerpt,
	btnText = "Know More",
	href,
	className,
}: CardProps) {
	return (
		<div className="bg-white/2 rounded-xl p-4 overflow-hidden flex flex-col">
			<div className="relative w-full h-52">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover rounded-2xl"
				/>
			</div>

			<div className="pt-4 flex flex-col flex-1">
				<h3 className="text-2xl font-medium text-white leading-normal mb-2 line-clamp-2">
					{title}
				</h3>
				<p className="text-white leading-relaxed mb-6 line-clamp-3">
					{excerpt}
				</p>

				<LinkButton
					href={href}
					text={btnText}
					icon={<IconArrowRight size={16} />}
					className="text-secondary font-semibold hover:text-white"
				/>
			</div>
		</div>
	);
}
