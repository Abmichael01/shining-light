import SectionPadding from "@/components/General/SectionPadding";
import Link from "next/link";
import React from "react";

const schools = [
  {
    name: "Pre-School",
    img: "/pre-school.jpg",
  },
  {
    name: "Junior School",
    img: "/junior-school.jpg",
  },
  {
    name: "Senior School",
    img: "/senior-school.jpg",
  },
];

export default function Schools() {
  return (
    <SectionPadding className="space-y-10 flex flex-col items-center mt-[150px]">
        <h2 className="text-lg px-10 py-2 border-2 border-secondary text-secondary border-dashed">Our Schools</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-20  w-full">
        {schools.map((school, index) => (
          <div key={index} className="space-y-5">
            <div className="w-full h-[300px] sm:h-[400px] bg-primary overflow-hidden rounded-xl border shadow-xl relative">
              <img
                src={school.img}
                alt={school.name}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary flex flex-col justify-end text-center py-5">
                <h2 className="font-bold text-2xl text-center text-white font-fancy">
                  {school.name}
                </h2>
              </div>
            </div>
            <div className="text-center w-full flex flex-col gap-3">
              <Link
                href=""
                className="border rounded-full hover:bg-secondary hover:text-white transition-all duration-500 border-secondary text-secondary py-2 w-full"
              >
                Admission Process
              </Link>
              <Link
                href=""
                className="border rounded-full hover:bg-secondary hover:text-white transition-all duration-500 border-secondary text-secondary py-2 w-full"
              >
                Curriculum
              </Link>
              <Link
                href=""
                className="border rounded-full hover:bg-secondary hover:text-white transition-all duration-500 border-secondary text-secondary py-2 w-full"
              >
                Apply Online
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionPadding>
  );
}
