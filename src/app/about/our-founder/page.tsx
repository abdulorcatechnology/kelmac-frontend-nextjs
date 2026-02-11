import Button from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/common/Heading";
import Image from "next/image";
import { IconArrowRight } from "@/components/icons/icons";

export default function OurFoudner() {
	return (
		<main className="main">
			<section className="bg-primary md:bg-[url('/images/bg/our-founder.png')] bg-cover lg:bg-top md:bg-[70%_top] bg-no-repeat lg:min-h-150 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
				<div className="main-container primary-py">
					<div className="text-white md:w-[85%] lg:w-[68%]">
						<Image
							className="mb-5 md:hidden"
							width={500}
							height={100}
							src={"/images/profiles/gerald-hotshot.png"}
							alt={"gerald"}
						/>
						<h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
							Gerard Kelly
						</h1>
						<h6 className="text-3xl mt-2">Founder &CEO</h6>
						<p className="md:text-xl font-inter text-capitalize mt-8">
							Gerard Kelly is a global authority on management systems and a
							visionary who has reshaped how organizations worldwide approach
							training, auditing, and consultancy. With over three decades of
							international leadership, Gerard has set benchmarks that continue
							to influence industries, regulators, and professionals across
							continents. In 1994, Gerard founded the Kelmac Group® Academy,
							establishing what remains one of the world&apos;s most
							comprehensive and respected ISO auditor training curricula.
							Covering standards from ISO 9001 and ISO 14001 to ISO 13485,
							ISO/IEC 27001, and FSSC 22000, the curriculum—entirely designed by
							Gerard—stands unmatched in its breadth, depth, and global
							recognition.
						</p>
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
					<div className="rounded-4xl md:p-12 p-6 bg-white space-y-4 md:text-xl font-medium">
						<p>
							Gerard&apos;s expertise spans more than 40 countries, where he has
							advised leading multinationals, regulatory agencies, and
							certification bodies. His work has advanced compliance,
							performance, and resilience in sectors as diverse as food and
							beverages, life sciences, aviation, medical technology, and
							information security. His influence extends beyond boardrooms and
							training rooms—shaping policy, guiding regulators, and mentoring
							thousands of professionals worldwide.
						</p>
						<p>
							As a thought leader and author, Gerard co-authored the{" "}
							<span className="text-secondary">
								IFC World Bank Food Safety Handbook (2020 Edition)
							</span>
							, a globally cited resource that continues to guide food
							businesses in protecting public health and meeting international
							standards.
						</p>
						<p>
							At the core of Gerard&apos;s career is a belief that standards are
							not just rules—they are catalysts for excellence. His life&apos;s
							work has been to make standards practical, accessible, and
							transformative. Today, his vision lives on in the global impact of
							Kelmac Group®, the tens of thousands of professionals he has
							trained, and the enduring trust placed in him by some of the
							world&apos;s most respected organizations.
						</p>
					</div>
				</div>
			</section>

			<section>
				<div className="main-container primary-py">
					<Heading
						headingClassName="text-primary"
						subHeading="Message"
						heading="Founder's Publications"
					/>
					<div className="rounded-4xl md:p-12 p-6 bg-primary flex flex-col lg:flex-row gap-8 items-center">
						<Image
							width={350}
							height={441}
							src={"/images/books/food-safety-handbook.png"}
							alt={"food-safety"}
						/>
						<div className="text-white">
							<h2 className="text-3xl md:text-4xl leading-normal mb-6">
								Food Safety Handbook: A Practical Guide for Building a Robust
								FSMS
							</h2>
							<ul className="space-y-2 md:text-xl mb-4">
								<li>
									Publisher: International Finance Corporation (World Bank
								</li>
								<li>Year: 2020</li>
							</ul>
							<div className="mb-6">
								<h6 className="font-semibold text-2xl">
									Gerard&apos;s contribution
								</h6>
								<p>
									Drawing on decades of audit and training experience, Gerard
									supported development of practical guidance, examples, and
									usable tools that help organizations translate standards into
									daily practice—whether they're SMEs or multinational
									operations.
								</p>
							</div>
							<Button
								iconclassName="bg-primary"
								spanclassName="px-4"
								className="gap-1"
								href="/courses"
								text="Read the book"
								color="white"
								icon={<IconArrowRight className="text-white" />}
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
