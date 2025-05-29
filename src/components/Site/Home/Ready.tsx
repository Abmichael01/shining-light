import GlidingButton from '@/components/CustomUi/GlidingButton';
import SectionPadding from '@/components/General/SectionPadding';
import React from 'react';

export default function Ready() {
  return (
    <SectionPadding className="mt-[100px] bg-primary/20 text-center py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold font-fancy mb-4 text-primary">
          Ready to take your next step?
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          If you would like to study at Shining Light Group of Schools, you're choosing the right place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <GlidingButton
            className="border-2 border-primary text-primary bg-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            line={false}
          >
            LEARN MORE
          </GlidingButton>
          <GlidingButton
            className="border-2 border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            line={false}
          >
            APPLY TODAY
          </GlidingButton>
        </div>
      </div>
    </SectionPadding>
  );
}