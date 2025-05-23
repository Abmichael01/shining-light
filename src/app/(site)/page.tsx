import Hero from '@/components/Site/Home/Hero'
import About from '@/components/Site/Home/About'
import Schools from '@/components/Site/Home/Schools'
import React from 'react'
import AdmissionIsOpen from '@/components/Site/Home/AdmissionIsOpen'
import WhyUs from '@/components/Site/Home/WhyUs'

export default function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <About />
        <AdmissionIsOpen />
        <Schools />
        <WhyUs />
    </div>
  )
}
