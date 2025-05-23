import SectionPadding from '@/components/General/SectionPadding';
import React from 'react';
import {
  FaSquareRootAlt,
  FaApple,
  FaSwimmer,
  FaHeart,
} from 'react-icons/fa';

const whys = [
  {
    icon: <FaSquareRootAlt />,
    title: "Skills",
    description:
      "At Shinning Light School, we do not overestimate the power of certificate than skills; we believe both are extremely needed for a child’s future placement.",
  },
  {
    icon: <FaApple />,
    title: "Ethos",
    description:
      "We do not intend to nurture academically sound individuals but morally corrupt; every child who passes through us must pass the test of good morals.",
  },
  {
    icon: <FaSwimmer />,
    title: "Excellence",
    description:
      "Every child at Shinning Light School is prepared for a future of excellence regardless of whatever position or placement they find themselves in the future.",
  },
  {
    icon: <FaHeart />,
    title: "Creativity",
    description:
      "Creativity is valued and enhanced through our wide spectrum of co-curricular activities.",
  },
];

export default function WhyUs() {
  return (
    <SectionPadding className="mt-[100px] md:mt-[150px] bg-gradient-to-b from-primary/10 to-primary   py-24">
      <h2 className="text-3xl text-primary md:text-4xl font-bold font-fancy text-center mb-12">
        Why Shinning Light is the Best Solution for Your Child
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {whys.map((why, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 space-y-4 flex flex-col items-center"
          >
            <div className="text-primary text-4xl mx-auto text-center">{why.icon}</div>
            <h3 className="text-xl font-semibold text-center">{why.title}</h3>
            <p className="text-gray-600 text-sm text-center">{why.description}</p>
          </div>
        ))}
      </div>
    </SectionPadding>
  );
}