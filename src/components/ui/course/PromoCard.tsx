import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PromoCardProps {
  backgroundImage: string;
  children: React.ReactNode;
}

function PromoCard({ backgroundImage, children }: PromoCardProps) {
  return (
    <article className="relative isolate rounded-2xl overflow-hidden h-[420px] md:h-[480px]">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        {children}
      </div>
    </article>
  );
}

function DiscountCard() {
  return (
    <PromoCard backgroundImage="/images/bg/suggested-bg-2.png">
      <div className="flex flex-col items-center gap-2 mt-auto pb-4">
        <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-balance text-white">
          20% Off
        </h2>
        <p className="text-base sm:text-lg font-medium text-white/90">
          This month only. Use Code{" "}
          <span className="font-semibold text-white">SAVE20</span>
        </p>

        <Link
          href="/apply"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-slate-900
            px-5 py-2.5 text-sm font-semibold
            hover:bg-white/90 active:scale-[0.98]
            transition-all duration-200"
        >
          <span>Apply Now</span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 shrink-0">
            <ArrowRight className="text-white" size={13} />
          </span>
        </Link>
      </div>
    </PromoCard>
  );
}

function HelpCard() {
  return (
    <PromoCard backgroundImage="/images/bg/suggested-bg-1.png">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/images/bg/question-mark.png"
          alt=""
          width={250}
          height={250}
          className="w-[190px] h-[190px] md:w-[250px] md:h-[250px] mb-2 object-contain"
        />
        <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-balance text-white">
          Need help?
        </h2>
        <p className="text-base sm:text-lg text-white/90">
          Reach us for any kind of assistance
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent text-white
            px-5 py-2.5 text-sm font-semibold
            hover:bg-white/10 active:scale-[0.98]
            transition-all duration-200"
        >
          <span>Apply Now</span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shrink-0">
            <ArrowRight className="text-slate-900" size={13} />
          </span>
        </Link>
      </div>
    </PromoCard>
  );
}

export function PromoSection() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DiscountCard />
          <HelpCard />
        </div>
      </div>
    </section>
  );
}
