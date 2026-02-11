"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLink = {
	name: string;
	href: string;
};

type NavLinksProps = {
	links: NavLink[];
	className?: string;
	orientation?: "vertical" | "horizontal";
	withDivider?: boolean;
	itemClassName?: string;
	linkClassName?: string;
};

export default function NavLinks({
	links,
	className,
	orientation = "vertical",
	withDivider = false,
	itemClassName,
	linkClassName,
}: NavLinksProps) {
	const containerClasses = cn(
		orientation === "vertical"
			? "flex flex-col space-y-4"
			: "flex flex-wrap flex-row space-x-4",
		className
	);

	return (
		<ul className={containerClasses}>
			{links.map((link, index) => (
				<li
					key={link.href}
					className={cn(
						itemClassName,
						withDivider &&
							orientation === "vertical" &&
							index !== links.length - 1 &&
							"border-b border-body pb-2",
						withDivider &&
							orientation === "horizontal" &&
							index !== links.length - 1 &&
							"border-r border-body pr-2"
					)}
				>
					<Link
						href={link.href}
						className={cn("hover:text-primary", linkClassName)}
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
}
