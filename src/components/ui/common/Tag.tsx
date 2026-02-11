import React from "react";
import { cn } from "@/lib/utils";

export type TagProps = {
	label?: string;
	className?: string;
	dotClassName?: string;
	labelClassName?: string;
	size?: "sm" | "md";
	color?: "white" | "semiprimary" | "semitransparent";
};

export function Tag({
	label = "Tag",
	color = "white",
	size = "md",
	className = "",
	dotClassName = "",
	labelClassName = "",
}: TagProps) {
	const colorMap = {
		white: "bg-white text-primary",
		semitransparent: "bg-white",
		semiprimary: "bg-[#2A3F59] text-white",
	};
	const sizeMap = {
		sm: "px-3 md:px-5 py-2",
		md: "px-3 md:px-5 py-2 md:py-3",
	};
	const tagClasses = cn(
		"inline-flex items-center gap-2 rounded-lg  ",
		className,
		sizeMap[size],
		colorMap[color]
	);

	const dotClasses = cn(
		"h-[6px] w-[6px] rounded-full bg-secondary",
		dotClassName
	);
	const labelClasses = cn(" font-medium text-lg", labelClassName);

	return (
		<div className={tagClasses}>
			<span className={dotClasses}></span>
			<span className={labelClasses}>{label}</span>
		</div>
	);
}

export type TagsProps = {
	items?: string[];
	className?: string;
};

export function Tags({
	items = ["Auditing", "Consulting", "Learning"],
	className = "",
}: TagsProps) {
	const groupClasses = cn("flex flex-wrap gap-3", className);

	return (
		<div className={groupClasses}>
			{items.map((item) => (
				<Tag key={item} label={item} />
			))}
		</div>
	);
}
