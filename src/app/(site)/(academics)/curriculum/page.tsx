import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight, BookOpen, Target, Users, Award } from 'lucide-react'
import React from 'react'

export default function CurriculumPage() {
  const primaryCurriculum = [
    {
      subject: "English Language",
      description: "Reading, writing, speaking, and listening skills development",
      objectives: ["Phonics and word recognition", "Reading comprehension", "Creative writing", "Oral communication"],
      assessment: "Continuous assessment and termly examinations"
    },
    {
      subject: "Mathematics",
      description: "Number concepts, problem-solving, and logical thinking",
      objectives: ["Number operations", "Geometry and shapes", "Measurement", "Data handling"],
      assessment: "Regular practice tests and problem-solving tasks"
    },
    {
      subject: "Basic Science",
      description: "Introduction to scientific concepts and observation skills",
      objectives: ["Living and non-living things", "Weather and seasons", "Simple experiments", "Environmental awareness"],
      assessment: "Practical work and theory assessments"
    },
    {
      subject: "Social Studies",
      description: "Understanding community, culture, and social relationships",
      objectives: ["Family and community", "Nigerian culture", "Basic geography", "Civic education"],
      assessment: "Projects and continuous assessment"
    }
  ]

  const secondaryCurriculum = [
    {
      category: "Core Subjects",
      subjects: [
        { name: "English Language", description: "Advanced language skills and literature" },
        { name: "Mathematics", description: "Algebra, geometry, statistics, and calculus" },
        { name: "Civic Education", description: "Citizenship and democratic values" },
        { name: "Computer Studies", description: "ICT skills and digital literacy" }
      ]
    },
    {
      category: "Sciences",
      subjects: [
        { name: "Physics", description: "Mechanics, waves, electricity, and modern physics" },
        { name: "Chemistry", description: "Organic, inorganic, and physical chemistry" },
        { name: "Biology", description: "Life processes, ecology, and human biology" },
        { name: "Further Mathematics", description: "Advanced mathematical concepts" }
      ]
    },
    {
      category: "Arts & Humanities",
      subjects: [
        { name: "Literature in English", description: "Poetry, prose, and drama analysis" },
        { name: "Government", description: "Political systems and governance" },
        { name: "Economics", description: "Market systems and economic principles" },
        { name: "Geography", description: "Physical and human geography" }
      ]
    },
    {
      category: "Languages",
      subjects: [
        { name: "Yoruba", description: "Local language and cultural studies" },
        { name: "French", description: "Foreign language communication" },
        { name: "Igbo", description: "Indigenous language preservation" },
        { name: "Hausa", description: "National language integration" }
      ]
    }
  ]

  const curriculumFeatures = [
    {
      feature: "Nigerian Curriculum",
      description: "Aligned with National Educational Research and Development Council (NERDC) standards",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-100"
    },
    {
      feature: "International Standards",
      description: "Incorporating global best practices and 21st-century skills",
      icon: <Target className="w-8 h-8" />,
      color: "bg-green-100"
    },
    {
      feature: "Character Development",
      description: "Moral education and value-based learning integrated across subjects",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-100"
    },
    {
      feature: "Excellence Focus",
      description: "Preparing students for academic excellence and future success",
      icon: <Award className="w-8 h-8" />,
      color: "bg-yellow-100"
    }
  ]

  const teachingMethodology = [
    {
      method: "Interactive Learning",
      description: "Student-centered approach with active participation and engagement",
      examples: ["Group discussions", "Problem-solving sessions", "Peer learning", "Hands-on activities"]
    },
    {
      method: "Technology Integration",
      description: "Digital tools and resources to enhance learning experiences",
      examples: ["Smart boards", "Educational software", "Online resources", "Virtual experiments"]
    },
    {
      method: "Practical Application",
      description: "Real-world connections and practical skill development",
      examples: ["Laboratory work", "Field trips", "Projects", "Internships"]
    },
    {
      method: "Assessment Diversity",
      description: "Multiple assessment methods to evaluate student progress",
      examples: ["Written tests", "Practical exams", "Projects", "Presentations"]
    }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Our Curriculum"
        subtitle="A comprehensive educational program designed to nurture academic excellence and character development"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Academics', href: '/academics' },
          { name: 'Curriculum' }
        ]}
        backgroundImage="/hero1.jpg"
      />
      
      <ContentSection>
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Excellence Through Education
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              Our curriculum is carefully designed to provide students with a solid foundation in academics 
              while developing critical thinking skills, creativity, and strong moral values. We follow the 
              Nigerian National Curriculum enhanced with international best practices.
            </p>
          </div>

          {/* Curriculum Features */}
          <div className="grid md:grid-cols-4 gap-6">
            {curriculumFeatures.map((feature, index) => (
              <div key={index} className={`${feature.color} p-6 rounded-lg text-center hover:shadow-lg transition-shadow`}>
                <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="font-semibold text-primary mb-3">{feature.feature}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Primary School Curriculum */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Primary School Curriculum
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {primaryCurriculum.map((subject, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-primary">
                  <h4 className="text-xl font-semibold text-primary mb-3">{subject.subject}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">{subject.description}</p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Key Learning Objectives:</h5>
                    <ul className="space-y-1">
                      {subject.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600"><strong>Assessment:</strong> {subject.assessment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary School Curriculum */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Secondary School Curriculum
            </h3>
            <div className="space-y-8">
              {secondaryCurriculum.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-secondary mb-4">{category.category}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.subjects.map((subject, idx) => (
                      <div key={idx} className="border-l-4 border-secondary pl-4">
                        <h5 className="font-semibold text-primary mb-1">{subject.name}</h5>
                        <p className="text-gray-700 text-sm">{subject.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching Methodology */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Our Teaching Methodology
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {teachingMethodology.map((method, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">{method.method}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">{method.description}</p>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Examples:</h5>
                    <div className="flex flex-wrap gap-2">
                      {method.examples.map((example, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Goals */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">
              Our Curriculum Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-3">Academic Excellence</h4>
                <p className="text-sm opacity-90">Achieve high standards in all subject areas and prepare students for further education</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-3">Character Development</h4>
                <p className="text-sm opacity-90">Build strong moral values, integrity, and responsible citizenship</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-3">21st Century Skills</h4>
                <p className="text-sm opacity-90">Develop critical thinking, creativity, collaboration, and communication skills</p>
              </div>
            </div>
          </div>

          {/* Examination Preparation */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Examination Preparation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-primary mb-3">BECE Preparation</h4>
                <p className="text-gray-700 text-sm mb-4">Comprehensive preparation for Basic Education Certificate Examination</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Mock examinations</li>
                  <li>• Past questions practice</li>
                  <li>• Intensive revision</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-primary mb-3">WAEC Preparation</h4>
                <p className="text-gray-700 text-sm mb-4">Thorough preparation for West African Examinations Council tests</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Subject-specific coaching</li>
                  <li>• Practical examinations</li>
                  <li>• Result prediction tests</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-primary mb-3">NECO Preparation</h4>
                <p className="text-gray-700 text-sm mb-4">Strategic preparation for National Examinations Council assessments</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Alternative examination prep</li>
                  <li>• Internal assessments</li>
                  <li>• Continuous evaluation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Experience Our Curriculum
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Discover how our comprehensive curriculum can provide your child with the foundation 
              for academic excellence and lifelong success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlidingButton className="bg-secondary px-8">
                Download Curriculum Guide
                <CircleArrowRight />
              </GlidingButton>
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Schedule School Visit
              </GlidingButton>
              <GlidingButton className="bg-primary px-8">
                <a href="/virtual-tour">Virtual Tour</a>
              </GlidingButton>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
