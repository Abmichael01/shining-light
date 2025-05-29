// components/dashboard/Sidebar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebarStore } from "@/stores/useSidebarStore";
import { FiHome } from "react-icons/fi";
import { User, File, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const { isOpen, toggle } = useSidebarStore();
  const pathname = usePathname();

  const navItems = [
    { name: 'Application', href: '/admission/portal', icon: <FiHome className='w-[20px]' /> },
    { name: 'Bio Data', href: '/admission/portal/bio-data', icon: <User className='w-[18px]' /> },
    { name: 'Documents', href: '/admission/portal/documents', icon: <File className='w-[18px]' /> },
    { name: 'Payment', href: '/admission/portal/payment', icon: <Wallet className='w-[18px]' /> },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={toggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        `fixed lg:sticky z-50 top-0  w-[250px] h-screen bg-white border-r transition-all duration-300 ease-in-out`,
        isOpen ? "left-0" : "-left-full lg:left-0"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center gap-2 border-b">
            <img src="/logo.png" alt="shining light logo" className='h-[30px]' />
            <h1 className="text-lg font-semibold text-primary">Admission Portal</h1>
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex gap-2 items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={toggle} // Close on mobile click
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="p-4 border-t">
            <button className="w-full text-left text-sm text-gray-600 hover:text-gray-900">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}