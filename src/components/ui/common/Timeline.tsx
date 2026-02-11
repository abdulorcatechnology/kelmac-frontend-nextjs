"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export type TimelineItem = {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	link?: string;
};

type TimelineProps = {
	items: TimelineItem[];
	circleClass?: string;
	lineClass?: string;
};

export function Timeline({
	items,
	circleClass = "bg-secondary",
	lineClass = "bg-gray-200",
}: TimelineProps) {
	return (
		<div className="relative">
			{/* center vertical line (desktop only) */}
			<div
				className={`absolute h-[92%] left-1/2 -top-4 bottom-0 w-[2px] -translate-x-1/2 hidden md:block ${lineClass}`}
				aria-hidden
			/>

			<div className="space-y-20">
				{items.map((item, index) => {
					const shouldReverse = index % 2 !== 0;
					const isExternal = item.link?.startsWith("http");

					return (
						<div key={item.id} className="relative">
							{/* circle */}
							<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 z-10">
								<div
									className={`w-[30px] h-[30px] rounded-full outline-12 outline-light ${circleClass}`}
								/>
							</div>

							{/* content */}
							<div
								className={`flex flex-col md:items-center md:flex-row gap-8 md:gap-28 ${shouldReverse ? "md:flex-row-reverse" : ""
									}`}
							>
								{/* image */}
								<div className="w-full md:w-1/2 order-1">
									<div className="relative aspect-video w-full rounded-3xl overflow-hidden">
										<Image
											src={item.imageUrl}
											alt={item.title}
											fill
											className="object-cover"
										/>
									</div>
								</div>

								{/* text */}
								<div className="w-full md:w-1/2 order-2 space-y-4 md:text-left">
									<h3 className="text-3xl font-medium text-primary">
										{item.title}
									</h3>
									<p className="text-body">{item.description}</p>

									{item.link && (
										<div className="mt-8">
											{isExternal ? (
												<a
													href={item.link}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-primary font-medium group"
												>
													Discover More
													<IconArrowRight
														size={16}
														className="transition-transform group-hover:translate-x-1"
													/>
												</a>
											) : (
												<Link
													href={item.link}
													className="inline-flex items-center gap-2 text-primary font-medium group"
												>
													Discover More
													<IconArrowRight
														size={16}
														className="transition-transform group-hover:translate-x-1"
													/>
												</Link>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
