"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Eye, EyeOff } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";
import Stepper from "@/components/ui/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/common/Heading";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password submitted:", password, confirmPassword);
  };

  const currentStep = 4;

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
                    heading="Create a new password"
                    headingClassName="text-white mb-4"
                  />
                  <p className="text-white/80 text-lg md:text-1xl font-inter mx-auto">
                    Set your new password with minimum 8 characters with a combination of letters and numbers
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-white font-medium font-inter">
                      New Password*
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full pl-12 pr-12 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 font-inter focus:outline-none focus:ring-2 focus:ring-secondary [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                        aria-label="Password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors z-10"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="confirmPassword" className="block text-white font-medium font-inter">
                      Confirmation New Password*
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                        className="w-full pl-12 pr-12 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 font-inter focus:outline-none focus:ring-2 focus:ring-secondary [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                        aria-label="Confirm Password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors z-10"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    text="Submit"
                    icon={<IconArrowRight className="stroke-primary" />}
                    iconPosition="after"
                    size="sm"
                    color="secondary"
                    iconclassName="bg-white"
                    spanclassName="px-4 w-full text-center"
                    className="w-full"
                    href="/signin/forgetpassword/success"

                  />
                </form>       
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}