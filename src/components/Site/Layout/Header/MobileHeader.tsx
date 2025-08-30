import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

// Type Definition
type NavItemType = {
  name: string;
  link?: string;
  dropdown?: {
    name: string;
    link: string;
  }[];
};

interface Props {
  data: NavItemType[];
  onLinkClick?: () => void;
}

export function MobileHeader({ data, onLinkClick }: Props) {
    
  return (
    <div className="lg:hidden bg-white shadow-md p-4 overflow-hidden">
      <nav className="space-y-4">
        {/* Accordion for items with dropdown */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {data.map((item, index) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;

            if (hasDropdown) {
              return (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                  <AccordionTrigger className="text-base font-medium text-left w-full px-0 hover:no-underline">
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 pb-2">
                    {item.dropdown?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        onClick={onLinkClick}
                        className="block text-sm text-gray-700 hover:text-primary transition-colors py-2 border-b"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              );
            }

            // Render regular link for items without dropdown
            return (
              <Link
                key={index}
                href={item.link || "#"}
                onClick={onLinkClick}
                className="block text-base font-medium text-gray-900 hover:text-primary"
              >
                {item.name}
              </Link>
            );
          })}
        </Accordion>
      </nav>
    </div>
  );
}