import { IconArrowRight } from "@tabler/icons-react";
import { IconClock } from "@/components/icons/icons"; // ✅ your own icon import
import Button from "@/components/ui/button/Button";

export default function ThankYouPage() {
  const referenceId = "INQ-2025-5";
  const receivedOn = "Thursday, August 14, 2025";
  const department = "Customer Support";
  const responseTime = "within 24 hours";

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

        <h1 className="text-3xl font-semibold  mb-2" style={{ fontFamily: "'Hedvig Letters Serif', serif" }}>Thank you for reaching us!</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-md">
          We've received your message and will get back to you shortly.
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
          <h2 className="text-xl font-semibold mb-4 text-white">Your Message Details:</h2>
          <div className="space-y-2 text-gray-200 mb-6 w-full">
            <div className="flex justify-between">
              <span>Reference #:</span>
              <span>{referenceId}</span>
            </div>
            <div className="flex justify-between">
              <span>Received on:</span>
              <span>{receivedOn}</span>
            </div>
            <div className="flex justify-between">
              <span>Department:</span>
              <span>{department}</span>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white text-blue-500 rounded-full px-4 py-3 shadow-lg w-full">
            <IconClock width={20} height={20} className="mr-2 text-blue-500" />
            <span>Expected response time: {responseTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
