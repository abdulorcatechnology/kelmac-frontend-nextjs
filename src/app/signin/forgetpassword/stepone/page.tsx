"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";
import Stepper from "@/components/ui/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/common/Heading";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const currentStep = 1;

  return (
    <main className="main">
      <section className="relative min-h-screen flex items-center justify-center p-18 rounded-3xl overflow-hidden">
        <Image
          src="/images/bg/forget-pw.png"
          alt="Reset password background"
          fill
          className="object-cover"
          priority
          quality={85}
        />

        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12">
            <Stepper currentStep={currentStep} />

            <div className="flex-1 w-full lg:ml-8">
              <div className="space-y-8">
                <div className="lg:ml-4" style={{ maxWidth: "520px" }}>
                  <div className="text-center">
                    <Heading
                      subHeading=""
                      heading="Reset Your Password?"
                      headingClassName="text-white mb-6"
                    />
                  </div>
                  <p className="text-white/80 text-lg font-inter mb-6 text-center">
                    Enter your email for instructions.
                  </p>
                  <div className="border-b-2 border-gray-400 border-dashed mt-4 mb-8 w-[95%]"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-white font-medium font-inter">
                      Email*
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 font-inter focus:outline-none focus:ring-2 focus:ring-secondary"
                        aria-label="Email address"
                      />
                    </div>
                  </div>

                  <Button
                    text="Get 4-digit code"
                    icon={<IconArrowRight className="stroke-primary" />}
                    iconPosition="after"
                    size="sm"
                    color="secondary"
                    iconclassName="bg-white"
                    spanclassName="px-4 w-full text-center"
                    className="w-full"
                    href="/signin/forgetpassword/steptwo"
                  />
                </form>

                {/* Sign In Link */}
                <div className="text-center lg:text-left">
                  <p className="text-white text-lg font-inter text-center">
                    Remember the password?{" "}
                    <Link
                      href="/signin"
                      className="text-white font-semibold underline hover:text-secondary transition-colors"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}