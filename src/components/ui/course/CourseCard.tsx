"use client";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import {
  IconClockHour3Filled,
  IconBookFilled,
  IconUsersGroup,
  IconArrowRight,
} from "@tabler/icons-react";

export type CourseCardProps = {
  id?: number;
  category: string;
  title: string;
  description: string;
  hours: string;
  lessons: number;
  mode: string;
  imageUrl: string;
  certificates?: string[];
  showButton?: boolean;
  showCertificates?: boolean;
  height?: string;
  slug?: string;
};

export function CourseCard({
  category,
  title,
  description,
  hours,
  lessons,
  mode,
  imageUrl,
  certificates = [],
  showButton = true,
  showCertificates = true,
  height = "min-h-138",
  slug,
}: CourseCardProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden bg-primary text-white ${height} flex items-end shadow-[0_15px_30px_0_rgba(255,255,255,0.1)] hover:shadow-[15px_30px_30px_10px_rgba(100,136,230,0.5)] transition-shadow duration-300`}
    >
      <Image
        // src={imageUrl ? imageUrl : "/images/course.png"}
        src={"/images/course.png"}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute w-full h-[80%]">
        <Image
          src="/images/designs/course-blur-2.png"
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <span className="absolute top-5 left-4 bg-white/60 text-primary rounded-full px-3 py-2 inline-flex items-center justify-center gap-2 font-medium">
        <span className="w-[6px] h-[6px] bg-primary rounded-full inline-block"></span>
        {category}
      </span>

      <div className="relative z-10 px-4 py-5 space-y-4 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
        <p className="text-sm leading-relaxed">{description}</p>

        <div className="flex items-center gap-6 text-sm font-medium flex-wrap">
          <div className="flex items-center gap-2">
            <IconClockHour3Filled className="text-secondary" size={32} />
            <span className="space-x-1">
              <span className="text-lg">{hours}</span>
              <span className="text-[#DBEAFE]/98 font-normal text-[10px]">
                Hours
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <IconBookFilled className="text-secondary" size={32} />
            <span className="space-x-1">
              <span className="text-lg">{lessons}</span>
              <span className="text-[#DBEAFE]/98 font-normal text-[10px]">
                Lessons
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <IconUsersGroup className="text-secondary" size={32} />
            <span className="text-lg">{mode}</span>
          </div>
        </div>

        {showCertificates && certificates.length > 0 && (
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {certificates.map((certificate, index) => (
              <Image
                src={certificate}
                alt="certificate"
                width={165}
                height={39}
                className="object-contain"
                key={index}
              />
            ))}
          </div>
        )}

        {showButton && (
          <Button
            className="w-full"
            iconclassName="bg-primary"
            spanclassName="px-4 w-full text-center"
            href={`/course/${slug}`}
            text="Enroll Now"
            color="white"
            size="sm"
            icon={<IconArrowRight className="stroke-white" />}
          />
        )}
      </div>
    </div>
  );
}
