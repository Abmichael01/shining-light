import SectionPadding from '@/components/General/SectionPadding'
import React from 'react'

export default function AdmissionIsOpen() {
  return (
    <SectionPadding className='bg-gradient-to-br from-primary to-primary/70 flex flex-col-reverse sm:flex-row justify-center items-center gap-10 mt-[100px] py-10'>
        <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">ADMISSION IS NOW OPEN FOR 2025/2026 SESSION.</h2>
            <p className="text-lg text-white/70">BECAUSE YOUR CHILD DESERVES QUALITY EDUCATION</p>
            <button className="px-5 py-3 bg-white/20 border-2 border-dashed hover:bg-white transition-all duration-500 text-white hover:text-secondary cursor-pointer font-medium">
                APPLY NOW
            </button>
        </div>
        <img src="/admission-is-open.jpg" alt="admission-is-open" style={{
            borderRadius: "55% 0% 61% 35% / 50% 25% 61% 38%",
        }} className=" w-full sm:size-[300px] md:size-[400px] object-cover" />
    </SectionPadding>
  )
}
