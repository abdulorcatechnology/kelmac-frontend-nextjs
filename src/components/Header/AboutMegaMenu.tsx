// components/Header/AboutMegaMenu.tsx
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, User, Clock, Users, MapPin, PlayCircle } from "lucide-react";

export default function AboutMegaMenu() {
  const buttonDivClass =
    "flex items-start gap-3 bg-white p-2 rounded-lg transition-transform transition-colors duration-500 ease-in-out hover:scale-105 hover:translate-x-1 hover:translate-y-1 hover:bg-[#DBEAFE59]";
  const textClass = "font-medium text-black";
  const descClass = "text-sm text-gray-500 mt-0.5";
  const iconClass = "w-5 h-5 text-[#6B8FD8] mt-0.5 flex-shrink-0";

  const menuItems = [
    { icon: LayoutDashboard, href: "/about/overview", title: "Overview", desc: "Please read it out" },
    { icon: LayoutDashboard, href: "/about/kelmac-group", title: "About Kelmac", desc: "Please read it out" },
    { icon: LayoutDashboard, href: "/about/mission-and-vision", title: "Our Mission & Vision", desc: "Please read it out" },
    { icon: User, href: "/about/our-founder", title: "Our Founder", desc: "Know more about him" },
    { icon: Clock, href: "/about/our-history", title: "Our History", desc: "Please read it out" },
    { icon: Users, href: "/about/our-team", title: "Our Team", desc: "Let's meet with our team" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-[550px]">

      <h3 className="text-sm font-semibold text-[#6B8FD8] mb-6 uppercase tracking-wide">About Us</h3>

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-8">

        {/* Menu Items */}
        {menuItems.slice(0, 3).map((item, i) => {
          const Icon = item.icon;
          return (
            <Link key={i} href={item.href}>
              <div className={buttonDivClass}>
                <Icon className={iconClass} />
                <div>
                  <h4 className={textClass}>{item.title}</h4>
                  <p className={descClass}>{item.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}

        {menuItems.slice(3).map((item, i) => {
          const Icon = item.icon;
          return (
            <Link key={i} href={item.href}>
              <div className={buttonDivClass}>
                <Icon className={iconClass} />
                <div>
                  <h4 className={textClass}>{item.title}</h4>
                  <p className={descClass}>{item.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}

      </div>

      {/* Offices Section */}
      <div>
        <h3 className="text-sm font-semibold text-[#6B8FD8] mb-4 uppercase tracking-wide">Our Offices</h3>
        
        <div className="flex gap-6">
          <div className="relative w-56 flex-shrink-0">
            <Image src="/images/video.png" alt="Our Offices" width={224} height={140} className="rounded-lg w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                <PlayCircle className="w-8 h-8 text-[#6B8FD8]" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">Serving customers from across the globe</p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-gray-700"><MapPin className="w-4 h-4 text-[#6B8FD8] flex-shrink-0" /> Ireland</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><MapPin className="w-4 h-4 text-[#6B8FD8] flex-shrink-0" /> United Kingdom</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><MapPin className="w-4 h-4 text-[#6B8FD8] flex-shrink-0" /> United States</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><MapPin className="w-4 h-4 text-[#6B8FD8] flex-shrink-0" /> Delhi, India</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
