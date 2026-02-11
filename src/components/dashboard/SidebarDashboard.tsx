"use client";

import { GetUserRoleName } from "@/lib/getUserRoleName";
import { array } from "@/lib/sidebarJson";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SidebarDashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state: any) => state.auth);
  const { user } = auth;
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const pathName = usePathname();

  return (
    <div className="w-64 h-100vh bg-gray-800 text-white flex flex-col shadow-lg">
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-4">
          {array
            .filter((item: any) =>
              item.role.includes(
                GetUserRoleName(user?.role?._id || user?.role?.id)
              )
            )
            .map((item, index) => (
              <li key={`route-${index}`} className="relative">
                <Link
                  href={item?.path || "#"}
                  className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition-colors ${
                    pathName === item.path ? "bg-gray-700 font-semibold" : ""
                  }`}
                  onClick={() =>
                    setOpenSubMenu((prev) =>
                      prev === `item-${index}` ? null : `item-${index}`
                    )
                  }
                >
                  <span className="w-5 h-5">{item.svg}</span>
                  <span>{item.name}</span>
                </Link>

                {/* Submenu placeholder */}
                {/* Uncomment and style if you have nested items */}
                {/* <ul
                  className={`pl-6 mt-1 space-y-1 ${
                    openSubMenu === `item-${index}` ? "block" : "hidden"
                  }`}
                >
                  <li>Subitem</li>
                </ul> */}
              </li>
            ))}

          {/* Logout Button */}
          <li className="mt-6">
            <Link
              href="/login"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
