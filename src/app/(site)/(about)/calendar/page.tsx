import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function CalendarPage() {
  const academicTerms = [
    {
      term: "First Term 2024",
      resumption: "September 9, 2024",
      midTerm: "October 28 - November 1, 2024",
      vacation: "December 20, 2024",
      color: "bg-primary"
    },
    {
      term: "Second Term 2025",
      resumption: "January 8, 2025",
      midTerm: "February 17 - 21, 2025",
      vacation: "April 11, 2025",
      color: "bg-secondary"
    },
    {
      term: "Third Term 2025",
      resumption: "April 28, 2025",
      midTerm: "June 9 - 13, 2025",
      vacation: "July 25, 2025",
      color: "bg-primary"
    }
  ]

  const importantEvents = [
    {
      event: "Inter-house Sports Competition",
      date: "November 15, 2024",
      description: "Annual sports competition featuring various athletic events and team competitions.",
      category: "Sports"
    },
    {
      event: "Speech & Prize Giving Day",
      date: "December 13, 2024",
      description: "Annual ceremony to celebrate academic achievements and award outstanding students.",
      category: "Academic"
    },
    {
      event: "Cultural Day Celebration",
      date: "March 28, 2025",
      description: "Celebration of Nigerian culture with traditional dances, music, and cultural displays.",
      category: "Cultural"
    },
    {
      event: "Science Fair & Exhibition",
      date: "May 16, 2025",
      description: "Students showcase innovative science projects and experiments.",
      category: "Academic"
    },
    {
      event: "Graduation Ceremony",
      date: "July 18, 2025",
      description: "Formal graduation ceremony for completing students.",
      category: "Graduation"
    },
    {
      event: "Parent-Teacher Conference",
      date: "November 22, 2024",
      description: "Meeting between parents and teachers to discuss student progress.",
      category: "Academic"
    }
  ]

  const examSchedule = [
    {
      exam: "Continuous Assessment Tests",
      primary: "Ongoing throughout each term",
      secondary: "Ongoing throughout each term"
    },
    {
      exam: "Mid-Term Examinations",
      primary: "Week 6 of each term",
      secondary: "Week 6 of each term"
    },
    {
      exam: "End of Term Examinations",
      primary: "Week 11-12 of each term",
      secondary: "Week 11-12 of each term"
    },
    {
      exam: "BECE (Basic Education Certificate)",
      primary: "May 2025 (JSS 3)",
      secondary: "N/A"
    },
    {
      exam: "WAEC (West African Examinations)",
      primary: "N/A",
      secondary: "May - June 2025 (SS 3)"
    },
    {
      exam: "NECO (National Examinations)",
      primary: "N/A", 
      secondary: "November 2024 & June 2025"
    }
  ]

  const holidays = [
    { name: "Independence Day", date: "October 1, 2024", type: "National Holiday" },
    { name: "Christmas Break", date: "December 21, 2024 - January 7, 2025", type: "School Holiday" },
    { name: "New Year", date: "January 1, 2025", type: "National Holiday" },
    { name: "Easter Break", date: "March 29 - April 1, 2025", type: "Religious Holiday" },
    { name: "Workers' Day", date: "May 1, 2025", type: "National Holiday" },
    { name: "Democracy Day", date: "June 12, 2025", type: "National Holiday" },
    { name: "Eid Celebrations", date: "To be announced", type: "Religious Holiday" }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="School Calendar"
        subtitle="Stay informed about important dates and events throughout the academic year"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'School Calendar' }
        ]}
        backgroundImage="/hero3.jpg"
      />
      
      <ContentSection>
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Academic Year 2024/2025
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              Our academic calendar is designed to provide optimal learning time while ensuring adequate 
              breaks for rest and family time. Stay updated with all important dates and events.
            </p>
          </div>

          {/* Academic Terms */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">Academic Terms</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {academicTerms.map((term, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className={`${term.color} text-white p-4`}>
                    <h4 className="text-xl font-fancy font-bold text-center">{term.term}</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Resumption:</span>
                      <span className="font-semibold text-primary">{term.resumption}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Mid-term Break:</span>
                      <span className="font-semibold text-secondary">{term.midTerm}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Vacation:</span>
                      <span className="font-semibold text-primary">{term.vacation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Events */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">Important Events</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {importantEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-primary text-lg">{event.event}</h4>
                    <span className="bg-secondary text-white text-xs px-2 py-1 rounded">{event.category}</span>
                  </div>
                  <p className="text-secondary font-medium mb-2">{event.date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Examination Schedule */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">Examination Schedule</h3>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Examination Type</th>
                    <th className="text-left p-4 font-semibold">Primary School</th>
                    <th className="text-left p-4 font-semibold">Secondary College</th>
                  </tr>
                </thead>
                <tbody>
                  {examSchedule.map((exam, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-gray-800">{exam.exam}</td>
                      <td className="p-4 text-gray-700">{exam.primary}</td>
                      <td className="p-4 text-gray-700">{exam.secondary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Holidays & Breaks */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">Holidays & Breaks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {holidays.map((holiday, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">{holiday.name}</h4>
                  <p className="text-sm opacity-90 mb-1">{holiday.date}</p>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">{holiday.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">📅 Academic Calendar Policies</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Students must resume on the specified resumption dates</li>
                  <li>• Late resumption requires written explanation from parents</li>
                  <li>• All fees must be paid before the end of each term</li>
                  <li>• Examination dates are strictly adhered to</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">📞 Stay Connected</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Check school website for calendar updates</li>
                  <li>• Follow official social media channels</li>
                  <li>• Contact school office for clarifications</li>
                  <li>• Parent WhatsApp groups for announcements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Download Academic Calendar
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get the complete academic calendar for the 2024/2025 session in PDF format 
              for easy reference and printing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlidingButton className="bg-secondary px-8">
                Download Full Calendar
              </GlidingButton>
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Add to Google Calendar
              </GlidingButton>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
