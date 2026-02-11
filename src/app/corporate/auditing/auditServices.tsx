import Head from "next/head";
import { Heading } from "@/components/ui/common/Heading";
import Image from "next/image";

interface AuditService {
    id: number;
    title: string;
    imageUrl: string;
}

interface AuditServiceCardProps {
    service: AuditService;
    className?: string;
}

export function AuditServiceCard({ service, className = "" }: AuditServiceCardProps) {
    return (
        <div className={`relative min-h-[600px] rounded-3xl overflow-hidden text-white flex items-center justify-center ${className}`}>
            <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover rounded-3xl"
            />

            <div className="absolute inset-0 flex flex-col justify-end items-center p-6 md:p-5 lg:p-2 z-10">
                <Heading
                    heading={service.title}
                    className="text-3xl lg:text-3xl leading-snug text-center text-balance break-words whitespace-normal max-w-[85%] mx-auto"
                />

            </div>
        </div>
    );
}

export function AuditServicesGrid() {
    const auditServices: AuditService[] = [
        {
            id: 1,
            title: "Gap Assessments/Pre-Assessments",
            imageUrl: "/images/bg/auditing-1.png"
        },
        {
            id: 2,
            title: "Internal Audits",
            imageUrl: "/images/bg/auditing-2.png"
        },
        {
            id: 3,
            title: "Supply Chain Audits",
            imageUrl: "/images/bg/auditing-3.png"
        },
        {
            id: 4,
            title: "Compliance/Regulatory Readiness Audits",
            imageUrl: "/images/bg/auditing-4.png"
        },
        {
            id: 5,
            title: "People And Culture Audits",
            imageUrl: "/images/bg/auditing-5.png"
        },
        {
            id: 6,
            title: "Emergency Preparedness & Response/Crisis Management Audits",
            imageUrl: "/images/bg/auditing-6.png"
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditServices.map((service) => (
                <AuditServiceCard
                    key={service.id}
                    service={service}
                />
            ))}
        </div>
    );
}