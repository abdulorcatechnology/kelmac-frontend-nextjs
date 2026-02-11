'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button/Button';
import { Heading } from '@/components/ui/common/Heading';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { IconCheckmarkCircle } from "@/components/icons/icons";

export default function MeetingConfirmed() {
  return (
    <main className="main">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-18 rounded-3xl overflow-hidden">
        <Image
          src="/images/bg/sign-in.png"
          alt="Meeting confirmed background"
          fill
          className="object-cover"
          priority
          quality={85}
        />

        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="relative z-10 w-full max-w-2xl text-center">
          <div className="flex justify-center mb-0">
            <IconCheckmarkCircle
              width={150}
              height={150}
              fill="#10B981"
              className="text-green-500"
            />
          </div>

          <Heading
            heading="Your Meeting is Confirmed"
            headingClassName="text-white text-4xl md:text-5xl mb-6"
            wrapperClassName="justify-center mb-0"
          />

          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-xl mx-auto font-inter">
            Thank you for scheduling with us. A confirmation email has been sent to your inbox with all the details.
            We look forward to connecting with you!
          </p>

          <h2 className="text-2xl md:text-3xl font-hedvig text-white mb-8">
            Want to learn more before our call?
          </h2>

          <div className="flex justify-center mb-8">
            <Button
              text="Explore our Services"
              icon={<IconArrowRight className="stroke-primary" />}
              iconPosition="after"
              size="lg"
              color="secondary"
              href="/corporate"
              spanclassName="px-6"
              iconclassName="bg-white"
            />
          </div>

          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-secondary font-medium group"
          >
            Return to Home
            <IconArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}