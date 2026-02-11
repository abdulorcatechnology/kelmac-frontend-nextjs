"use client";
import { Heading } from "@/components/ui/common/Heading";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function Tutors() {
	return (
					<section className="main-container primary-py">
						<Heading
							heading="Learning Methodology"
							subHeading='Methodology'
							headingClassName='text-secondary'
							subHeadingClassName='text-primary'
						/>
		
						<div className="mt-8 w-full">
							<Image
								src="/images/bg/corporate-image.svg"
								alt="Learning Methodology"
								width={1200}
								height={600}
								className="w-full h-auto rounded-3xl object-cover"
							/>
						</div>
					</section>
	);
}
