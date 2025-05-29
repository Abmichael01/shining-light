'use client';

import GlidingButton from "@/components/CustomUi/GlidingButton";
import SectionPadding from "@/components/General/SectionPadding";
import { scrollToSection } from "@/lib/utils";
import React from "react";

export default function Hero() {
  return (
    <SectionPadding className="relative h-[400px] overflow-hidden flex items-center justify-center">
      <img
        src="/graduation.jpg"
        alt="graduation-pic"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="bg-black/60 absolute inset-0 size-full z-[1]"></div>
      <div className="relative z-[2] flex flex-col items-center text-center text-white  font-fancy gap-10">
        <h2 className="text-5xl font-bold">Welcome to Our Admission Center</h2>
        <GlidingButton
          onClick={() => scrollToSection("which-school")}
          className="px-10 font-semibold"
          line={false}
        >
          Apply Now
        </GlidingButton>
      </div>
    </SectionPadding>
  );
}
