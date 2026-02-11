"use client";

import React, { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconChevronUp } from "@/components/icons/icons";

type AccordionTwoItemProps = {
	id: string;
	title: string;
	subtitle: string;
	content: ReactNode;
};

type AccordionTwoProps = {
	items: AccordionTwoItemProps[];
};

export function AccordionTwo({ items }: AccordionTwoProps) {
	const [activeId, setActiveId] = useState<string | null>(null);

	const toggle = (id: string) => {
		setActiveId((prev) => (prev === id ? null : id));
	};

	return (
		<div className="space-y-4">
			{items.map(({ id, title, subtitle, content }) => {
				const isActive = activeId === id;
				return (
					<div
						key={id}
						className={cn(
							"rounded-xl shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden",
							isActive ? "bg-white text-primary" : "bg-white text-primary"
						)}
					>
						{/* Header */}
						<button
							onClick={() => toggle(id)}
							className={cn(
								"cursor-pointer w-full flex justify-between items-center py-4 md:py-7 px-4 md:px-6",
								"transition-colors duration-300",
								isActive ? "text-primary" : " text-primary"
							)}
						>
							<div className="flex items-center gap-3">
								<IconChevronUp
									className={cn(
										"transition-transform duration-300 text-secondary",
										isActive && "rotate-180"
									)}
								/>
								<span className="font-medium text-xl md:text-2xl">{title}</span>
							</div>
							<span className="text-secondary md:text-xl text-lg">
								{subtitle}
							</span>
						</button>

						{/* Content */}
						<div
							className={cn(
								"transition-all duration-300 overflow-hidden bg-light px-4 md:px-6",
								isActive ? "max-h-[2500px] py-4 md:py-5" : "max-h-0 p-0"
							)}
						>
							{content}
						</div>
					</div>
				);
			})}
		</div>
	);
}
