"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Heading } from "@/components/ui/common/Heading";

export default function Categories() {
	const categories = [
		{
			id: 1,
			name: "ISO standards",
			image: "/images/courses/categories/1.png",
		},
		{
			id: 2,
			name: "Quality Management",
			image: "/images/courses/categories/2.png",
		},
		{
			id: 3,
			name: "Safety Management",
			image: "/images/courses/categories/3.png",
		},
		{
			id: 4,
			name: "Individuals",
			image: "/images/courses/categories/4.png",
		},
	];

	return (
		<section className="bg-light mt-12 overflow-hidden">
			<div className="main-container primary-py">
				<Heading subHeading="Category" heading="Explore our categories" />
				<Swiper
					observer={true}
					observeParents={true}
					modules={[Autoplay, Pagination]}
					pagination={{ clickable: true }}
					spaceBetween={8}
					slidesPerView="auto"
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					className="!overflow-visible bottom-pagination"
				>
					{categories.map((category, i) => (
						<SwiperSlide key={i} className="md:!w-[380px]">
							<div className="rounded-3xl overflow-hidden px-12 py-8 flex items-center justify-center md:min-h-88">
								<Image
									src={category.image}
									alt={category.name}
									fill
									className="object-cover rounded-3xl"
								/>
								<h3 className="text-center main-heading z-10 relative text-white leading-snug">
									{category.name}
								</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}