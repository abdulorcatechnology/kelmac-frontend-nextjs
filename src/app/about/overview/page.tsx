import Image from "next/image";
import Button from "@/components/ui/button/Button";
import LinkButton from "@/components/ui/button/LinkButton";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import { Heading } from "@/components/ui/common/Heading";
import Counter from "@/components/ui/common/Counter";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";
import { CaseCard } from "@/components/ui/case/CaseCard";
import { caseItems } from "@/data/about";

import How_we_work from "@/app/about/overview/how-we-work";
import ExploreItems from "@/app/about/overview/explore-items";

export default function Overview() {
	return (
		<main className="main">
			<section className="bg-primary bg-[url('/images/bg/about.png')] bg-center bg-cover bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
				<div className="main-container primary-py">
					<div className="text-white md:w-[85%] lg:w-[62%]">
						<h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
							Overview
						</h1>
						<p className="md:text-xl font-inter text-capitalize mt-8">
							Kelmac Group® delivers ISO training, auditing, and consultancy
							that hard-wire good practice into everyday operations—so
							improvement lasts long after the certificate is on the wall. For
							nearly three decades, we've supported public and private
							organisations across sectors and jurisdictions, designing systems
							that reduce risk, lift capability, and drive measurable
							performance. Headquartered in Ireland, we serve clients worldwide
							through the Kelmac Group® Academy and our consulting and audit
							teams.
						</p>
					</div>
				</div>
			</section>

			<section>
				<div className="main-container primary-py">
					<Heading subHeading="About Us" heading="Who We Are" className="text-primary" />
					<p className="md:text-xl font-inter text-black text-center">
						Kelmac Group® delivers ISO training, auditing, and consultancy that
						hard-wire good practice into everyday operations—so improvement
						lasts long after the certificate is on the wall. For nearly three
						decades, we've supported public and private organisations across
						sectors and jurisdictions, designing systems that reduce risk, lift
						capability, and drive measurable performance. Headquartered in
						Ireland, we serve clients worldwide through the Kelmac Group®
						Academy and our consulting and audit teams.
					</p>
				</div>
			</section>

			<section className="rounded-3xl bg-primary overflow-hidden">
				<div className="main-container primary-py">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="md:min-h-69 p-5 rounded-[20px] bg-primary_light flex items-center justify-center">
							<Counter
								headingClassName="text-white"
								labelClassName="text-white text-lg "
								number={100}
								afterText="%"
								label="Success Rate Of Consultancy "
							/>
						</div>
						<div className="md:min-h-69 p-5 rounded-[20px] bg-primary_light flex items-center justify-center">
							<Counter
								headingClassName="text-white"
								labelClassName="text-white text-lg "
								number={99}
								afterText="%"
								label="Success Rate On CQI/IRCA Courses "
							/>
						</div>
						<div className="md:min-h-69 p-5 rounded-[20px] bg-primary_light flex items-center justify-center">
							<Counter
								headingClassName="text-white"
								labelClassName="text-white text-lg "
								number={21}
								icon={<IconPlus className="w-6 h-6" />}
								label="CQI & IRCA Certified Courses "
							/>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="main-container primary-py">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-28">
						<div className="space-y-8">
							<h3 className="font-hedvig text-[32px] text-primary">
								Our People & <br className="hidden md:block" /> Leadership
							</h3>
							<p className="md:text-lg text-black">
								We are defined by our people and are deeply committed to
								creating a diverse and inclusive culture.
							</p>
							<LinkButton
								href="about/our-founder/"
								text="Meet our leadership"
								icon={<IconArrowRight size={16} />}
								className="text-secondary hover:text-primary"
							/>
						</div>
						<div className="space-y-8">
							<h3 className="font-hedvig text-[32px] text-primary">
								Purpose, mission & <br className="hidden md:block" /> values
							</h3>
							<p className="md:text-lg text-black">
								See the guiding principles that inform our long-term strategy as
								well as how we serve our clients.
							</p>
							<div className="space-y-4">
								<LinkButton
									href="/about/mission-and-vision/"
									text="Learn about our values"
									icon={<IconArrowRight size={16} />}
									className="text-secondary hover:text-primary"
								/>
								<LinkButton
									href="/about/our-history"
									text="Explore the history of our firm"
									icon={<IconArrowRight size={16} />}
									className="text-secondary hover:text-primary"
								/>
							</div>
						</div>
						<div className="space-y-8">
							<h3 className="font-hedvig text-[32px] text-primary">
								Our Aspiration
							</h3>
							<p className="md:text-lg text-black">
								We help clients pursue sustainability, inclusion, and growth,
								all at the same time.
							</p>
							<div className="space-y-4">
								<LinkButton
									href="/about/kelmac-group"
									text="Explore a new kind of growth"
									icon={<IconArrowRight size={16} />}
									className="text-secondary hover:text-primary"
								/>
								<LinkButton
									href="/about/our-history"
									text="Explore the history of our firm"
									icon={<IconArrowRight size={16} />}
									className="text-secondary hover:text-primary"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<How_we_work />

			<section>
				<div className="primary-pt px-2">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-2">
						<div className="md:col-span-5 md:min-h-102 bg-cover bg-center bg-[url('/images/bg/secondary-white.png')] rounded-4xl overflow-hidden p-8 md:p-12">
							<h2 className="main-heading text-white mb-12 w-full flex justify-center whitespace-nowrap">
								Approved Training Partner
							</h2>
							<div className="flex items-center justify-center">
								<div className="w-full max-w-[520px]">
									<Image
										src="/images/coi-irca.png"
										alt="coi-irca"
										width={700}
										height={300}
										priority
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>
						</div>

						<div className="md:col-span-4 md:min-h-102 bg-cover bg-center bg-[url('/images/bg/secondary-white.png')] rounded-4xl overflow-hidden p-8 md:p-12">
							<h2 className="main-heading text-white text-center mb-12">
								Accreditation
							</h2>
							<div className="flex items-center justify-center">
								<div className="w-full max-w-[280px]">
									<Image
										src="/images/bbb.png"
										alt="bbb-accreditation"
										width={280}
										height={155}
										priority
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>
						</div>

						<div className="md:col-span-3 md:min-h-102 bg-cover bg-center bg-[url('/images/bg/secondary-white.png')] rounded-4xl overflow-hidden p-8 md:p-12">
							<h2 className="main-heading text-white text-center mb-12">
								Membership
							</h2>
							<div className="flex items-center justify-center">
								<div className="w-full max-w-[280px]">
									<Image
										src="/images/learnovate.png"
										alt="learnovate-membership"
										width={280}
										height={155}
										priority
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section>
				<div className="primary-py main-container">
					<Heading subHeading="Case study" heading="Featured Impact" className="text-primary" />
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{caseItems.map((blog) => (
							<CaseCard
								key={blog.id}
								id={blog.id}
								imageUrl={blog.imageUrl}
								category={blog.category}
								date={blog.date}
								title={blog.title}
								href={blog.href}
							/>
						))}
					</div>
					<div className="flex justify-center mt-12 md:mt-16">
						<Button
							className="border-primary gap-2"
							spanclassName="px-8"
							href="/course/all-courses"
							text="View all case study"
							color="white"
							iconclassName="bg-primary text-white"
							icon={<IconArrowRight />}
						/>
					</div>
				</div>
			</section>
			<ExploreItems />
			<NewsletterSection />
		</main>
	);
}
