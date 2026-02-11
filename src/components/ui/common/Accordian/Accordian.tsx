"use client";

import React, { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";

type AccordionItemProps = {
	id: string;
	title: string;
	content: ReactNode;
};

type AccordionProps = {
	items: AccordionItemProps[];
};

export function Accordion({ items }: AccordionProps) {
	const [activeId, setActiveId] = useState<string | null>(null);

	const toggle = (id: string) => {
		setActiveId((prev) => (prev === id ? null : id));
	};

	return (
		<div className="space-y-4">
			{items.map(({ id, title, content }) => {
				const isActive = activeId === id;
				return (
					<div
						key={id}
						className={cn(
							"rounded-xl px-4 md:px-8 shadow-[0_15px_30px_0_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden",
							isActive ? "bg-primary text-white" : "bg-white text-primary"
						)}
					>
						{/* Header */}
						<button
							onClick={() => toggle(id)}
							className={cn(
								"cursor-pointer w-full flex justify-between items-center py-4 md:py-7 border-b",
								"transition-colors duration-300",
								isActive
									? "border-[#A8B6E685] text-white"
									: "border-[#A8B6E685] text-primary"
							)}
						>
							<span className="font-medium text-2xl md:text-xl">{title}</span>
							<IconChevronDown
								size={20}
								className={cn(
									"transition-transform duration-300 border rounded-full min-h-5 min-w-5",
									isActive && "rotate-180",
									isActive
										? "text-white border-white"
										: "text-primary border-primary"
								)}
							/>
						</button>

						{/* Content */}
						<div
							className={cn(
								"transition-all duration-300 overflow-hidden",
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
