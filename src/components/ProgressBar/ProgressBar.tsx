"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

export function ProgressBar() {
	const pathname = usePathname();
	const ref = useRef<LoadingBarRef>(null);

	useEffect(() => {
		if (pathname) {
			ref.current?.complete();
		}
	}, [pathname]);

	useEffect(() => {
		const handleClick = (e: Event) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;

			const anchor = target.closest("a");
			if (anchor && anchor.href.startsWith(window.location.origin)) {
				ref.current?.continuousStart();
			}
		};

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return <LoadingBar color="#182e4b" height={3} shadow={true} ref={ref} />;
}
