import { Heading } from "@/components/ui/common/Heading";
import { Timeline } from "@/components/ui/common/Timeline";
import { timelineItems } from "@/data/our-history";

export default function OurHistory() {
	return (
		<main className="main">
			<section className="bg-primary md:bg-[url('/images/bg/our-history.png')] bg-cover lg:bg-top md:bg-[70%_top] bg-no-repeat lg:min-h-150 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
				<div className="main-container primary-py">
					<div className="text-white md:w-[85%] lg:w-[68%]">
						<h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
							Our History
						</h1>
						<div className="md:text-xl mt-8">
							<p>
								What began as a small training initiative has grown into a
								trusted name in professional development and certification.
							</p>
							<p className="mb-6">
								Founded by industry experts who believed in practical,
								high-impact learning, we started with one goal: make quality
								training accessible and globally recognized.
							</p>
							<p>
								Over the years, we&apos;ve trained thousands of professionals,
								partnered with global organizations, and earned international
								accreditation — but our core purpose remains unchanged:
								empowering people through knowledge that works.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="main-container primary-py ">
					<Heading
						headingClassName="text-primary"
						subHeading="Know More"
						heading="More about him"
					/>
					<Timeline items={timelineItems} />
				</div>
			</section>
		</main>
	);
}
