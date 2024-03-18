"use client";
import React from "react";
import closeIcon from "@/assets/images/shared/icon-close.svg";
import ActivesidbarBtn from "./ActivesidbarBtn";
import Link from "next/link";
import { navList } from "@/constant";

type TSidebar = {
  isActive: boolean;
  setIsActive: any;
};
const Sidebar = ({ isActive, setIsActive }: TSidebar) => {
  return (
    <section
      className={
        isActive
          ? `absolute w-[60vw] right-0 z-30 top-0  h-[100dvh] bg-[#ffffff20]   space-y-8 p-4`
          : "hidden"
      }
    >
      <div className="w-full text-right ">
        <ActivesidbarBtn imgPath={closeIcon} setActiveSidebar={setIsActive} />
      </div>
      <ul className="space-y-4 text-light">
        {navList.map(({ label, path }, idx) => (
          <li key={idx}>
            <Link className="text-sm"  href={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
