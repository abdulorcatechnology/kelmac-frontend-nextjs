"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import { Heading } from "@/components/ui/common/Heading";
import {
	IconBinocular,
	IconRocket,
	IconDesign,
	IconCertificate,
	IconCirclesFour,
	IconBookFilled,
} from "@/components/icons/icons";

const slides = [
	{
		icon: <IconBinocular />,
		title: "Discover",
		description:
			"Clarify objectives, risks, obligations, and current maturity; agree the measurable outcomes.",
	},
	{
		icon: <IconDesign />,
		title: "Design",
		description:
			"co-create the process architecture, controls, and documented information sized to your operations.",
	},
	{
		icon: <IconRocket />,
		title: "Develop",
		description:
			"pilot, train, and coach; run live audits and management reviews to prove the design.",
	},
	{
		icon: <IconBookFilled />,
		title: "Assure",
		description:
			"internal/supplier audits, pre-assessment, and readiness scoring aligned to certification timelines.",
	},
	{
		icon: <IconCirclesFour />,
		title: "Improve",
		description:
			"embed metrics, lessons learned, and governance so the system keeps delivering value",
	},
];

export default function How_we_work() {
	return (
		<section className="rounded-3xl bg-white overflow-hidden">
			<div className="main-container primary-py">
				{/* make heading text black */}
				<Heading
					subHeading="Process"
					heading="How We Work (The Kelmac Method)"
					headingClassName="text-black"
				/>
				<Swiper
					modules={[Autoplay, Navigation]}
					spaceBetween={24}
					slidesPerView="auto"
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					className="!overflow-visible"
				>
					{slides.map((slide, i) => (
						<SwiperSlide key={i} className="!w-[320px]">
							<div className="py-12 px-7 bg-lighter rounded-4xl space-y-6">
								{slide.icon}
								<h3 className="text-3xl text-primary font-semibold">
									{slide.title}
								</h3>
								<p className="text-black capitalize">{slide.description}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
