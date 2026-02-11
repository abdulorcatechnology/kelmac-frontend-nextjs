"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { IconArrowRight, IconStar } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";

export default function HeroSlider() {
	return (
		<Swiper
			modules={[Navigation, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			loop={true}
			autoplay={{ delay: 5000 }}
			className="hero-swiper"
		>
			{[1, 2, 3].map((_, index) => (
				<SwiperSlide>
					<section className="relative bg-primary bg-[url('/images/bg/hero.png')] bg-cover bg-[-250px_center] md:bg-[300px_center] lg:bg-[350px_center] bg-no-repeat lg:min-h-183 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
						<div className="absolute inset-0 w-[80%] lg:w-[55%] bg-gradient-to-r from-primary from-[0%] via-primary/90 via-[85%] to-transparent to-[100%]"></div>

						<div className="main-container primary-py relative z-10">
							<div className="text-white w-full">
								<div className="flex items-center gap-3 mb-4">
									<div className="flex gap-2">
										<IconStar width={17} className="fill-white" />
										<IconStar width={17} className="fill-white" />
										<IconStar width={17} className="fill-white" />
										<IconStar width={17} className="fill-white" />
										<IconStar width={17} className="fill-white" />
									</div>
									<span className="font-inter">Rated 4.9/5</span>
								</div>
								<h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
									ISO Management System <br className="hidden md:block" /> and
									Regulatory <br className="hidden md:block" />
									Compliance solutions
								</h1>
								<p className="text-xl text-capitalize my-8">
									Consulting, Learning And Auditing Tailors Solutions
								</p>
								<Button
									iconclassName="bg-primary"
									spanclassName="px-4"
									href="/course/"
									text="Our Courses"
									color="white"
									icon={<IconArrowRight className="stroke-white" />}
								/>
							</div>
						</div>
					</section>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
