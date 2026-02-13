"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";
import LinkButton from "@/components/ui/button/LinkButton";
import { Heading } from "@/components/ui/common/Heading";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/store/api/authApi";

export default function SignInForm() {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await loginUser({ email: email, password: password }).unwrap();
      router.push("/dashboard/classes");
    } catch (err: any) {
      console.log("Login error:", err);
    }
  };

  return (
    <main className="main">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-18 rounded-3xl overflow-hidden">
        <Image
          src="/images/bg/sign-in.png"
          alt="Sign in background"
          fill
          className="object-cover"
          priority
          quality={85}
        />

        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="relative z-10 w-full max-w-md space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center">
            <Heading
              subHeading=""
              heading="Sign In"
              headingClassName="text-white"
            />
          </div>

          <p className="text-white/80 text-base text-center font-inter -mt-2">
            Welcome back! Please enter your details.
          </p>

          <div className="border-b-2 border-gray-400 border-dashed w-4/5 mx-auto"></div>

          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium font-inter"
              >
                Email*
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 font-inter focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-white text-sm font-medium font-inter"
              >
                Password*
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 font-inter focus:outline-none focus:ring-2 focus:ring-secondary [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                  required
                  autoComplete="off"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors z-10"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-start">
              <LinkButton
                href="/signin/forgetpassword/stepone"
                text="Forget Password?"
                className="text-white text-sm font-medium font-inter underline hover:text-secondary"
              />
            </div>

            <Button
              text="Sign in"
              icon={<IconArrowRight className="stroke-primary" />}
              iconPosition="after"
              size="sm"
              color="secondary"
              iconclassName="bg-white"
              spanclassName="px-4 w-full text-center"
              className="w-full"
            />
          </form>

          <p className="text-white text-sm text-center font-inter">
            Have issue with sign in?{" "}
            <Link
              href="/contact-us"
              className="underline hover:text-secondary transition-colors"
            >
              Contact Us
            </Link>
            <span className="text-secondary">.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
