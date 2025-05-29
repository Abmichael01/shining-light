import GlidingButton from '@/components/CustomUi/GlidingButton'
import SectionPadding from '@/components/General/SectionPadding'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <SectionPadding className="flex items-center flex-col-reverse md:flex-row mt-[300px] gap-10">
        <div className="space-y-5 md:w-1/2">
            <h2 className="font-semibold text-primary font-fancy text-lg">LOVE and SERVICE</h2>
            <Separator />
            <p className="">
                <span className="text-2xl text-secondary tracking-tighter -mr-[3px]">S</span> hining Light is a visionary institution, standing as a beacon of knowledge and excellence in today’s ever-evolving educational landscape. With a strong commitment to academic rigor and character development, we continue to shine brightly among contemporary schools.
            </p>
            <p className="">
                Recognized and fully approved by the Ogun State Ministry of Education , Shining Light serves as an accredited examination center for WAEC, NECO, and BECE , affirming our adherence to national educational standards and excellence.
            </p>
            <p className="">
                Our identity is symbolized by the color Blue — a reflection of the unique values we embody. Blue represents calm, integrity, wisdom, loyalty, and focus — qualities deeply rooted in our students, staff, management, and our valued parents and guardians. Together, we cultivate a learning environment where every learner can thrive and shine
            </p>
            <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-10">
                Learn More
                <CircleArrowRight />
            </GlidingButton>
        </div>
        <div className="md:w-1/2 h-auto bg-secondary">
        <img src="/graduation.jpg" alt="graduation image" className="w-full translate-y-3 translate-x-3" />
        </div>
    </SectionPadding>
  )
}
