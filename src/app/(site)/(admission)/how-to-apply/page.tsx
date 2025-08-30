import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight, CheckCircle, Clock, FileText, Users } from 'lucide-react'
import React from 'react'

export default function HowToApplyPage() {
  const applicationSteps = [
    {
      step: 1,
      title: "Complete Online Application",
      description: "Fill out our comprehensive online application form with accurate information about the student and family.",
      icon: <FileText className="w-8 h-8" />,
      timeframe: "15-20 minutes",
      color: "bg-primary"
    },
    {
      step: 2,
      title: "Submit Required Documents",
      description: "Upload all necessary documents including academic records, birth certificate, and passport photographs.",
      icon: <CheckCircle className="w-8 h-8" />,
      timeframe: "1-2 days",
      color: "bg-secondary"
    },
    {
      step: 3,
      title: "Schedule Entrance Assessment",
      description: "Book an appointment for the entrance examination and interview session for the prospective student.",
      icon: <Clock className="w-8 h-8" />,
      timeframe: "Within 1 week",
      color: "bg-primary"
    },
    {
      step: 4,
      title: "Attend Assessment & Interview",
      description: "Student takes the entrance exam and participates in an interview with our admissions team.",
      icon: <Users className="w-8 h-8" />,
      timeframe: "2-3 hours",
      color: "bg-secondary"
    }
  ]

  const admissionChannels = [
    {
      method: "Online Application",
      description: "Complete your application through our secure online portal",
      icon: "💻",
      recommended: true
    },
    {
      method: "Visit Our Campus",
      description: "Come to our admissions office for in-person assistance",
      icon: "🏫",
      recommended: false
    },
    {
      method: "Phone Application",
      description: "Call our admissions hotline for guidance and support",
      icon: "📞",
      recommended: false
    }
  ]

  const importantDates = [
    { event: "Application Opens", date: "January 15, 2025", status: "upcoming" },
    { event: "Early Application Deadline", date: "March 31, 2025", status: "upcoming" },
    { event: "Regular Application Deadline", date: "May 15, 2025", status: "upcoming" },
    { event: "Entrance Examinations", date: "June 1-15, 2025", status: "upcoming" },
    { event: "Admission Results", date: "June 30, 2025", status: "upcoming" },
    { event: "School Resumption", date: "September 9, 2025", status: "upcoming" }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="How to Apply"
        subtitle="Your journey to excellence starts here. Follow our simple application process."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Admission', href: '/admission' },
          { name: 'How to Apply' }
        ]}
        backgroundImage="/hero4.jpg"
      />
      
      <ContentSection>
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Welcome to Shining Light
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              We're excited that you're considering Shining Light School for your child's education. 
              Our admissions process is designed to be straightforward and supportive, ensuring the 
              best fit for both students and families.
            </p>
          </div>

          {/* Application Steps */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Application Process
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${step.color} text-white p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {step.icon}
                        <span className="text-2xl font-bold">Step {step.step}</span>
                      </div>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        {step.timeframe}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">{step.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Methods */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              How to Apply
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {admissionChannels.map((channel, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md relative ${channel.recommended ? 'ring-2 ring-secondary' : ''}`}>
                  {channel.recommended && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                  <div className="text-center">
                    <div className="text-4xl mb-4">{channel.icon}</div>
                    <h4 className="text-lg font-semibold text-primary mb-3">{channel.method}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{channel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Important Dates 2025
            </h3>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Event</th>
                      <th className="text-left p-4 font-semibold">Date</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importantDates.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-4 font-medium text-gray-800">{item.event}</td>
                        <td className="p-4 text-gray-700">{item.date}</td>
                        <td className="p-4">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Tips for Success */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">
              Tips for a Successful Application
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Before You Apply</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Visit our campus during Open Days</li>
                  <li>• Read our prospectus thoroughly</li>
                  <li>• Prepare all required documents</li>
                  <li>• Discuss expectations with your child</li>
                  <li>• Review our academic programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">During the Process</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Submit applications early</li>
                  <li>• Ensure all information is accurate</li>
                  <li>• Attend scheduled appointments on time</li>
                  <li>• Encourage your child to be themselves</li>
                  <li>• Ask questions if you need clarification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact and CTA */}
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Ready to Begin?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Take the first step toward your child's bright future at Shining Light School. 
              Our admissions team is here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlidingButton className="bg-secondary px-8">
                Start Application
                <CircleArrowRight />
              </GlidingButton>
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Download Prospectus
              </GlidingButton>
              <GlidingButton className="bg-primary px-8">
                Contact Admissions
              </GlidingButton>
            </div>
          </div>

          {/* Help Section */}
          <div className="border-l-4 border-secondary pl-6">
            <h4 className="text-lg font-semibold text-primary mb-2">Need Help?</h4>
            <p className="text-gray-700 mb-3">
              Our admissions team is available to assist you throughout the application process.
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Email:</strong> admissions@shinninglightschool.com</p>
              <p><strong>Phone:</strong> +234 8161721618</p>
              <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
