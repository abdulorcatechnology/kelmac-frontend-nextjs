import { Heading } from "@/components/ui/common/Heading";
import {
  WifiIcon,
  IconMessage,
  CustomGearIcon,
} from "@/components/icons/icons";
import { Timeline } from "@/components/ui/common/Timeline";
import { timelineItems } from "@/data/about";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import Counter from "@/components/ui/common/Counter";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import How_we_work from "@/app/about/kelmac-group/how-we-work";
import {
  IconChart,
  IconMountain,
  IconConnection,
} from "@/components/icons/icons";

export default function KelmacGroup() {
  return (
    <main className="main">
      <section className="bg-primary bg-[url('/images/bg/kelmac_group.png')] bg-cover bg-center bg-no-repeat lg:min-h-128 flex flex-col items-start justify-center overflow-hidden rounded-3xl">
        <div className="main-container primary-py relative z-10">
          <div className="text-white md:w-[85%] lg:w-[62%]">
            <h1 className="text-4xl md:text-6xl font-hedvig leading-snug">
              About Kelmac Group®
            </h1>
            <p className="md:text-xl font-inter text-capitalize mt-8">
              With years of experience across various industries, our dedicated
              team is committed to driving growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="primary-py">
        {/* Heading block */}
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <Heading
            subHeading="Excellency"
            heading="Practical ISO excellence—built into how you work"
            headingClassName="text-primary"
          />
        </div>

        {/* Paragraph block */}
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="md:text-lg lg:text-xl font-inter-tight text-black text-center leading-relaxed">
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

      <section className="bg-primary rounded-3xl overflow-hidden">
        <div className="main-container primary-py">
          <Heading
            subHeading="Excellency"
            heading="What Makes Us Different"
            headingClassName="text-white"
            subHeadingClassName="text-secondary"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-primary_light rounded-3xl p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Ireland's first CQI & IRCA Approved Training Partner
              </h3>
              <p className="text-white md:text-lg leading-relaxed">
                Kelmac Group® delivers ISO training, auditing, and consultancy
                that hard-wire good practice into everyday operations—so
                improvement lasts long after the certificate is on the wall. For
                nearly three decades, we've supported public and private
                organisations across sectors and jurisdictions, designing
                systems that reduce risk, lift capability, and drive measurable
                performance. Headquartered in Ireland, we serve clients
                worldwide through the Kelmac Group® Academy and our consulting
                and audit teams.
              </p>
            </div>

            <div className="bg-primary rounded-3xl p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                What This Guarantees for You
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <WifiIcon
                    className="text-secondary flex-shrink-0 mt-1"
                    width={24}
                    height={24}
                  />
                  <p className="text-white md:text-lg">
                    Global recognition of auditor credentials through CQI & IRCA
                    Certified Training.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <IconMessage
                    className="text-secondary flex-shrink-0 mt-1"
                    width={24}
                    height={24}
                  />
                  <p className="text-white md:text-lg">
                    Consistency you can trust—curricula, exams, and Consultants
                    governed by a single assurance framework.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CustomGearIcon
                    className="text-secondary flex-shrink-0 mt-1"
                    width={24}
                    height={24}
                  />
                  <p className="text-white md:text-lg">
                    Clear progression from fundamentals to Internal and Lead
                    Auditor levels mapped to industry-accepted competence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-gray-50 primary-py rounded-3xl">
          <div className="max-w-[1100px] mx-auto px-4">
            <Heading
              subHeading="Pioneers"
              heading="Pioneers In Food Safety Auditor Training"
              headingClassName="text-primary"
              subHeadingClassName="text-primary"
            />

            <p className="mt-4 md:text-lg font-inter text-black text-center">
              From field to factory, we&apos;ve helped organisations
              professionalise food-safety auditing for nearly two decades. The
              FSSC 22000 public register lists Kelmac Group® as an approved
              provider for FSSC 22000 Internal Auditor and Lead Auditor
              training—including virtual Consultant-led options—so teams can
              build capability without compromising on recognised assurance. Our
              programs translate standards into workable controls, supplier
              oversight, and audit trails that survive real-world pressure.
            </p>

            <div className="mt-8 bg-white rounded-3xl md:p-8 shadow-sm max-w-3xl mx-auto">
              <h3
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{ color: "#6488E6" }}
              >
                What this means on the ground
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CustomGearIcon
                    className="text-primary flex-shrink-0 mt-1"
                    width={24}
                    height={24}
                  />
                  <p className="text-primary md:text-lg">
                    Courses aligned to FSSC 22000 / ISO 22000 that your
                    certification body will recognise.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <IconMessage
                    className="text-primary flex-shrink-0 mt-1"
                    width={24}
                    height={24}
                  />
                  <p className="text-primary md:text-lg">
                    Practical auditing tools for HACCP, PRPs, traceability, and
                    supplier due diligence—ready for Day 1 use.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <WifiIcon
                    className="text-primary flex-shrink-0 mt-1"
                    width={24}
                    height={24}
                  />
                  <p className="text-primary md:text-lg">
                    Delivery formats that fit your operations (on-site or live
                    virtual) without losing assessment integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/images/bg/globledelivery.png')] lg:bg-left bg-cover bg-no-repeat rounded-3xl overflow-hidden">
        <div className="main-container primary-py">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="hidden lg:block lg:col-span-5" />

            <div className="col-span-1 lg:col-span-7">
              <div className="max-w-[680px] ml-0 lg:ml-auto text-left">
                <Heading
                  subHeading="Specialty"
                  heading="Global Delivery, Local Insight"
                  headingClassName="text-white text-left"
                  subHeadingClassName="text-secondary"
                  wrapperClassName="text-left items-start"
                />

                <p className="mt-4 md:text-lg font-inter text-white/90">
                  We&apos;ve delivered projects and programmes in 46+ countries.
                  That reach matters: regulatory expectations vary, supply
                  chains cut across jurisdictions, and &apos;good practice&apos;
                  only sticks when adapted to context. Our teams combine global
                  benchmarks with sector-specific know-how—so your system is
                  compliant, and workable in your operating environment.
                </p>

                <h3 className="mt-8 text-2xl md:text-3xl font-bold text-white">
                  How Scale Becomes Value
                </h3>

                <div className="space-y-6 mt-4">
                  <div className="flex items-start gap-4">
                    <CustomGearIcon
                      className="text-secondary flex-shrink-0 mt-1"
                      width={24}
                      height={24}
                    />
                    <p className="md:text-lg text-white/80">
                      Cross-sector pattern recognition: what works in life
                      sciences, food, and public services—applied with nuance to
                      your world.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <IconMessage
                      className="text-secondary flex-shrink-0 mt-1"
                      width={24}
                      height={24}
                    />
                    <p className="md:text-lg text-white/80">
                      Transferable models: lean process maps, risk controls, and
                      audit routines reused across sites to lower time-to-value.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <WifiIcon
                      className="text-secondary flex-shrink-0 mt-1"
                      width={24}
                      height={24}
                    />
                    <p className="md:text-lg text-white/80">
                      Assured rollouts: multi-country training and audit plans
                      coordinated to certification timelines and resourcing
                      realities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="main-container primary-py">
          <Heading
            subHeading="Services"
            heading="What We Do"
            headingClassName="text-primary"
          />
          <Timeline items={timelineItems} />
        </div>
      </section>
      <How_we_work />

      <section className="rounded-3xl bg-[#F8FAFC] overflow-hidden">
        <div className="main-container primary-py">
          <div className="text-center mb-12">
            <Heading
              heading="Principles That Guide Us"
              subHeading="Excellency"
              headingClassName="text-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-8 rounded-3xl bg-white border border-secondary/30 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-[#F2F4FB] rounded-xl flex items-center justify-center">
                  <IconChart />
                </div>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Outcomes first: quality, safety, security,
                sustainability—compliance that accelerates performance, not
                paperwork.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-secondary/30 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-[#F2F4FB] rounded-xl flex items-center justify-center">
                  <IconMountain />
                </div>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Embedded & scalable: processes people actually use, owned
                locally and supported globally.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-secondary/30 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-[#F2F4FB] rounded-full flex items-center justify-center">
                  <IconConnection />
                </div>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed">
                Assurance you can trust: independent recognition via the CQI &
                IRCA ATP framework and FSSC 22000 listings; methods aligned to
                ISO 19011 good practice
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-15"></div>
      <Heading
        subHeading="Excellency"
        heading="Numbers That Matter"
        headingClassName="text-primary"
        subHeadingClassName="text-secondary"
      />

      <section className="rounded-3xl bg-primary overflow-hidden">
        <div className="main-container primary-py">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:min-h-69 p-5 rounded-[20px] bg-primary_light flex items-center justify-center">
              <Counter
                headingClassName="text-white"
                labelClassName="text-white text-lg text-center multi-line-label"
                number={46}
                afterText="+"
                label="Countries Delivered"
                subLabel="Tens Of Thousands Of Learners Supported Through The Kelmac Group® Academy"
              />
            </div>
            <div className="md:min-h-69 p-5 rounded-[20px] bg-primary_light flex items-center justify-center">
              <Counter
                headingClassName="text-white"
                labelClassName="text-white text-lg text-center multi-line-label"
                number={21}
                afterText="+"
                label="CQI & IRCA Certified Courses"
                subLabel="Across 10+ Schemes—Available Publicly Or Privately"
              />
            </div>
            <div className="md:min-h-69 p-5 rounded-[20px] bg-primary_light flex items-center justify-center">
              <Counter
                headingClassName="text-white"
                labelClassName="text-white text-lg text-center multi-line-label"
                number={24}
                afterText="/7"
                label="Operations."
                subLabel="Flexible delivery: live, Consultant-led virtual and on-site options designed for distributed teams"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6488E6] rounded-3xl overflow-hidden py-10">
        <div className="main-container">
          <Heading
            heading="Why Organisations Choose Kelmac"
            subHeading="Reasons"
            headingClassName="text-white"
            subHeadingClassName="text-white"
            dotColor="white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-18">
            {[
              {
                title: "First in Ireland.",
                text: "We hold the distinct honour of being Ireland’s first CQI & IRCA Approved Training Partner—independent recognition of rigorous course design, Consultant competence, and assessed learning.",
              },
              {
                title: "Integrated by design.",
                text: "Training, auditing, and consultancy under one roof—so insights move seamlessly from classroom to operations and into your audit programme.",
              },
              {
                title: "Practitioner-instructors.",
                text: "Your trainers are auditors and implementers. That’s why the examples land, the tools work, and the capability sticks.",
              },
              {
                title: "Sector depth.",
                text: "Food & beverage, life sciences, manufacturing, technology, and public services—patterns that transfer, nuance that matters.",
              },
              {
                title: "Delivery at scale.",
                text: "From single-site upgrades to multi-country programmes, coordinated plans, common toolkits, and predictable certification timelines.",
              },
              {
                title: "Results that endure.",
                text: "Systems that your people understand, use, and improve—that’s ISO Certification inside®.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col justify-start items-center h-70"
              >
                <h3 className="text-3xl font-semibold text-[#6488E6] font-inter-tight whitespace-nowrap mb-5 mt-5">
                  {item.title}
                </h3>
                <p className="text-black/80 text-md leading-relaxed max-w-sm ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] rounded-3xl overflow-hidden mt-10 py-10">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Heading
                heading="Get in touch with our experts team"
                subHeading="Reasons"
                headingClassName="text-black text-left mr-10"
                subHeadingClassName="text-secondary text-left"
              />
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-3 rounded-xl w-full bg-white placeholder:text-black/60"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3  rounded-xl w-full bg-white placeholder:text-black/60"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3  rounded-xl w-full bg-white placeholder:text-black/60"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className="p-3  rounded-xl w-full appearance-none bg-white placeholder:text-black/60">
                    <option>Country code</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-3  rounded-xl w-full bg-white placeholder:text-black/60"
                  />
                </div>
                <select className="p-3  rounded-md w-full appearance-none bg-white placeholder:text-black/60">
                  <option>Course</option>
                </select>
                <textarea
                  placeholder="How Can We Help?"
                  className="p-3 rounded-xl w-full h-32 bg-white placeholder:text-black/60"
                />
                <Button
                  className="border-primary gap-2"
                  spanclassName="px-8"
                  href="#"
                  text="Submit your form"
                  color="primary"
                  iconclassName="bg-white text-primary"
                  icon={<IconArrowRight />}
                />
              </form>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/bg/teamhands.png"
                alt="Team hands together"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
