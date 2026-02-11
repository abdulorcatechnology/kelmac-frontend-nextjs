import SidebarDashboard from "@/components/dashboard/SidebarDashboard";
import React from "react";
// import "@/app/dashboard/dashboard.css";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex w-full">
        <SidebarDashboard />
        {children}
      </div>
    </>
  );
}

export default Layout;
