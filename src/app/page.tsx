import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full h-full bg-mobile-background md:bg-tablet-background lg:bg-desktop-background bg-cover">
      <Hero/>
    </section>
  );
}
