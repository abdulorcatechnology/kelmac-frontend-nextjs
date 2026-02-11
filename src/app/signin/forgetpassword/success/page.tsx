"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Stepper from "@/components/ui/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/common/Heading";
import { IconCheckmarkCircle } from "@/components/icons/icons";

export default function PasswordResetSuccess() {
    const currentStep = 5;

    return (
        <main className="main">
            <section className="relative min-h-screen flex items-center justify-center p-18 rounded-3xl overflow-hidden">
                <Image
                    src="/images/bg/forget-pw.png"
                    alt="Password reset success background"
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
                            <div className="">
                                {/* Success Icon */}
                                <div className="flex justify-center">
                                    <IconCheckmarkCircle
                                        width={150}
                                        height={150}
                                        fill="#10B981"
                                        className="text-green-500"
                                    />
                                </div>

                                <div className="text-center">
                                    <Heading
                                        heading="Your password has been Successfully reset!"
                                        headingClassName="text-white mb-4"
                                    />
                                    <p className="text-white/80 text-lg font-inter mx-auto">
                                        You can now log in with your new password, and remember
                                        <br />
                                        your new password.
                                    </p>
                                </div>

                                <Button
                                    text="Back to login"
                                    icon={<IconArrowRight className="stroke-primary" />}
                                    iconPosition="after"
                                    size="sm"
                                    color="secondary"
                                    iconclassName="bg-white"
                                    spanclassName="px-4 w-full text-center"
                                    className="w-full"
                                    href="/signin"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}