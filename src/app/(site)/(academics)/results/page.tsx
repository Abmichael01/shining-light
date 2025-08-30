import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight, Search, Download, Trophy, TrendingUp } from 'lucide-react'
import React from 'react'

export default function ResultsPage() {
  const recentResults = [
    {
      year: "2023",
      exam: "WAEC",
      totalStudents: 45,
      distinction: 38,
      credit: 42,
      pass: 45,
      percentage: "100%",
      color: "bg-green-100"
    },
    {
      year: "2023", 
      exam: "NECO",
      totalStudents: 45,
      distinction: 35,
      credit: 40,
      pass: 44,
      percentage: "97.8%",
      color: "bg-blue-100"
    },
    {
      year: "2023",
      exam: "BECE",
      totalStudents: 38,
      distinction: 32,
      credit: 36,
      pass: 38,
      percentage: "100%",
      color: "bg-purple-100"
    }
  ]

  const performanceStats = [
    {
      metric: "Overall Pass Rate",
      value: "98.5%",
      description: "Students achieving minimum pass grades",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-green-600"
    },
    {
      metric: "Distinction Rate",
      value: "82%",
      description: "Students achieving A1-C6 in core subjects",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-blue-600"
    },
    {
      metric: "University Admission",
      value: "95%",
      description: "Graduates gaining university admission",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-purple-600"
    }
  ]

  const topPerformers = [
    {
      name: "Adebayo Kemi",
      year: "2023",
      achievement: "9 A1s in WAEC",
      course: "Medicine - University of Lagos",
      image: "/student1.jpg"
    },
    {
      name: "Okafor Chuma", 
      year: "2023",
      achievement: "8 A1s, 1 B2 in WAEC",
      course: "Engineering - University of Ibadan",
      image: "/student2.jpg"
    },
    {
      name: "Hassan Aisha",
      year: "2023", 
      achievement: "7 A1s, 2 B2s in WAEC",
      course: "Law - University of Lagos",
      image: "/student3.jpg"
    },
    {
      name: "Okwu David",
      year: "2023",
      achievement: "9 A1s in NECO",
      course: "Computer Science - Covenant University",
      image: "/student4.jpg"
    }
  ]

  const subjectPerformance = [
    { subject: "English Language", passRate: "100%", distinctionRate: "85%" },
    { subject: "Mathematics", passRate: "98%", distinctionRate: "80%" },
    { subject: "Physics", passRate: "95%", distinctionRate: "78%" },
    { subject: "Chemistry", passRate: "97%", distinctionRate: "82%" },
    { subject: "Biology", passRate: "100%", distinctionRate: "88%" },
    { subject: "Literature", passRate: "100%", distinctionRate: "90%" },
    { subject: "Economics", passRate: "98%", distinctionRate: "85%" },
    { subject: "Government", passRate: "100%", distinctionRate: "87%" }
  ]

  const yearlyTrends = [
    { year: "2019", passRate: "96%", distinction: "75%" },
    { year: "2020", passRate: "97%", distinction: "78%" },
    { year: "2021", passRate: "98%", distinction: "80%" },
    { year: "2022", passRate: "99%", distinction: "81%" },
    { year: "2023", passRate: "98.5%", distinction: "82%" }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Academic Results"
        subtitle="Celebrating excellence and achievement in academic performance"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Academics', href: '/academics' },
          { name: 'Results' }
        ]}
        backgroundImage="/hero2.jpg"
      />
      
      <ContentSection>
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Excellence in Academic Achievement
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              Our students consistently achieve outstanding results in national examinations, 
              demonstrating the effectiveness of our teaching methods and their dedication to learning. 
              We are proud of their achievements and the bright futures they are building.
            </p>
          </div>

          {/* Performance Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {performanceStats.map((stat, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <h4 className="font-semibold text-gray-800 mb-2">{stat.metric}</h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Recent Results */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              2023 Examination Results
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {recentResults.map((result, index) => (
                <div key={index} className={`${result.color} p-6 rounded-lg border-2 border-opacity-50`}>
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-primary mb-2">{result.exam} {result.year}</h4>
                    <div className="text-3xl font-bold text-secondary">{result.percentage}</div>
                    <p className="text-sm text-gray-600">Pass Rate</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Students:</span>
                      <span className="font-semibold">{result.totalStudents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distinctions (A1-C4):</span>
                      <span className="font-semibold">{result.distinction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Credits (A1-C6):</span>
                      <span className="font-semibold">{result.credit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Passed:</span>
                      <span className="font-semibold">{result.pass}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-8 text-center">
              Outstanding Performers 2023
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topPerformers.map((student, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{student.name}</h4>
                  <p className="text-sm mb-2 opacity-90">{student.achievement}</p>
                  <p className="text-xs opacity-75">{student.course}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Performance */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Subject Performance Analysis
            </h3>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Subject</th>
                    <th className="text-left p-4 font-semibold">Pass Rate</th>
                    <th className="text-left p-4 font-semibold">Distinction Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectPerformance.map((subject, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-gray-800">{subject.subject}</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                          {subject.passRate}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
                          {subject.distinctionRate}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Yearly Trends */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              5-Year Performance Trend
            </h3>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="grid md:grid-cols-5 gap-4">
                {yearlyTrends.map((year, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg text-primary mb-2">{year.year}</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-2xl font-bold text-green-600">{year.passRate}</p>
                        <p className="text-xs text-gray-600">Pass Rate</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-blue-600">{year.distinction}</p>
                        <p className="text-xs text-gray-600">Distinction</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Student Result Portal */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Check Your Results
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-700 text-center mb-6">
                Students and parents can access individual results through our secure portal. 
                Use your student ID and password to log in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlidingButton className="bg-primary px-8">
                  <Search className="w-4 h-4" />
                  Check Results Portal
                </GlidingButton>
                <GlidingButton className="bg-secondary px-8">
                  <Download className="w-4 h-4" />
                  Download Result Slip
                </GlidingButton>
              </div>
            </div>
          </div>

          {/* Awards and Recognition */}
          <div className="bg-yellow-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Awards & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-semibold text-primary mb-2">Best Performing School</h4>
                <p className="text-gray-700 text-sm">Ogun State Ministry of Education (2023)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-semibold text-primary mb-2">Excellence in Mathematics</h4>
                <p className="text-gray-700 text-sm">National Mathematics Competition (2023)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-primary mb-2">Outstanding WAEC Performance</h4>
                <p className="text-gray-700 text-sm">WAEC Excellence Award (2022, 2023)</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Join Our Success Story
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our exceptional results speak for themselves. Give your child the opportunity 
              to be part of our tradition of academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlidingButton className="bg-secondary px-8">
                Apply for Admission
                <CircleArrowRight />
              </GlidingButton>
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Download Prospectus
              </GlidingButton>
              <GlidingButton className="bg-primary px-8">
                Schedule Visit
              </GlidingButton>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
