"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/common/Heading";

export default function NotFoundPage() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-6 text-white text-center"
            style={{ backgroundImage: "url('/images/bg/404.png')" }}
        >
            <Heading heading="Page Not Found!" className="mb-4 mt-50" />

            <p className="font-inter-tight mb-7 max-w-lg">
                The link you followed may be broken, or the page may have been removed.
            </p>

            <Button
                size="lg"
                text="Return to Homepage"
                href="/courses"
                color="secondary"
                iconclassName="bg-white "
                icon={<IconArrowRight className="stroke-primary" />}
            />
        </section>
    );
}
