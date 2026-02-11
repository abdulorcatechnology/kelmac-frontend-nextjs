import { Heading } from "@/components/ui/common/Heading";
import { IconTickCircle } from "@/components/icons/icons";

export default function BasicRequirements() {
    const requirementItems = [
        {
            text: "Learner Attendance: 100% attendance mandatory"
        },
        {
            text: "Learner Equipment: Each Learner must have an individual laptop, fast and reliable internet, headset or earbuds, Google Chrome 32-bit version 50 or later or Safari 10 or higher"
        },
        {
            text: "Learner Environment: Quite and free from interruptions"
        },
        {
            text: "Course Pre-Requisite Requirements: Learner must confirm they meet CQI-IRCA course pre-requisite requirements at time of booking"
        },
        {
            text: "Knowledge of CQI-IRCA Course Special Consideration Requirements and Appeals policy at time of booking"
        }
    ];

    return (
        <section className="bg-primary rounded-xl mt-12 overflow-hidden">
            <div className="main-container">
                <div className="pt-16 pb-0">
                    <Heading
                        headingClassName="text-white"
                        subHeading="Requirements"
                        heading="Basic Requirements"
                    />
                </div>

                <div className="bg-secondary/17 rounded-t-3xl p-8 md:p-20 max-w-6xl mx-auto min-h-[350px]">
                    <div className="space-y-6">
                        {requirementItems.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <IconTickCircle className="w-10 h-10 text-white mr-6 flex-shrink-0 mt-1" />
                                <p className="text-white text-xl md:text-2xl leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}