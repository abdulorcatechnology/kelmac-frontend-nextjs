"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Stepper from "@/components/ui/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/common/Heading";

export default function ResetPassword() {
  const currentStep = 3;
  const [code, setCode] = useState(["", "", "", ""]);
  const userEmail = "tahsankhan380@gmail.com";

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value.replace(/\D/, "");
    const newCode = [...code];
    newCode[idx] = value;
    setCode(newCode);

    if (value && idx < inputRefs.length - 1) {
      inputRefs[idx + 1].current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace") {
      if (code[idx]) {
        const newCode = [...code];
        newCode[idx] = "";
        setCode(newCode);
      } else if (idx > 0) {
        inputRefs[idx - 1].current?.focus();
        const newCode = [...code];
        newCode[idx - 1] = "";
        setCode(newCode);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted code:", code.join(""));
  };

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
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12">
            <Stepper currentStep={currentStep} />

            <div className="flex-1 w-full lg:ml-8">
              <div className="space-y-8">
                <div className="text-center">
                  <Heading
                    subHeading=""
                    heading="Enter confirmation code"
                    headingClassName="text-white mb-4"
                  />
                  <p className="text-white/80 text-lg font-inter mx-auto mb-2">
                    We have sent a verification code to email address
                  </p>
                  <p className="text-white font-inter">
                    {userEmail}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex justify-center gap-4 w-full">
                    {code.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        ref={inputRefs[idx]}
                        className="w-14 h-14 text-center text-xl font-inter rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                      />
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      text="Submit"
                      icon={<IconArrowRight className="stroke-primary" />}
                      iconPosition="after"
                      size="sm"
                      color="secondary"
                      iconclassName="bg-white"
                      spanclassName="px-4 w-full text-center"
                      className="w-full"
                      href="/signin/forgetpassword/stepfour"
                    />
                  </div>
                </form>

                <div className="text-center">
                  <p className="text-white text-lg font-inter">
                    Didn't received the email?{" "}
                    <Link
                      href="/signin/forgetpassword/stepone"
                      className="text-white font-semibold underline hover:text-secondary transition-colors"
                    >
                      Resend
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