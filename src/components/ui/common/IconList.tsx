import React from "react";
import { cn } from "@/lib/utils";

export type IconListItem = {
	text: string;
	icon?: React.ReactNode;
};

export type IconListProps = {
	items: IconListItem[];
	className?: string;
};

export function IconList({ items, className = "" }: IconListProps) {
	return (
		<ul className={cn("space-y-4", className)}>
			{items.map((item, index) => (
				<li key={index} className="flex items-center gap-3">
					{item.icon && (
						<div className="flex-shrink-0 text-primary">{item.icon}</div>
					)}
					{!item.icon && (
						<div className="flex-shrink-0 bg-white w-[6px] h-[6px] rounded-full"></div>
					)}
					<p className="leading-relaxed">{item.text}</p>
				</li>
			))}
		</ul>
	);
}
