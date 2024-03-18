import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col justify-evenly items-center lg:justify-between lg:items-end lg:flex-row  text-light p-[12%]">
      <div className="space-y-4">
        <p className="text-secondary text-center lg:text-left opacity-50 capitalize lg:text-xl">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="font-bellefaire text-center text-5xl lg:text-9xl"> SPACE</h1>
        <p className="text-center text-xs lg:text-left lg:text-sm text-secondary opacity-50">
          Let’s face it; if you want to go to space, you might as well
          <br /> genuinely go to outer space and not hover kind of on the
          <br />
          edge of it. Well sit back, and relax because we’ll give you
          <br />a truly out of this world experience!
        </p>
      </div>
      <div className="bg-light text-primary  font-barlow w-20 h-20 p-20 text-2xl rounded-full flex items-center justify-center">
        EXPLORE
      </div>
    </section>
  );
};

export default Hero;
