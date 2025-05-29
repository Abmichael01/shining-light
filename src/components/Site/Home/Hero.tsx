"use client";

import GlidingButton from "@/components/CustomUi/GlidingButton";
import SectionPadding from "@/components/General/SectionPadding";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Records from "./Records";

const heroContents = [
  {
    image: "/hero1.jpg",
    heading: "Welcome To Shining Light Academy",
    paragraph:
      "Empowering young minds through quality education, discipline, and excellence in a nurturing environment.",
  },
  {
    image: "/hero2.jpg",
    heading: "Excellence In Education",
    paragraph:
      "We provide world-class education rooted in moral values, preparing students for future success and leadership.",
  },
  {
    image: "/hero3.jpg",
    heading: "A Legacy Of Success",
    paragraph:
      "For over two decades, our institution has produced outstanding scholars known for integrity and excellence.",
  },
  {
    image: "/hero4.jpg",
    heading: "Modern Learning Environment",
    paragraph:
      "Equipped classrooms, labs, and libraries ensure students get the best tools for effective learning.",
  },
];

const TextSplit = () => {};

const records = [];

export default function Hero() {
  const [current, setCurrent] = useState<number>(0);

  // Auto rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroContents.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Animate image on change
  useEffect(() => {
    gsap.fromTo(".hero-image", { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(".hero-image", { scale: 1 }, { scale: 1.2, duration: 10 });
    gsap.fromTo(".heading", { x: -200 }, { x: 0, duration: 0.8 });
    gsap.fromTo(".paragraph", { opacity: 0 }, { opacity: 1, duration: 1.2 });
  }, [current]);

  // Manual Navigation Handlers
 

  return (
    <SectionPadding className="relative h-[500px] w-full flex items-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroContents[current].image}
          alt="hero image"
          className="w-full h-full object-cover object-center mask-circle hero-image opacity-0"
        />
      </div>
      <div className="absolute z-[1] inset-0 size-full bg-gradient-to-r from-primary from-2% to-primary/10"></div>
      <div className="relative z-[2] space-y-5 sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] text-white">
        <h1 className="text-4xl md:text-5xl font-fancy font-bold leading-tight heading">
          {heroContents[current].heading}
        </h1>
        <p className="text-sm paragraph">{heroContents[current].paragraph}</p>
        <div className="flex gap-5">
          <GlidingButton className="bg-secondary">ENROLL NOW</GlidingButton>
          <GlidingButton>TAKE A VIRTUAL TOUR</GlidingButton>
        </div>
      </div>
      <Records />
    </SectionPadding>
  );
}
