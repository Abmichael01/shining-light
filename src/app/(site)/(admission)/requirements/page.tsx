import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight, FileText, GraduationCap, Heart } from 'lucide-react'
import React from 'react'

export default function RequirementsPage() {
  const primaryRequirements = [
    {
      document: "Birth Certificate",
      description: "Original and photocopy of official birth certificate",
      required: true,
      icon: "📋"
    },
    {
      document: "Previous School Report",
      description: "Last two years academic reports from previous school",
      required: true,
      icon: "📊"
    },
    {
      document: "Passport Photographs",
      description: "4 recent passport-sized photographs (white background)",
      required: true,
      icon: "📸"
    },
    {
      document: "Medical Report",
      description: "Recent medical examination report from a qualified physician",
      required: true,
      icon: "🏥"
    },
    {
      document: "Transfer Certificate",
      description: "Official transfer certificate from previous school",
      required: true,
      icon: "📄"
    },
    {
      document: "Parent/Guardian ID",
      description: "Valid identification of parent or guardian",
      required: true,
      icon: "🆔"
    }
  ]

  const secondaryRequirements = [
    {
      document: "BECE/JSS3 Certificate",
      description: "Original Basic Education Certificate or JSS3 certificate",
      required: true,
      icon: "🏆"
    },
    {
      document: "Academic Transcripts",
      description: "Complete academic records from Junior Secondary School",
      required: true,
      icon: "📋"
    },
    {
      document: "Character Reference",
      description: "Letter of recommendation from previous school principal",
      required: true,
      icon: "✉️"
    },
    {
      document: "Entrance Exam Results",
      description: "Results from our entrance examination",
      required: true,
      icon: "📝"
    },
    {
      document: "Birth Certificate",
      description: "Original and photocopy of official birth certificate",
      required: true,
      icon: "📋"
    },
    {
      document: "Passport Photographs",
      description: "6 recent passport-sized photographs (white background)",
      required: true,
      icon: "📸"
    }
  ]

  const academicCriteria = [
    {
      level: "Primary School Entry",
      criteria: [
        "Age appropriate for grade level",
        "Basic reading and writing skills assessment",
        "Simple mathematics evaluation",
        "Social interaction observation"
      ],
      color: "bg-blue-100 border-blue-300"
    },
    {
      level: "Secondary School Entry",
      criteria: [
        "Minimum of 5 credits in BECE including English and Mathematics",
        "Pass entrance examination (60% minimum score)",
        "Successful interview session",
        "Character assessment from previous school"
      ],
      color: "bg-green-100 border-green-300"
    }
  ]

  const additionalInfo = [
    {
      title: "Language Proficiency",
      details: "Students must demonstrate basic proficiency in English language as it is our primary medium of instruction.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Behavioral Standards",
      details: "We expect students to exhibit good moral character and respect for school rules and regulations.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Academic Readiness",
      details: "Students should be academically prepared for the grade level they are applying to join.",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ]

  const applicationChecklist = [
    "Complete online application form",
    "Submit all required documents",
    "Pay application fee",
    "Schedule entrance examination",
    "Attend assessment and interview",
    "Await admission decision"
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Admission Requirements"
        subtitle="Everything you need to know about joining the Shining Light family"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Admission', href: '/admission' },
          { name: 'Requirements' }
        ]}
        backgroundImage="/hero1.jpg"
      />
      
      <ContentSection>
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Join Our Academic Community
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              At Shining Light School, we welcome students who are eager to learn, grow, and contribute 
              positively to our school community. Our admission requirements are designed to ensure 
              that every student can thrive in our academic environment.
            </p>
          </div>

          {/* Primary School Requirements */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Primary School Requirements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryRequirements.map((req, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-primary">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{req.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">{req.document}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{req.description}</p>
                      {req.required && (
                        <span className="inline-block mt-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary School Requirements */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Secondary School Requirements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryRequirements.map((req, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-secondary">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{req.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">{req.document}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{req.description}</p>
                      {req.required && (
                        <span className="inline-block mt-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Criteria */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Academic Criteria
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {academicCriteria.map((criteria, index) => (
                <div key={index} className={`p-6 rounded-lg border-2 ${criteria.color}`}>
                  <h4 className="text-xl font-semibold text-primary mb-4">{criteria.level}</h4>
                  <ul className="space-y-2">
                    {criteria.criteria.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-8 text-center">
              Additional Requirements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4 text-white">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold mb-3">{info.title}</h4>
                  <p className="text-sm opacity-90 leading-relaxed">{info.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Checklist */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Application Checklist
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-3">
                {applicationChecklist.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="border-l-4 border-secondary pl-6">
            <h4 className="text-lg font-semibold text-primary mb-4">Important Notes</h4>
            <div className="space-y-3 text-gray-700">
              <p>• All documents must be original with certified photocopies</p>
              <p>• International students may need additional documentation</p>
              <p>• Application fee is non-refundable regardless of admission outcome</p>
              <p>• Late applications may be considered on a case-by-case basis</p>
              <p>• All information provided must be accurate and verifiable</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Ready to Apply?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Ensure you have all the required documents ready before starting your application. 
              Our admissions team is here to help if you have any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlidingButton className="bg-secondary px-8">
                Start Application
                <CircleArrowRight />
              </GlidingButton>
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Download Requirements List
              </GlidingButton>
              <GlidingButton className="bg-primary px-8">
                Contact Admissions
              </GlidingButton>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
