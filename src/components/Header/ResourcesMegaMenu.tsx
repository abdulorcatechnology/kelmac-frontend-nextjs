// components/Header/ResourcesMegaMenu.tsx
import Link from "next/link";
import { Rss, FileText, Video } from "lucide-react";

export default function ResourcesMegaMenu() {
  const buttonDivClass =
    "flex items-start gap-3 bg-white p-2 rounded-lg transition-transform transition-colors duration-500 ease-in-out hover:scale-105 hover:translate-x-1 hover:translate-y-1 hover:bg-[#DBEAFE59]";
  const textClass = "font-semibold text-black";
  const descClass = "text-sm text-gray-500 mt-0.5";
  const iconClass = "w-5 h-5 text-[#6B8FD8] mt-1 flex-shrink-0"; // Light blue icon

  const menuItems = [
    {
      icon: Rss,
      href: "/resources/latest-blogs",
      title: "Latest Blogs",
      desc: "Trainers with real auditing and...",
    },
    {
      icon: FileText,
      href: "/resources/white-papers",
      title: "White Papers",
      desc: "Trainers with real auditing and...",
    },
    {
      icon: Video,
      href: "/resources/webinars",
      title: "Webinars",
      desc: "Upcoming & recorded webinars",
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
                  {/* <p className={descClass}>{item.desc}</p> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
