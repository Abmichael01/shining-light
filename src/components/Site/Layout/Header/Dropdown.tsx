import Link from "next/link";
import React from "react";

type dropdown = {
  name: string;
  link: string;
};

interface Props {
  children: React.ReactNode;
  dropdownData: dropdown[];
}

export default function Dropdown({ children, dropdownData }: Props) {
  return (
    <div className="relative group cursor-pointer">
      <h1 className="text-sm font-semibold py-1 group-hover:text-secondary">{children}</h1>
      <div className="border flex flex-col absolute top-[100%] shadow-xl left-0 bg-background ease-in transition-all duration-300 overflow-hidden translate-y-[40px] opacity-[0] max-h-0 group-hover:opacity-[1] group-hover:max-h-screen pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-[0px]">
        {dropdownData?.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            className="border-b py-3 px-3 whitespace-nowrap"
          >
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
