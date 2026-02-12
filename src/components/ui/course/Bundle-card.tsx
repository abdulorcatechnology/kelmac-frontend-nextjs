"use client";

import { Tag, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import { IconArrowRight } from "@/components/icons/icons";

type BundleOffer = {
  id: number;
  name: string;
  label: string;
};

const bundleOffers: BundleOffer[] = [
  { id: 1, name: "ISO 9001:2015", label: "Quality Management System" },
  { id: 2, name: "ISO 14001:2015", label: "Environmental Management System" },
  { id: 3, name: "ISO 45001:2018", label: "Occupational Health & Safety" },
];

function BundleItem({ offer }: { offer: BundleOffer }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl bg-slate-800/60 border border-white/5
        px-5 py-3 sm:px-5 sm:py-4
        transition-colors duration-200 hover:bg-slate-800/90"
    >
      <span
        className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 shrink-0"
        aria-hidden="true"
      >
        <Check className="text-emerald-400" size={12} strokeWidth={3} />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm sm:text-base font-semibold text-white leading-tight">
          {offer.name}
        </span>
        <span className="text-xs text-slate-400 leading-tight">
          {offer.label}
        </span>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-baseline gap-2.5">
        <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          $1,199
        </span>
        <span className="text-base sm:text-lg text-slate-500 line-through">
          $1,497
        </span>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1.5">
        <Tag className="text-amber-400" size={13} />
        <span className="text-xs sm:text-sm font-semibold text-amber-400">
          Save $298
        </span>
      </span>
    </div>
  );
}

export function BundleCard() {
  return (
    <div
      className="group  rounded-2xl sm:rounded-3xl overflow-hidden text-white
                min-h-[420px] sm:min-h-[480px] md:min-h-[520px]
                flex flex-col justify-between
                shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]
                hover:shadow-[0_20px_40px_0_rgba(100,136,230,0.3)]
                transition-shadow duration-300"
    >
      <div className="flex flex-col px-5 py-6 sm:px-7 sm:py-8 gap-5 sm:gap-6">
        {/* Header */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-balance">
            Bundle Offer
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Get certified across all three ISO standards and save.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10" aria-hidden="true" />

        {/* Bundle list */}
        <div className="flex flex-col gap-2.5">
          {bundleOffers.map((offer) => (
            <BundleItem key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10" aria-hidden="true" />

        {/* Pricing */}
        <PricingSection />

        {/* CTA */}
        <Button
          className="w-full"
          iconclassName="bg-primary"
          spanclassName="px-4 w-full text-center"
          href={`/`}
          text="Enroll Now"
          color="white"
          size="sm"
          icon={<IconArrowRight className="stroke-white" />}
        />
      </div>
    </div>
  );
}
