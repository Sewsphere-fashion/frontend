"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container mx-auto gap-20 px-6 mb-12 mt-24 grid md:grid-cols-2 items-center">
      {/* Text Section */}
      <div className="">
        <h1 className="text-[#181818] text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] font-semibold mb-4 leading-tight">
          Custom Fashion You Can Trust.
        </h1>
        <p className="text-[#1A1A1A] text-[18px] mb-6">
          SewSphere connects clients with verified fashion designers for
          seamless custom and ready-made outfits. -Nigeria First, Diaspora Next.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a href="#waitlist">
            <Button className="bg-primary text-white px-8 py-6 rounded-md w-full">
              Join the Waitlist
            </Button>
          </a>

          <a href="#how">
            <Button className="border border-primary text-primary bg-transparent hover:text-white px-8 py-6 w-full rounded-md">
              See How It Works
            </Button>
          </a>
        </div>
      </div>

      {/* Phone Mockups */}
      <div className="flex justify-center items-center gap-4 w-full lg:w-[500px] lg:h-[500px]">
        <motion.img
          src="/images/mockImg1.svg"
          alt="Left mockup"
          className="w-[170px] sm:w-full h-[350px] sm:h-full object-contain"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src="/images/mockImg2.svg"
          alt="Right mockup"
          className="w-[170px] sm:w-full h-[350px] sm:h-full object-contain"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </section>
  );
}
