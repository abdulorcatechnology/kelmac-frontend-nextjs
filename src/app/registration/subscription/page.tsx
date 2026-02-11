import { IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";
import { IconClock, IconGift } from "@/components/icons/icons";

interface SubscriptionPageProps {
  email?: string;
}

export default function SubscriptionPage({ email = "user@example.com" }: SubscriptionPageProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-6 text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/bg/forget-pw.png')" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center p-12">
        <div className="relative mb-4">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-semibold  mb-2" style={{ fontFamily: "'Hedvig Letters Serif', serif" }}>
          You're subscribed!
        </h1>
        <p className="text-lg  text-white mb-8 max-w-md">
          Thank you for subscribing to our newsletter.
        </p>
        <p className="text-sm text-gray-300 mb-8 max-w-md">
          We've sent a confirmation to: <span className="text-white font-semibold">{email}</span> <br />
          You'll be the first to receive our latest updates, exclusive content, and special offers.
        </p>

        <Button
          text="Return to Homepage"
          icon={<IconArrowRight className="stroke-primary" />}
          iconPosition="after"
          size="sm"
          color="secondary"
          iconclassName="bg-white"
          spanclassName="px-4 w-full text-center"
          className="w-full"
        />

        <div className="bg-white/5 rounded-lg p-8 w-full max-w-md mt-10 flex flex-col items-center">
          <h2
            className="text-xl font-semibold mb-7 text-white self-start text-left"
            style={{ fontFamily: "'Hedvig Letters Serif', serif" }}
          >
            What to expect next:
          </h2>

          <div className="space-y-4 text-gray-200 w-full">
            <div className="flex items-center space-x-3">
              <IconClock className="w-5 h-5 text-white" />
              <span>Weekly newsletters every Friday</span>
            </div>

            <div className="flex items-center space-x-3">
              <IconClock className="w-5 h-5 text-white" />
              <span>Exclusive content and early access</span>
            </div>

            <div className="flex items-center space-x-3">
              <IconGift className="w-5 h-5 text-white" />
              <span>Special offers just for subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
