// components/Header/CorporateMegaMenu.tsx
import Link from "next/link";
import { LayoutDashboard, FileCheck, Briefcase, BookOpen } from "lucide-react";

export default function CorporateMegaMenu() {
  const buttonDivClass =
    "flex items-start gap-3 bg-white p-2 rounded-lg transition-transform transition-colors duration-500 ease-in-out hover:scale-105 hover:translate-x-1 hover:translate-y-1 hover:bg-[#DBEAFE59]";
  const textClass = "font-semibold text-black";
  const descClass = "text-sm text-gray-500 mt-0.5";
  const iconClass = "w-5 h-5 text-[#6B8FD8] mt-1 flex-shrink-0";

  const menuItems = [
    {
      icon: LayoutDashboard,
      href: "/corporate",
      title: "Overview",
      desc: "More about",
    },
    {
      icon: FileCheck,
      href: "/corporate/auditing",
      title: "Auditing",
      desc: "Trainers with real auditing and...",
    },
    {
      icon: Briefcase,
      href: "/corporate/consulting",
      title: "Consulting",
      desc: "Courses are updated to reflect...",
    },
    {
      icon: BookOpen,
      href: "/corporate/learning",
      title: "Learning",
      desc: "Designed for quality managers...",
    },
  ];

  return (
    <div className="p-6 w-[320px]">
      <ul className="space-y-4">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <li key={i}>
              <div className={buttonDivClass}>
                <Icon className={iconClass} />
                <div>
                  <Link href={item.href} className={textClass}>
                    {item.title}
                  </Link>
                  <p className={descClass}>{item.desc}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
