import SectionPadding from "@/components/General/SectionPadding";
import React from "react";

type FooterItem = {
  name: string;
  link?: string;
  type?: "email" | "phone";
};

type FooterSection = {
  title: string;
  items: FooterItem[];
};

export const footerData: FooterSection[] = [
  {
    title: "Quick Links",
    items: [
      { name: "APPLY NOW", link: "/admission" },
      { name: "EPORTAL", link: "#" },
      { name: "ADMISSION PROCESS", link: "#" },
      { name: "CONTACT", link: "#" },
      { name: "CAREER", link: "#" },
    ],
  },
  {
    title: "Get in touch",
    items: [
      { name: "Rasonwa, Via Ilese – Ijebu Ode" },
      { name: "enquiry@shinninglightschool.com", type: "email" },
      { name: "+234 8161721618", type: "phone" },
    ],
  },
];

export default function Footer() {
  return (
    <SectionPadding className="bg-primary py-20 mt-[200px] text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <img
            src="/logo.png"
            alt="Shining Light School Logo"
            className="w-20"
          />
          <p className="text-sm mb-6">
            SHINING LIGHT is a visionary school with a body of knowledge shining
            among others in the contemporary time. BLUE is our unique colour.
          </p>
          <button className="text-lg font-semibold border-b border-white hover:text-primary-dark transition-colors duration-300">
            READ MORE
          </button>
        </div>

        {/* Columns 2 & 3: Dynamic Sections */}
        {footerData?.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold font-fancy mb-4">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm ">
                  <span className="text-red-500 mr-2">
                    {/* Reusable icon SVG or dynamic based on type */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12 1C5.925 1 1 5.925 1 12c0 5.523 4.477 10 10 10s10-4.477 10-10C23 5.925 18.075 1 12 1zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                  </span>
                  {item.type === "email" ? (
                    <a
                      href={`mailto:${item.name}`}
                      className="hover:text-primary-dark transition-colors duration-300 hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : item?.type === "phone" ? (
                    <a
                      href={`tel:${item.name.replace(/\s+/g, "")}`}
                      className="hover:text-primary-dark transition-colors duration-300 hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      href={item?.link}
                      className="hover:text-primary-dark transition-colors duration-300 hover:underline"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionPadding>
  );
}
