"use client"

import Logo from '@/components/General/Logo'
import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import Dropdown from "./Dropdown"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GlidingButton from '../../../CustomUi/GlidingButton';
import { MobileHeader } from './MobileHeader';
import { cn } from '@/lib/utils';
import { MdClose } from 'react-icons/md';

type NavItemType = {
  name: string;
  link?: string;
  dropdown?: {
    name: string;
    link: string;
  }[];
};

const navs: NavItemType[] = [
  {
    name: "ABOUT",
    dropdown: [
      {
        name: "History",
        link: "/about/history",
      },
      {
        name: "Administration",
        link: "/about/administration",
      },
      {
        name: "Anthem & Motto",
        link: "/about/anthem",
      },
      {
        name: "Facilities",
        link: "/about/facilities",
      },
      {
        name: "School Calendar",
        link: "/about/calendar",
      },
    ],
  },
  {
    name: "ACADEMICS",
    dropdown: [
      {
        name: "Curriculum",
        link: "/academics/curriculum",
      },
      {
        name: "Departments",
        link: "/academics/departments",
      },
      {
        name: "Examinations",
        link: "/academics/exams",
      },
      {
        name: "Results",
        link: "/academics/results",
      },
      {
        name: "Subjects Offered",
        link: "/academics/subjects",
      },
    ],
  },
  {
    name: "ADMISSION",
    dropdown: [
      {
        name: "How to Apply",
        link: "/admission/how-to-apply",
      },
      {
        name: "Requirements",
        link: "/admission/requirements",
      },
      {
        name: "Tuition Fees",
        link: "/admission/fees",
      },
      {
        name: "Open Days",
        link: "/admission/open-days",
      },
    ],
  },
  {
    name: "STUDENTS",
    dropdown: [
      {
        name: "Student Portal",
        link: "/students/portal",
      },
      {
        name: "CBT Exams",
        link: "/students/cbt",
      },
      {
        name: "Clubs & Societies",
        link: "/students/clubs",
      },
      {
        name: "Hostel Life",
        link: "/students/hostel",
      },
      {
        name: "E-Library",
        link: "/students/library",
      },
    ],
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
]; 

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className=" relative py-5 border-b px-3 md:px-5 lg:px-10 flex items-center justify-between z-[999]">
        <Logo />
        <nav className="lg:flex items-center hidden gap-10">
            {navs.map((nav, index) => (
                <React.Fragment key={index}>
                    {nav.dropdown ? (<Dropdown dropdownData={nav.dropdown}>
                        {nav.name}
                    </Dropdown>) : (
                        <Link href={nav.link as string} className="font-semibold text-sm">
                            {nav.name}
                        </Link>
                    )
                    }
                </React.Fragment>
            ))}
        </nav>
        <nav className={cn(
          'absolute top-[100%] w-full left-0 right-0 overflow-hidden transition-all duration-700 ease-in-out',
          isOpen ? "max-h-screen" : "max-h-0"
        )}>
          <MobileHeader data={navs} />
        </nav>

        {isOpen && <div className="bg-black/50 "></div> }

        <div className="items-center gap-5 hidden lg:flex">
            <GlidingButton className="bg-secondary ">ENROLL</GlidingButton>
            <GlidingButton className="">E-PORTAL</GlidingButton>
        </div>

        <div onClick={() => setIsOpen(prev => !prev)} className=" lg:hidden text-primary cursor-pointer">
            { isOpen ? <MdClose  className="size-[30px]" /> : <RiMenu3Line className="size-[30px]" />}
        </div>
    </header>
  )
}
