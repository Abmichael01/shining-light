import SectionPadding from '@/components/General/SectionPadding'
import Link from 'next/link';
import React from 'react'

const schools = [
  {
    name: "Primary School",
    img: "/pre-school.jpg",
  },
  {
    name: "Secondary School",
    img: "/senior-school.jpg",
  },
];

export default function WhichSchool() {
  return (
    <SectionPadding className="space-y-10 mt-[100px]" id="which-school">
        <div className="font-fancy text-2xl sm:text-3xl font-semibold text-center">Which school are you applying for?</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-20  w-full">
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
                        Apply Online
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
    </SectionPadding>
  )
}
