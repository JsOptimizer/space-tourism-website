"use client";
import { ActivesidbarBtn, Navbar, Sidebar } from "@/components";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/shared/logo.svg";
import hamburgIcon from "@/assets/images/shared/icon-hamburger.svg";
import { useActivation } from "@/hook";

const Header = () => {
  const { isActive, setIsActive } = useActivation();
  return (
    <header className="w-full absolute  p-4 sm:p-0 lg:py-8 lg:pl-8   flex justify-between items-center">
      <div className="lg:w-1/4">
        <Image
          src={logo}
          width={0}
          height={0}
          alt="logo"
          className="w-10 h-10"
        />
      </div>
      <div className="lg:w-1/4 relative left-10">
        <hr />
      </div>
      <div className="">
        <Navbar />
        {!isActive && (
          <ActivesidbarBtn
            imgPath={hamburgIcon}
            setActiveSidebar={setIsActive}
          />
        )}
        {/* Mobile sidebar */}
        <Sidebar isActive={isActive} setIsActive={setIsActive} />
      </div>
    </header>
  );
};

export default Header;
