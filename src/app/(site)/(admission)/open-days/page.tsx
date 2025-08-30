import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight, Calendar, Clock, MapPin, Users, BookOpen, Trophy } from 'lucide-react'
import React from 'react'

export default function OpenDaysPage() {
  const upcomingOpenDays = [
    {
      date: "Saturday, March 16, 2025",
      time: "9:00 AM - 2:00 PM",
      focus: "Primary School Showcase",
      description: "Explore our primary school facilities, meet teachers, and learn about our early childhood programs.",
      highlights: ["Classroom visits", "Teacher interactions", "Student performances", "Q&A sessions"],
      color: "bg-blue-100 border-blue-300"
    },
    {
      date: "Saturday, April 20, 2025",
      time: "9:00 AM - 3:00 PM",
      focus: "Secondary School Experience",
      description: "Discover our secondary programs, laboratory facilities, and university preparation pathways.",
      highlights: ["Lab demonstrations", "Career guidance sessions", "University counseling", "Student testimonials"],
      color: "bg-green-100 border-green-300"
    },
    {
      date: "Saturday, May 18, 2025",
      time: "9:00 AM - 4:00 PM",
      focus: "Complete School Tour",
      description: "Comprehensive tour covering all levels from pre-school to senior secondary school.",
      highlights: ["Full campus tour", "All facilities", "Meet leadership team", "Financial aid info"],
      color: "bg-purple-100 border-purple-300"
    }
  ]

  const tourActivities = [
    {
      activity: "Welcome & Registration",
      time: "9:00 - 9:30 AM",
      description: "Check-in, welcome refreshments, and information packets",
      icon: <Users className="w-6 h-6" />
    },
    {
      activity: "Principal's Address",
      time: "9:30 - 10:00 AM", 
      description: "Welcome address and school vision presentation",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      activity: "Campus Tours",
      time: "10:00 - 11:30 AM",
      description: "Guided tours of classrooms, laboratories, and facilities",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      activity: "Academic Presentations",
      time: "11:30 AM - 12:30 PM",
      description: "Subject demonstrations and teaching methodology showcases",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      activity: "Q&A with Staff",
      time: "12:30 - 1:30 PM",
      description: "Interactive session with teachers and administrators",
      icon: <Users className="w-6 h-6" />
    },
    {
      activity: "Application Assistance",
      time: "1:30 - 2:00 PM",
      description: "One-on-one application guidance and support",
      icon: <BookOpen className="w-6 h-6" />
    }
  ]

  const facilitiesToExplore = [
    {
      facility: "Modern Classrooms",
      description: "Interactive learning environments with latest technology",
      available: "All open days"
    },
    {
      facility: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology labs",
      available: "Secondary focus days"
    },
    {
      facility: "Computer Laboratory",
      description: "State-of-the-art ICT facilities and digital learning tools",
      available: "All open days"
    },
    {
      facility: "Library & Resource Center",
      description: "Extensive collection of books and digital resources",
      available: "All open days"
    },
    {
      facility: "Sports Complex",
      description: "Multi-purpose sports facilities and recreation areas",
      available: "Complete tour days"
    },
    {
      facility: "Arts & Music Studios",
      description: "Creative spaces for artistic and musical expression",
      available: "Primary focus days"
    }
  ]

  const testimonials = [
    {
      quote: "The open day gave us complete confidence in choosing Shining Light for our daughter. The facilities are impressive and the teachers are so welcoming.",
      parent: "Mrs. Adebayo",
      student: "Parent of Kemi (Primary 4)"
    },
    {
      quote: "I was amazed by the laboratory facilities and the quality of education offered. The teachers answered all our questions patiently.",
      parent: "Mr. Okafor",
      student: "Parent of Chuma (SSS 1)"
    },
    {
      quote: "The open day experience convinced us that this is the right school for our son. The academic standards are excellent.",
      parent: "Dr. Hassan",
      student: "Parent of Ahmed (JSS 2)"
    }
  ]

  const specialPrograms = [
    {
      program: "Future Leaders Workshop",
      description: "Interactive session on leadership development for secondary students",
      target: "Prospective SSS students",
      duration: "1 hour"
    },
    {
      program: "Science Discovery Lab",
      description: "Hands-on experiments and demonstrations in our science laboratories",
      target: "All age groups",
      duration: "45 minutes"
    },
    {
      program: "Creative Arts Showcase",
      description: "Student performances in music, drama, and visual arts",
      target: "All families",
      duration: "30 minutes"
    },
    {
      program: "Technology Demonstration",
      description: "Digital learning tools and computer programming showcase",
      target: "JSS & SSS prospects",
      duration: "30 minutes"
    }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Open Days"
        subtitle="Experience Shining Light firsthand. Visit our campus and discover what makes us special."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Admission', href: '/admission' },
          { name: 'Open Days' }
        ]}
        backgroundImage="/hero3.jpg"
      />
      
      <ContentSection>
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              See What Makes Us Different
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              Our Open Days provide the perfect opportunity to experience Shining Light School firsthand. 
              Meet our dedicated teachers, explore our modern facilities, and discover the exceptional 
              educational environment that has made us a leader in academic excellence.
            </p>
          </div>

          {/* Upcoming Open Days */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Upcoming Open Days
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingOpenDays.map((openDay, index) => (
                <div key={index} className={`p-6 rounded-lg border-2 ${openDay.color} hover:shadow-lg transition-shadow`}>
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">{openDay.focus}</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div className="flex items-center justify-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{openDay.date}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{openDay.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{openDay.description}</p>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Highlights:</h5>
                    <ul className="space-y-1">
                      {openDay.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Open Day Schedule
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {tourActivities.map((activity, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                    <div className="text-primary mt-1">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="font-semibold text-primary">{activity.activity}</h4>
                        <span className="text-sm text-gray-600 font-medium">{activity.time}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facilities to Explore */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Facilities You'll Explore
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilitiesToExplore.map((facility, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <h4 className="font-semibold text-primary mb-3">{facility.facility}</h4>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">{facility.description}</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {facility.available}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Programs */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-8 text-center">
              Special Programs & Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specialPrograms.map((program, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{program.program}</h4>
                  <p className="text-sm mb-3 opacity-90">{program.description}</p>
                  <div className="flex justify-between text-xs">
                    <span><strong>Target:</strong> {program.target}</span>
                    <span><strong>Duration:</strong> {program.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parent Testimonials */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              What Parents Say About Our Open Days
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{testimonial.parent}</p>
                    <p className="text-gray-600 text-sm">{testimonial.student}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              How to Prepare for Your Visit
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">What to Bring</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• List of questions about programs</li>
                  <li>• Child's academic records (if available)</li>
                  <li>• Notebook for taking notes</li>
                  <li>• Comfortable walking shoes</li>
                  <li>• Camera for memories (with permission)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-4">What to Expect</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Warm welcome from our community</li>
                  <li>• Comprehensive campus tour</li>
                  <li>• Direct interaction with teachers</li>
                  <li>• Student performances and demonstrations</li>
                  <li>• Application guidance and support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Registration & Contact */}
          <div className="text-center">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Register for Our Next Open Day
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Spaces are limited to ensure a quality experience for all families. 
              Register early to secure your spot and receive detailed information about your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <GlidingButton className="bg-secondary px-8">
                Register Now
                <CircleArrowRight />
              </GlidingButton>
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Download Information Pack
              </GlidingButton>
              <GlidingButton className="bg-primary px-8">
                Call to Register
              </GlidingButton>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h4 className="font-semibold text-primary mb-3">Contact Information</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Phone:</strong> +234 8161721618</p>
                <p><strong>Email:</strong> admissions@shinninglightschool.com</p>
                <p><strong>Address:</strong> Rasonwa, Via Ilese – Ijebu Ode</p>
                <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="border-l-4 border-secondary pl-6">
            <h4 className="text-lg font-semibold text-primary mb-3">Important Notes</h4>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>• Registration is required for all Open Day events</p>
              <p>• Parking is available on campus for visitors</p>
              <p>• Light refreshments will be provided</p>
              <p>• Children are welcome and encouraged to attend</p>
              <p>• Individual appointments available upon request</p>
              <p>• COVID-19 safety protocols may apply</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
