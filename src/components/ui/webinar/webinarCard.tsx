import Image from 'next/image';
import Link from 'next/link';
import { IconCalendar } from "@/components/icons/icons";

interface WebinarCardProps {
    id: string;
    title: string;
    instructor: {
        name: string;
        avatar: string;
    };
    date: string;
    category: string;
    backgroundImage: string;
    slug: string;
}

export default function WebinarCard({
    title,
    instructor,
    date,
    category,
    backgroundImage,
    slug,
}: WebinarCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        return { month, day };
    };

    const { month, day } = formatDate(date);

    return (
        <Link
            href={`/webinars/${slug}`}
            aria-label={`View details for ${title}`}
            className="block"
        >
            <div className="relative h-[600px] rounded-2xl transition-all duration-500 hover:shadow-[15px_30px_30px_10px_rgba(100,136,230,0.5)] bg-primary isolate">
                <Image
                    src={backgroundImage}
                    alt={`Webinar background for ${title}`}
                    fill
                    className="object-cover rounded-2xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/100 via-primary/40 to-transparent rounded-2xl" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 lg:p-9">
                    <div className="self-start">
                        <div className="bg-white rounded-md px-4 py-3 shadow-lg">
                            <div className="flex items-center justify-center mb-1">
                                <IconCalendar width={28} height={28} />
                            </div>
                            <div className="text-center font-semibold text-primary">
                                <div className="text-2xl">{month}</div>
                                <div className="text-3xl">{day}</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-[#DBEAFE] rounded-md px-4 py-2 shadow-sm">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm font-medium text-primary">
                                {category}
                            </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-inter-tight text-white leading-tight">
                            {title}
                        </h3>

                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white">
                                <Image
                                    src={instructor.avatar}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-white font-medium underline">
                                {instructor.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
