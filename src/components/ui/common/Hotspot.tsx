"use client";

import React, { useState } from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { IconX } from "@tabler/icons-react";

export type HotspotItem = {
	id: string | number;
	xPercent: number;
	yPercent: number;
	title?: string;
	content?: React.ReactNode;
	alwaysVisible?: boolean;
	label?: string;
};

type HotspotProps = {
	src: string;
	alt?: string;
	items: HotspotItem[];
	hotspotSize?: number;
	hotspotColorClass?: string;
	className?: string;
};

export function Hotspot({
	src,
	alt = "image",
	items,
	hotspotSize = 30,
	hotspotColorClass = "bg-secondary",
	className,
}: HotspotProps) {
	const [activeId, setActiveId] = useState<string | number | null>(null);

	// how much to shift the bubble horizontally (px)
	const SKIDDING = 12; // increase -> bubble moves more right; pointer will be moved left by same amount

	const toggle = (id: string | number, alwaysVisible?: boolean) => {
		if (alwaysVisible) return;
		setActiveId((prev) => (prev === id ? null : id));
	};

	return (
		<div
			className={`relative inline-block w-full ${className ?? ""}`}
			role="region"
			aria-label="hotspot-image"
		>
			<div className="relative w-full">
				<Image
					src={src}
					alt={alt}
					width={1200}
					height={800}
					className="w-full h-auto object-cover rounded-lg"
				/>

				{/* Hotspots */}
				<div className="absolute inset-0">
					{items.map((it) => {
						const leftPct = Math.max(0, Math.min(100, it.xPercent));
						const topPct = Math.max(0, Math.min(100, it.yPercent));

						const isOpen = it.alwaysVisible || activeId === it.id;

						return (
							<div
								key={it.id}
								className="absolute"
								style={{
									left: `${leftPct}%`,
									top: `${topPct}%`,
									transform: "translate(-50%, -50%)",
								}}
							>
								<Tippy
									className="p-0"
									content={
										<div className="relative">
											<div className="bg-primary px-4 py-2 text-white rounded-full relative">
												<div className="flex items-start justify-between gap-4">
													<div className="flex-1">
														{it.title && (
															<h4 className="font-semibold text-lg">
																{it.title}
															</h4>
														)}
														{it.content && (
															<div className="text-sm mt-1">{it.content}</div>
														)}
													</div>
													{!it.alwaysVisible && (
														<button
															className="ml-3 p-1 rounded-full text-white/80 hover:text-white cursor-pointer absolute -top-2 -right-2 bg-primary"
															onClick={() => setActiveId(null)}
															aria-label="Close"
														>
															<IconX size={16} />
														</button>
													)}
												</div>
											</div>

											<div
												className="absolute w-4 h-4 rounded-full bg-primary -bottom-2"
												style={{
													left: `calc(50% - ${SKIDDING}px)`,
													transform: "translateX(-50%)",
												}}
											/>
										</div>
									}
									placement="top"
									visible={isOpen}
									interactive
									arrow={false}
									offset={[SKIDDING, 12]}
								>
									<button
										onClick={() => toggle(it.id, !!it.alwaysVisible)}
										className="flex items-center justify-center focus:outline-none transition-transform active:scale-95"
										style={{
											width: hotspotSize,
											height: hotspotSize,
											borderRadius: hotspotSize / 2,
										}}
										title={it.label ?? it.title ?? ""}
									>
										<span
											className={`${hotspotColorClass} w-full h-full rounded-full flex items-center justify-center text-white text-sm select-none`}
										>
											{it.label ? (
												<span className="text-xs font-medium">{it.label}</span>
											) : null}
										</span>
									</button>
								</Tippy>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
