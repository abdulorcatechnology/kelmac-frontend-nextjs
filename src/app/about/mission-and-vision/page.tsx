import { Heading } from "@/components/ui/common/Heading";
import { IconScreencast, IconCertificate, PersonsIcon, Lifebuoy, IconPolygon } from "@/components/icons/icons";
import NewsletterSection from "@/components/Sections/Newsletter/NewsletterSection";

export default function MissionAndVision() {
	return (
		<main className="main">
			<section className="bg-primary md:bg-[url('/images/bg/mission-and-vision.png')] bg-cover lg:bg-top md:bg-[70%_top] bg-no-repeat lg:min-h-150 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
				<div className="main-container primary-py">
					<div className="text-white md:w-[85%] lg:w-[38%]">
						<h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
							Mission ,Vision & values
						</h1>
						<p className="md:text-xl mt-8">
							Our passionate team, backed by years of diverse industry
							experience, is focused on fostering growth and achieving
							operational excellence.
						</p>
					</div>
				</div>
			</section>

			<section>
				<div className="main-container primary-py">
					<div className="grid grid-col-1 md:grid-cols-2 gap-8">
						<div className="p-8 text-white rounded-4xl overflow-hidden md:min-h-159 bg-cover bg-center bg-no-repeat bg-[url('/images/mission.png')] flex flex-col justify-end">
							<h2 className="main-heading mb-6">Our Mission</h2>
							<p className="md:text-lg">
								Our mission is to empower organizations and professionals to
								achieve certification readiness, stronger compliance, and
								measurable performance improvement through world-class ISO
								training, auditing, and consultancy. We are committed to
								developing people and building sustainable capabilities that
								last.
							</p>
						</div>
						<div className="p-8 text-white rounded-4xl overflow-hidden md:min-h-159 bg-cover bg-center bg-no-repeat bg-[url('/images/vision.png')] flex flex-col justify-end">
							<h2 className="main-heading mb-6">Our Vision</h2>
							<p className="md:text-lg">
								Our vision is to be the most trusted global partner for ISO
								training, auditing, and consultancy—recognized for making
								standards accessible, practical, and transformative. We aspire
								to shape the future of compliance and performance excellence by
								helping organizations worldwide achieve sustainable growth,
								resilience, and confidence in their management systems.
							</p>
						</div>
						<div className="col-span-2 p-8 text-white rounded-4xl overflow-hidden md:min-h-125 bg-cover bg-center bg-no-repeat bg-[url('/images/purpose.png')] flex flex-col justify-end">
							<h2 className="main-heading mb-6">Our Purpose</h2>
							<p className="md:text-lg md:w-[75%]">
								Our purpose is to make international standards meaningful and
								practical. We help organizations translate complex ISO
								requirements into everyday business practices through expert
								training, independent auditing, and hands-on consultancy. By
								doing so, we enable clients to achieve certification, strengthen
								performance, and foster cultures of continual improvement.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="rounded-3xl bg-primary overflow-hidden mb-10">
				<div className="main-container primary-py">
					<div className="text-center">
						<Heading subHeading="Values" heading="At Kelmac Group®, our values guide how we serve our clients and grow our people:" className="text-white mx-auto max-w-5xl" />
					</div>
					<div className="flex justify-center mb-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
							<div className="p-8 rounded-[20px] bg-primary_light">
								<div className="text-blue-400 mb-4">
									<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ">
										<IconPolygon
										/>
									</div>
								</div>
								<h3 className="text-white text-2xl font-semibold mb-4">Integrity</h3>
								<p className="text-white/90 text-lg">
									We Uphold The Highest Standards Of Ethics And Independence.
								</p>
							</div>

							<div className="p-8 rounded-[20px] bg-primary_light">
								<div className="text-blue-400 mb-4">
									<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ">
										<IconCertificate
											className="text-secondary" />
									</div>
								</div>
								<h3 className="text-white text-2xl font-semibold mb-4">Excellence</h3>
								<p className="text-white/90 text-lg">
									We Deliver Accredited Training And Consultancy That Create Real Impact
								</p>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="p-8 rounded-[20px] bg-primary_light">
							<div className="text-blue-400 mb-4">
								<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ">
									<PersonsIcon
										className="text-secondary" />
								</div>
							</div>
							<h3 className="text-white text-2xl font-semibold mb-4">Collaboration</h3>
							<p className="text-white/90 text-lg">
								We Partner With Clients To Co-Create Practical, Lasting Solutions.
							</p>
						</div>

						<div className="p-8 rounded-[20px] bg-primary_light">
							<div className="text-blue-400 mb-4">
								<Lifebuoy
									className="text-secondary w-6 h-6 md:w-8 md:h-8"
								/>
							</div>
							<h3 className="text-white text-2xl font-semibold mb-4">Innovation</h3>
							<p className="text-white/90 text-lg">
								We Adapt And Evolve With Global Standards And Business Needs.
							</p>
						</div>

						<div className="p-8 rounded-[20px] bg-primary_light">
							<div className="text-blue-400 mb-4">
								<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ">
									<PersonsIcon
										className="text-secondary" />
								</div>
							</div>
							<h3 className="text-white text-2xl font-semibold mb-4">Commitment to People</h3>
							<p className="text-white/90 text-lg">
								We Attract, Develop, And Retain Exceptional Professionals.
							</p>
						</div>
					</div>
				</div>
			</section>
						<NewsletterSection />

		</main>
	);
}
