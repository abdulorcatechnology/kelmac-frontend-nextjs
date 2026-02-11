"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Heading } from "@/components/ui/common/Heading";

import { Card } from "@/components/ui/common/Card";
import { exploreCaseItems } from "@/data/about";

export default function ExploreItems() {
	return (
		<section className="bg-primary rounded-3xl overflow-hidden">
			<div className="primary-py main-container">
				<Heading
					subHeading="Know More"
					heading="Keep Exploring"
					headingClassName="text-white"
					subHeadingClassName="text-white"
				/>
				<Swiper
					observer={true}
					observeParents={true}
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
					{exploreCaseItems.map((caseItem, i) => (
						<SwiperSlide key={i} className="md:!w-[380px]">
							<Card
								key={caseItem.id}
								id={caseItem.id}
								imageUrl={caseItem.imageUrl}
								title={caseItem.title}
								excerpt={caseItem.excerpt}
								href={caseItem.href}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
