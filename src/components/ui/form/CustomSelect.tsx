"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = {
	label: string;
	value: string;
};

type SelectProps = {
	options: Option[];
	value?: string;
	onChange?: (value: string) => void;
	className?: string;
};

export default function CustomSelect({
	options,
	value,
	onChange,
	className,
}: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	const selected = options.find((opt) => opt.value === value) || options[0];

	return (
		<div className={cn("relative w-64", className)}>
			{/* Button */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="cursor-pointer flex w-full font-medium items-center justify-between rounded-sm bg-[#DBEAFE8F] px-2 py-2 text-left text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
			>
				{selected?.label}

				<span className="ml-2 flex h-6 w-6 items-center justify-center rounded-sm bg-[#DBEAFEFA]">
					<ChevronDown
						className={cn(
							"h-4 w-4 transition-transform",
							isOpen && "rotate-180"
						)}
					/>
				</span>
			</button>

			{/* Dropdown */}
			{isOpen && (
				<ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg">
					{options.map((opt) => (
						<li
							key={opt.value}
							onClick={() => {
								onChange?.(opt.value);
								setIsOpen(false);
							}}
							className={cn(
								"cursor-pointer px-4 py-2 text-sm hover:bg-gray-100",
								opt.value === selected?.value && "bg-gray-50 font-medium"
							)}
						>
							{opt.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
