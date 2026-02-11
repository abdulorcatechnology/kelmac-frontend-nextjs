"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
	text: string;
	icon?: ReactNode;
	className?: string;
	iconClassName?: string;
	iconPosition?: "before" | "after";
	href: string;
};

export default function LinkButton({
	text,
	icon,
	className,
	iconClassName,
	iconPosition = "after",
	href,
}: LinkButtonProps) {
	const baseClasses = cn(
		"inline-flex cursor-pointer items-center gap-2 font-medium transition-colors",
		className
	);

	const iconClasses = cn(
		"flex items-center justify-center transition-transform duration-300",
		iconClassName,
		iconPosition === "after" && "group-hover:translate-x-1"
	);

	const content = (
		<>
			{icon && iconPosition === "before" && (
				<span className={iconClasses}>{icon}</span>
			)}
			<span>{text}</span>
			{icon && iconPosition === "after" && (
				<span className={iconClasses}>{icon}</span>
			)}
		</>
	);

	const isExternal = href.startsWith("http");

	if (isExternal) {
		return (
			<a
				href={href}
				className={cn(baseClasses, "group")}
				target="_blank"
				rel="noopener noreferrer"
			>
				{content}
			</a>
		);
	}

	return (
		<Link href={href} className={cn(baseClasses, "group")}>
			{content}
		</Link>
	);
}
