"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Stepper from "@/components/ui/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/common/Heading";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const currentStep = 2;

    const handleOpenGmail = () => {
        window.open("https://mail.google.com", "_blank");
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
                                        heading="Check your email"
                                        headingClassName="text-white mb-4"
                                    />
                                    <p className="text-white/80 text-lg font-inter mx-auto">
                                        We sent a password reset link to your email. Please check your inbox.
                                    </p>
                                </div>

                                <Button
                                    text="Open Gmail"
                                    icon={<IconArrowRight className="stroke-primary" />}
                                    iconPosition="after"
                                    size="sm"
                                    color="secondary"
                                    iconclassName="bg-white"
                                    spanclassName="px-4 w-full text-center"
                                    className="w-full"
                                    onClick={handleOpenGmail}
                                    href="/signin/forgetpassword/stepthree"
                                />

                                <div className="text-center">
                                    <p className="text-white text-lg font-inter">
                                        Didn't receive the email?{" "}
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