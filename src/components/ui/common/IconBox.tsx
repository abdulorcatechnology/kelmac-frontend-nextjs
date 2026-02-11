import React from "react";
import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";

export type IconBoxProps = {
	icon?: React.ReactNode;
	subHeading?: string;
	heading?: string;
	className?: string;
};

export function IconBox({
	icon,
	heading,
	subHeading,
	className = "",
}: IconBoxProps) {
	return (
		<div className={cn("flex text-white gap-3 items-start", className)}>
			{icon && <div className="relative top-1">{icon}</div>}
			<div className="space-y-2">
				<h6 className="font-normal">{subHeading}</h6>
				<h4 className="md:text-xl text-lg">{heading}</h4>
			</div>
		</div>
	);
}
