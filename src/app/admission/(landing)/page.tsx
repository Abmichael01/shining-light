import FAQ from '@/components/Admission/LandingPage/FAQ';
import Hero from '@/components/Admission/LandingPage/Hero';
import WhichSchool from '@/components/Admission/LandingPage/WhichSchool';
import React from 'react';

export default function AdmissionLandingPage() {
  return (
    <main className="">
      <Hero />
      <WhichSchool />
      <FAQ />
    </main>
  );
}