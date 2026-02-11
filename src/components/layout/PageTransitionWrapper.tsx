"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export function PageTransitionWrapper({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ opacity: 0, rotateX: 90 }}
				animate={{ opacity: 1, rotateX: 0 }}
				exit={{ opacity: 0, rotateX: -90 }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
