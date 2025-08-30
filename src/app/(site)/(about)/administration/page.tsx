import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import { Separator } from '@/components/ui/separator'
import React from 'react'

interface AdministratorProps {
  name: string
  position: string
  qualifications: string[]
  bio: string
  image?: string
}

const Administrator = ({ name, position, qualifications, bio, image }: AdministratorProps) => (
  <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <span className="text-gray-500">Photo</span>
          )}
        </div>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-2xl font-fancy font-bold text-primary mb-2">{name}</h3>
        <p className="text-secondary font-semibold mb-4 text-lg">{position}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Qualifications:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-700 leading-relaxed">{bio}</p>
      </div>
    </div>
  </div>
)

export default function AdministrationPage() {
  const administrators = [
    {
      name: "Dr. Adebayo Johnson",
      position: "Principal",
      qualifications: [
        "Ph.D in Educational Management, University of Lagos",
        "M.Ed in Curriculum Studies, University of Ibadan", 
        "B.Ed in Mathematics, Obafemi Awolowo University",
        "Certificate in Educational Leadership, Harvard Graduate School"
      ],
      bio: "Dr. Johnson brings over 20 years of educational leadership experience to Shining Light School. His vision for student-centered learning and character development has shaped our institution's approach to education. Under his leadership, the school has achieved numerous academic milestones and maintained its position as a leading educational institution in Ogun State."
    },
    {
      name: "Mrs. Funmilayo Adebisi",
      position: "Vice Principal (Academics)",
      qualifications: [
        "M.Ed in Educational Psychology, University of Lagos",
        "B.Sc in Biology, University of Ibadan",
        "PGDE, National Teachers Institute",
        "Certificate in Curriculum Development"
      ],
      bio: "Mrs. Adebisi oversees our academic programs and curriculum implementation. She is passionate about ensuring every student reaches their full potential through innovative teaching methods. Her expertise in educational psychology has been instrumental in developing our student support systems."
    },
    {
      name: "Mr. Olumide Ogundimu",
      position: "Vice Principal (Administration)",
      qualifications: [
        "M.B.A in Management, Lagos State University",
        "B.Sc in Business Administration, Covenant University",
        "Diploma in Educational Management",
        "Certificate in Financial Management"
      ],
      bio: "Mr. Ogundimu manages the administrative functions of the school, ensuring smooth operations and maintaining our high standards of service delivery. His business acumen and organizational skills have streamlined our administrative processes significantly."
    },
    {
      name: "Mrs. Grace Nwosu",
      position: "Head of Studies",
      qualifications: [
        "M.Ed in Guidance and Counselling, University of Lagos",
        "B.A in English Language, University of Nigeria, Nsukka",
        "Certificate in Educational Leadership",
        "Diploma in Conflict Resolution"
      ],
      bio: "Mrs. Nwosu coordinates our academic departments and provides guidance to both students and faculty to maintain our tradition of excellence. Her counselling expertise has been vital in supporting student welfare and academic success."
    }
  ]

  const departments = [
    {
      name: "Academic Affairs",
      head: "Mrs. Funmilayo Adebisi",
      description: "Oversees curriculum development, academic standards, examinations, and student progress monitoring.",
      responsibilities: [
        "Curriculum Development & Implementation",
        "Academic Standards & Quality Assurance", 
        "Examination Coordination",
        "Teacher Training & Development",
        "Student Academic Progress Monitoring"
      ]
    },
    {
      name: "Student Affairs",
      head: "Mrs. Grace Nwosu",
      description: "Manages student welfare, disciplinary matters, extracurricular activities, and counseling services.",
      responsibilities: [
        "Student Welfare & Counselling",
        "Disciplinary Management",
        "Extracurricular Activities Coordination",
        "Student Leadership Development",
        "Parent-Student Relations"
      ]
    },
    {
      name: "Finance & Administration",
      head: "Mr. Olumide Ogundimu", 
      description: "Handles financial management, facilities maintenance, human resources, and general administration.",
      responsibilities: [
        "Financial Planning & Management",
        "Facilities Management & Maintenance",
        "Human Resources Administration",
        "Procurement & Supply Chain",
        "General Administrative Operations"
      ]
    },
    {
      name: "Information Technology",
      head: "Mr. Biodun Akinola",
      description: "Manages school technology infrastructure, e-learning platforms, and digital resources.",
      responsibilities: [
        "IT Infrastructure Management",
        "E-Learning Platform Administration",
        "Digital Resource Development",
        "Technology Training & Support",
        "Data Management & Security"
      ]
    }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Administration"
        subtitle="Meet the dedicated leaders who guide our institution towards excellence"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Administration' }
        ]}
        backgroundImage="/hero3.jpg"
      />
      
      <ContentSection>
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Our Leadership Team
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              Our administrative team combines decades of educational experience with a shared 
              commitment to excellence. They work tirelessly to ensure that Shining Light School 
              remains at the forefront of educational innovation while maintaining our core values.
            </p>
          </div>

          <div className="space-y-8">
            {administrators.map((admin, index) => (
              <Administrator key={index} {...admin} />
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-fancy font-bold text-primary mb-8 text-center">
              Administrative Departments
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-fancy font-semibold text-primary mb-2">{dept.name}</h4>
                  <p className="text-secondary font-medium mb-3">Head: {dept.head}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{dept.description}</p>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      {dept.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-semibold mb-6 text-center">Our Management Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-3">Collaborative Leadership</h4>
                <p className="text-sm">We believe in shared decision-making and collaborative approaches to school management.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-3">Continuous Improvement</h4>
                <p className="text-sm">We are committed to ongoing professional development and institutional growth.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-3">Student-Centered Focus</h4>
                <p className="text-sm">Every administrative decision is made with student welfare and success in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}