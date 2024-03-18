import { navList } from "@/constant";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden sm:block  bg-[#ffffff20] font-barlow lg:px-10  text-light justify-center">
      <ul className="flex">
        {navList.map(({ label, path }, idx) => (
          <li className="px-4  mx-2 lg:px-8 py-6 hover:border-b-2" key={idx}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
