// components/Marquee.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

type MarqueeProps = {
	images: string[];
	speed?: number;
	pauseOnHover?: boolean;
	direction?: "left" | "right";
	itemWidth?: number;
	itemHeight?: number;
	gap?: number;
	tolerancePx?: number;
	className?: string;
	ariaLabel?: string;
};

export function Marquee({
	images,
	speed = 120,
	pauseOnHover = true,
	direction = "left",
	itemWidth = 220,
	itemHeight = 120,
	gap = 20,
	tolerancePx = 1,
	className,
	ariaLabel = "image-marquee",
}: MarqueeProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const stripRef = useRef<HTMLDivElement | null>(null);

	// animation state refs
	const rafRef = useRef<number | null>(null);
	const pausedRef = useRef(false);
	const posRef = useRef(0); // current translate offset in px within [0, loopWidth)
	const loopWidthRef = useRef(0); // width of single set (px)
	const lastTsRef = useRef<number | null>(null);

	const dirSign = direction === "left" ? 1 : -1;

	// Wait for images in the strip to finish loading
	const waitForImagesLoaded = (el: HTMLElement) =>
		new Promise<void>((resolve) => {
			const imgs = Array.from(el.querySelectorAll("img"));
			if (imgs.length === 0) return resolve();
			let remaining = imgs.length;
			const done = () => {
				remaining -= 1;
				if (remaining <= 0) resolve();
			};
			imgs.forEach((img) => {
				if ((img as HTMLImageElement).complete) {
					done();
				} else {
					img.addEventListener("load", done, { once: true });
					img.addEventListener("error", done, { once: true });
				}
			});
		});

	useEffect(() => {
		const strip = stripRef.current;
		if (!strip) return;

		let mounted = true;
		let ro: ResizeObserver | null = null;

		const measureLoop = () => {
			// compute exact width of first n children (n = images.length)
			const children = Array.from(strip.children) as HTMLElement[];
			const n = images.length;
			if (children.length < n) {
				loopWidthRef.current = 0;
				return;
			}

			// Sum bounding widths of first n children (accurate even if variable widths)
			let total = 0;
			for (let i = 0; i < n; i++) {
				const r = (children[i] as HTMLElement).getBoundingClientRect();
				total += Math.round(r.width);
			}

			// add gaps between items (n-1 gaps)
			total += gap * Math.max(0, n - 1);

			// add tiny tolerance (helps avoid rare subpixel gaps)
			total = Math.max(1, Math.round(total + tolerancePx));

			loopWidthRef.current = total;

			// normalize pos to new loop width
			const L = loopWidthRef.current;
			posRef.current = ((posRef.current % L) + L) % L;
		};

		const setup = async () => {
			// wait for images to load so measurements are accurate
			await waitForImagesLoaded(strip);
			if (!mounted) return;
			measureLoop();

			// watch for resize/layout changes
			ro = new ResizeObserver(() => {
				// remeasure on change
				measureLoop();
			});
			ro.observe(strip);
		};

		setup();

		// animation
		const tick = (now: number) => {
			if (lastTsRef.current === null) lastTsRef.current = now;
			const dt = (now - lastTsRef.current) / 1000;
			lastTsRef.current = now;

			const L = loopWidthRef.current;
			if (!pausedRef.current && L > 0) {
				// advance pos by speed * dt (float, smooth)
				posRef.current += speed * dt * dirSign;

				// wrap into [0, L)
				posRef.current = ((posRef.current % L) + L) % L;

				// apply transform using floating px for smooth GPU animation
				if (stripRef.current) {
					stripRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
				}
			}

			rafRef.current = requestAnimationFrame(tick);
		};

		rafRef.current = requestAnimationFrame(tick);

		return () => {
			mounted = false;
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			ro?.disconnect();
			lastTsRef.current = null;
		};
		// dependencies: when images change we re-run
	}, [images, speed, direction, gap, tolerancePx, itemWidth, itemHeight]);

	// pause/resume handlers (hover & touch); does not reset position
	useEffect(() => {
		const container = containerRef.current;
		if (!container || !pauseOnHover) return;

		const onEnter = () => {
			pausedRef.current = true;
		};
		const onLeave = () => {
			pausedRef.current = false;
			lastTsRef.current = null; // avoid huge dt on resume
		};

		container.addEventListener("mouseenter", onEnter);
		container.addEventListener("mouseleave", onLeave);
		container.addEventListener("touchstart", onEnter);
		container.addEventListener("touchend", onLeave);

		return () => {
			container.removeEventListener("mouseenter", onEnter);
			container.removeEventListener("mouseleave", onLeave);
			container.removeEventListener("touchstart", onEnter);
			container.removeEventListener("touchend", onLeave);
		};
	}, [pauseOnHover]);

	// duplicate images (render twice for seamless loop)
	const rendered = [...images, ...images, ...images, ...images];

	return (
		<div
			ref={containerRef}
			className={`w-full overflow-hidden ${className ?? ""}`}
			aria-label={ariaLabel}
			role="region"
			style={{ touchAction: "pan-y" }}
		>
			<div
				ref={stripRef}
				className="flex items-center will-change-transform"
				style={{
					gap: `${gap}px`,
					transform: `translate3d(0px,0,0)`,
					userSelect: "none",
					whiteSpace: "nowrap",
				}}
			>
				{rendered.map((src, idx) => (
					<div
						key={idx}
						className="relative flex-shrink-0 rounded-md overflow-hidden "
						style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
					>
						<Image
							src={src}
							alt={`marquee-item-${idx}`}
							fill
							className="object-contain"
							sizes={`${itemWidth}px`}
							priority={idx < images.length ? true : false}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
