import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function HistoryPage() {
  return (
    <div className='w-full'>
      <PageHero 
        title="Our History"
        subtitle="A legacy of excellence spanning over two decades"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'History' }
        ]}
        backgroundImage="/hero2.jpg"
      />
      
      <ContentSection>
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">The Beginning</h2>
            <Separator className="mb-6 mx-auto w-24" />
          </div>
          
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              <span className="text-4xl text-secondary float-left mr-3 mt-1 leading-none">F</span>
              ounded in 2001, Shining Light School began as a vision to provide quality education 
              that combines academic excellence with moral values. What started as a small institution 
              with just 20 students has grown into one of the most respected educational establishments 
              in Ogun State.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-fancy font-semibold text-primary mb-4">Early Years (2001-2005)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The school was established with a clear mission: to nurture young minds through 
                  quality education while instilling strong moral values. Our founder believed that 
                  education should shape not just the intellect, but the character of every student.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  During these formative years, we laid the foundation for what would become our 
                  signature approach to education - combining rigorous academics with character 
                  development, discipline, and moral instruction.
                </p>
              </div>
              <div className="bg-gray-100 h-64 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Historical Image Placeholder</span>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-fancy font-semibold text-primary mb-4">Growth and Recognition (2006-2015)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As our reputation for excellence grew, so did our student body and facilities. 
                We received full accreditation from the Ogun State Ministry of Education and 
                became an approved examination center for WAEC, NECO, and BECE.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This period saw significant infrastructure development, including the construction 
                of modern laboratories, expanded library facilities, and improved sporting amenities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-fancy font-semibold text-primary mb-6">Modern Era (2016-Present)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Today, Shining Light School stands as a beacon of educational excellence, 
                    having produced thousands of successful graduates who have gone on to make 
                    their mark in various fields across Nigeria and beyond.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We continue to evolve with the times, incorporating modern teaching methodologies 
                    and technology while maintaining our core values of integrity, excellence, and service.
                  </p>
                </div>
                <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">Modern School Image</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-fancy font-semibold text-primary mb-6 text-center">Our Legacy in Numbers</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white shadow-md rounded-lg">
                  <h4 className="text-4xl font-bold text-secondary mb-2">2000+</h4>
                  <p className="text-gray-600 font-semibold">Graduates</p>
                </div>
                <div className="text-center p-6 bg-white shadow-md rounded-lg">
                  <h4 className="text-4xl font-bold text-secondary mb-2">95%</h4>
                  <p className="text-gray-600 font-semibold">Success Rate</p>
                </div>
                <div className="text-center p-6 bg-white shadow-md rounded-lg">
                  <h4 className="text-4xl font-bold text-secondary mb-2">23</h4>
                  <p className="text-gray-600 font-semibold">Years of Excellence</p>
                </div>
                <div className="text-center p-6 bg-white shadow-md rounded-lg">
                  <h4 className="text-4xl font-bold text-secondary mb-2">50+</h4>
                  <p className="text-gray-600 font-semibold">Dedicated Staff</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-fancy font-semibold mb-4 text-center">Milestones & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Academic Excellence</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• First private school in the area to achieve 100% WAEC pass rate (2010)</li>
                    <li>• Winner of State Mathematics Competition (2015, 2018, 2021)</li>
                    <li>• Best Performing School Award - Ogun State (2019)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Infrastructure Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• New Science Laboratory Complex (2012)</li>
                    <li>• Digital Library and Computer Center (2016)</li>
                    <li>• Modern Sports Complex (2020)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}