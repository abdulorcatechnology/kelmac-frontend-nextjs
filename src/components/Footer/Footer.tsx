"use client";

import Link from "next/link";
import Image from "next/image";
import {
	IconLinkedIn,
	IconFacebook,
	IconInstagram,
	IconTwitter,
	IconYouTube,
} from "@/components/icons/icons";
import NavLinks from "@/components/ui/common/NavLinks";
import CustomSelect from "@/components/ui/form/CustomSelect";
import { useState } from "react";

export const menuLinks = [
	{ name: "Home", href: "/" },
	{ name: "About us", href: "/about/overview" },
	{ name: "Our History", href: "/about/our-history" },
	{ name: "Courses", href: "/course/all-courses" },
	{ name: "Corporate", href: "/corporate" },
];

export const resourceLinks = [
	{ name: "Blog", href: "/resources/latest-blogs" },
	{ name: "Webinars", href: "/resources/webinars" },
	{ name: "Whitepapers", href: "/resources/white-papers" },
];

export const footerLinks = [
	{ name: "Governance requirements", href: "/governance" },
	{ name: "Terms and Conditions", href: "/terms" },
	{ name: "Privacy Statement", href: "/privacy" },
	{ name: "Cookie Policy", href: "/cookie" },
];

export default function Footer() {
	const [selected, setSelected] = useState("usa");

	return (
		<footer className="font-inter">
			<div className="main-container pt-18 grid grid-cols-1 md:grid-cols-[50%_15%_15%_20%] gap-12 md:gap-0">
				<div className="flex flex-col min-h-full">
					<div className="space-y-6">
						<Link href="/">
							<Image
								src="/images/logo.png"
								alt="Kelmac Group"
								width={130}
								height={57}
								priority
							/>
						</Link>
						<p className="text-lg mt-6">We are certified by industry standards.</p>
						<Image
							src="/images/coi-irca-footer.svg"
							alt="CQI IRCA"
							width={250}
							height={35}
						/>
					</div>
				</div>

				<div>
					<h4 className="text-lg mb-4 font-semibold text-primary">Menu</h4>
					<NavLinks links={menuLinks} />
				</div>

				{/* Resources */}
				<div>
					<h4 className="font-semibold text-primary text-lg mb-4">Resources</h4>
					<NavLinks links={resourceLinks} />
				</div>

				{/* Contact */}
				<div>
					<h4 className="font-semibold text-primary text-lg mb-4">Contact us</h4>
					<p className="mb-3">
						<a
							href="mailto:info@kelmacgroup.com"
							className="hover:text-primary"
						>
							info@kelmacgroup.com
						</a>
					</p>
					<CustomSelect
						className="max-w-[170px] mb-3 font-semibold"
						options={[
							{ label: "Ireland", value: "ireland" },
							{ label: "USA", value: "usa" },
							{ label: "UK", value: "uk" },
						]}
						value={selected}
						onChange={(val) => setSelected(val)}
					/>

					<p className="text-sm">
						Kelmac Group® Limited <br />
						Old Windmill Office Suites, Lower Gerald Griffin Street <br />
						Limerick, V94 YRD7, Ireland.
					</p>
					<a href="tel:+35361491224" className="block mt-2 font-bold text-sm text-black">
						+353 61 491 224
					</a>
				</div>
			</div>

			<div className="main-container pt-8 pb-3 text-sm">
				© 1996 - 2023, Kemac Group | All rights reserved.
			</div>

			<div className="border-t border-[#A8B6E699] pt-4 pb-8">
				<div className="main-container flex flex-col md:flex-row justify-between items-center gap-4">
					{/* Social Icons */}
					<div className="flex gap-4">
						<a href="#" className="hover:text-primary">
							<IconFacebook className="text-[#6486E6]"  />
						</a>
						<a href="#" className="hover:text-primary">
							<IconTwitter className="text-[#6486E6]"  />
						</a>
						<a href="#" className="hover:text-primary">
							<IconInstagram className="text-[#6486E6]"  />
						</a>
						<a href="#" className="hover:text-primary">
							<IconLinkedIn className="text-[#6486E6]"  />
						</a>
						<a href="#" className="hover:text-primary">
							<IconYouTube className="text-[#6486E6]"  />
						</a>
					</div>

					{/* Bottom Links */}
					<NavLinks
						orientation="horizontal"
						links={footerLinks}
						withDivider
						linkClassName="text-[#6486E6] underline text-sm"
					/>
				</div>
			</div>
		</footer>
	);
}
