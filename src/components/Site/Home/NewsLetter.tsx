import SectionPadding from '@/components/General/SectionPadding';
import React from 'react';

export default function NewsLetter() {
  return (
    <SectionPadding className="flex flex-col items-center text-center py-20">
      {/* Image */}
      <img
        src="/newsletter.png"
        alt="Newsletter"
        className="w-[250px] md:w-[300px] mb-6"
      />

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Get updated about the activities going on in the school
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-xl">
        Subscribe to our newsletter and stay informed about events, announcements, and more.
      </p>

      {/* Email Input + Button */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-colors duration-300"
        >
          Subscribe
        </button>
      </div>
    </SectionPadding>
  );
}