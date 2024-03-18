import Image from "next/image";
import React from "react";
import mars from '@/assets/images/destination/image-mars.png'
import { DestionationDetails } from "@/components";

const Destination = () => {
  return (
    <section className="w-full h-full bg-background-destination-mobile sm:bg-background-destination-tablet lg:bg-background-destination-desktop bg-cover flex flex-col justify-end gap-10 p-[10%] ">
        {" "}
        <h1 className="text-light my-4">01 PICK YOUR DESTINATION</h1>
      <section className="grid grid-cols-1 lg:grid-cols-2  text-light">
        <div>
          <Image
          src={mars}
          alt=""
          width={0}
          height={0}
          className=""
          />
        </div>
        <DestionationDetails/>
      </section>
    </section>
  );
};

export default Destination;
