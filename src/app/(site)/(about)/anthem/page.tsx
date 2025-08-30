import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function AnthemPage() {
  return (
    <div className='w-full'>
      <PageHero 
        title="Anthem & Motto"
        subtitle="The songs and words that inspire our community"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Anthem & Motto' }
        ]}
        backgroundImage="/hero4.jpg"
      />
      
      <ContentSection>
        <div className="space-y-12">
          {/* School Anthem Section */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-fancy font-bold text-primary mb-4">School Anthem</h2>
              <Separator className="mb-6 mx-auto w-24" />
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our school anthem unites all members of the Shining Light community, from primary to secondary students, 
                in celebrating our shared values and aspirations.
              </p>
            </div>

            <div className="bg-primary text-white p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-fancy font-bold mb-8 text-center">SHINING LIGHT COLLEGE ANTHEM</h3>
              
              <div className="space-y-8 text-center">
                <div>
                  <h4 className="font-bold mb-4 text-xl">Stanza I</h4>
                  <p className="italic text-lg leading-relaxed">
                    Kudos to our great school<br/>
                    Shining Light College<br/>
                    A citadel of knowledge and excellence<br/>
                    We are proud of our great school<br/>
                    Shining Light College<br/>
                    May we always shine forever and ever.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-bold mb-4 text-xl">Chorus</h4>
                  <p className="italic font-bold text-lg leading-relaxed">
                    We hail thee 2x<br/>
                    Great Shining Light<br/>
                    We hail thee 2x<br/>
                    Let's lift our school up<br/>
                    Kudos to our great school<br/>
                    Shining Light College<br/>
                    A citadel of knowledge and excellence
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 text-xl">Stanza II</h4>
                  <p className="italic text-lg leading-relaxed">
                    We pray for our teachers<br/>
                    Proprietress, students<br/>
                    That we all shall succeed<br/>
                    In our great school<br/>
                    To always be the best<br/>
                    In Ogun State<br/>
                    May we always shine forever and ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* School Mottos Section */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-fancy font-bold text-primary mb-4">School Mottos</h2>
              <Separator className="mb-6 mx-auto w-24" />
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our school operates with two distinct yet complementary mottos that guide our primary and secondary divisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary School Motto */}
              <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-fancy font-bold text-primary mb-4">Primary School</h3>
                  <div className="bg-secondary text-white p-6 rounded-lg">
                    <p className="text-2xl font-bold font-fancy">"LOVE and SERVICE"</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">LOVE</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Love represents our commitment to nurturing every young student with care, 
                      compassion, and understanding. It encompasses the warm, supportive environment 
                      we create for our primary school children to flourish emotionally and academically.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">SERVICE</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Service reflects our dedication to developing young minds who will contribute 
                      meaningfully to society. We instill in our primary students the values of 
                      helping others and serving their communities with integrity and purpose.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary School Motto */}
              <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-fancy font-bold text-primary mb-4">Secondary College</h3>
                  <div className="bg-secondary text-white p-6 rounded-lg">
                    <p className="text-2xl font-bold font-fancy">"LET YOUR LIGHT SO SHINE"</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">INSPIRATION</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      This motto inspires our secondary students to be beacons of excellence and positive 
                      influence. It encourages each student to illuminate their path and that of others 
                      through knowledge, character, and achievement.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">LEADERSHIP</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      The motto challenges our secondary students to be leaders, innovators, and role models 
                      who shine brightly in academics, character, and service to humanity, preparing them 
                      for higher education and meaningful careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School Values Section */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Excellence</h4>
                <p className="text-gray-700 text-sm">Striving for the highest standards in all we do</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Integrity</h4>
                <p className="text-gray-700 text-sm">Acting with honesty and moral principles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Service</h4>
                <p className="text-gray-700 text-sm">Contributing positively to our community and beyond</p>
              </div>
            </div>
          </div>

          {/* Pledge Section */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">School Pledge</h3>
            <div className="text-center max-w-2xl mx-auto">
              <p className="italic text-lg leading-relaxed">
                "We are the children of Shining Light<br/>
                We are the best in Ogun State<br/>
                Glory of God will shine upon us<br/>
                Because we are from Shining School<br/>
                For we shall rise and shine forever<br/>
                For we shall excel in future<br/>
                We are the leaders of tomorrow<br/>
                We are the princes and princesses"
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
