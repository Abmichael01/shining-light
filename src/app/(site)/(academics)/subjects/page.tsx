import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import CustomTabs from '@/components/CustomUi/CustomTabs'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function SubjectsPage() {
  const primarySubjects = [
    {
      category: "Core Subjects",
      subjects: [
        {
          name: "English Language",
          code: "ENG",
          description: "Reading, writing, speaking, and communication skills",
          topics: ["Phonics", "Grammar", "Composition", "Reading Comprehension", "Oral English"],
          assessment: "Continuous assessment, termly exams, and oral tests"
        },
        {
          name: "Mathematics", 
          code: "MTH",
          description: "Number concepts, problem-solving, and mathematical reasoning",
          topics: ["Number Operations", "Fractions", "Geometry", "Measurement", "Statistics"],
          assessment: "Problem-solving tasks, mental maths, and written exams"
        },
        {
          name: "Basic Science",
          code: "BSC",
          description: "Introduction to scientific concepts and observation",
          topics: ["Living Things", "Matter", "Energy", "Environment", "Simple Machines"],
          assessment: "Practical work, experiments, and theory tests"
        }
      ]
    },
    {
      category: "Social Studies",
      subjects: [
        {
          name: "Social Studies",
          code: "SOS",
          description: "Understanding society, culture, and citizenship",
          topics: ["Family & Community", "Nigerian Culture", "Geography", "History", "Civic Education"],
          assessment: "Projects, presentations, and written assessments"
        },
        {
          name: "Religious Studies",
          code: "CRS/IRS",
          description: "Moral and spiritual development",
          topics: ["Biblical/Quranic Stories", "Moral Lessons", "Character Building", "Prayer", "Values"],
          assessment: "Memory verses, moral discussions, and written tests"
        }
      ]
    },
    {
      category: "Creative Arts",
      subjects: [
        {
          name: "Cultural & Creative Arts",
          code: "CCA",
          description: "Artistic expression and cultural appreciation",
          topics: ["Drawing", "Painting", "Music", "Drama", "Dance", "Craft"],
          assessment: "Practical demonstrations and creative projects"
        },
        {
          name: "Physical Education",
          code: "PHE",
          description: "Physical fitness and sports development",
          topics: ["Athletics", "Ball Games", "Gymnastics", "Health Education", "Team Sports"],
          assessment: "Practical demonstrations and fitness tests"
        }
      ]
    }
  ]

  const secondarySubjects = [
    {
      category: "Core/Compulsory Subjects",
      subjects: [
        {
          name: "English Language",
          code: "ENG",
          description: "Advanced language skills and literature appreciation",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Grammar", "Composition", "Comprehension", "Literature", "Oral English"],
          career: "All fields require strong English skills"
        },
        {
          name: "Mathematics",
          code: "MTH", 
          description: "Mathematical concepts and problem-solving",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Algebra", "Geometry", "Statistics", "Trigonometry", "Calculus"],
          career: "Sciences, Engineering, Technology, Finance"
        },
        {
          name: "Civic Education",
          code: "CIV",
          description: "Citizenship and democratic principles",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Democracy", "Human Rights", "Rule of Law", "Citizenship", "Governance"],
          career: "Law, Politics, Public Service, Social Work"
        },
        {
          name: "Computer Studies",
          code: "CMP",
          description: "Information and Communication Technology",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Basic Computing", "Programming", "Internet", "Software Applications", "Digital Literacy"],
          career: "ICT, Programming, Digital Marketing, Data Analysis"
        }
      ]
    },
    {
      category: "Science Subjects",
      subjects: [
        {
          name: "Physics",
          code: "PHY",
          description: "Study of matter, energy, and their interactions",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Mechanics", "Heat", "Light", "Sound", "Electricity", "Modern Physics"],
          career: "Engineering, Medicine, Technology, Research"
        },
        {
          name: "Chemistry",
          code: "CHE",
          description: "Study of substances and their properties",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Atomic Structure", "Chemical Bonding", "Acids & Bases", "Organic Chemistry", "Electrochemistry"],
          career: "Medicine, Pharmacy, Chemical Engineering, Research"
        },
        {
          name: "Biology",
          code: "BIO",
          description: "Study of living organisms and life processes",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Cell Biology", "Genetics", "Ecology", "Human Biology", "Plant Biology"],
          career: "Medicine, Nursing, Agriculture, Biotechnology"
        },
        {
          name: "Further Mathematics",
          code: "F-MTH",
          description: "Advanced mathematical concepts",
          levels: "SSS 1-3",
          topics: ["Advanced Algebra", "Calculus", "Statistics", "Mechanics", "Pure Mathematics"],
          career: "Engineering, Computer Science, Physics, Economics"
        }
      ]
    },
    {
      category: "Arts & Humanities",
      subjects: [
        {
          name: "Literature in English",
          code: "LIT",
          description: "Study of literary works and critical analysis",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Poetry", "Prose", "Drama", "Literary Devices", "Critical Analysis"],
          career: "Journalism, Law, Education, Creative Writing"
        },
        {
          name: "Government",
          code: "GOV",
          description: "Political systems and governance structures",
          levels: "SSS 1-3",
          topics: ["Political Theory", "Comparative Government", "Nigerian Government", "International Relations", "Public Administration"],
          career: "Law, Politics, Diplomacy, Public Service"
        },
        {
          name: "Economics",
          code: "ECO",
          description: "Economic principles and market systems",
          levels: "SSS 1-3",
          topics: ["Microeconomics", "Macroeconomics", "Development Economics", "International Trade", "Economic Planning"],
          career: "Banking, Finance, Business, Economic Analysis"
        },
        {
          name: "Geography",
          code: "GEO",
          description: "Physical and human geography",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Physical Geography", "Human Geography", "Environmental Studies", "Map Reading", "Climate"],
          career: "Urban Planning, Environmental Studies, Surveying, Tourism"
        }
      ]
    },
    {
      category: "Languages",
      subjects: [
        {
          name: "Yoruba Language",
          code: "YOR",
          description: "Indigenous language and cultural studies",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Grammar", "Literature", "Culture", "Oral Tradition", "Modern Usage"],
          career: "Education, Cultural Preservation, Media, Translation"
        },
        {
          name: "French Language",
          code: "FRE",
          description: "Foreign language communication",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Grammar", "Conversation", "Literature", "Culture", "Translation"],
          career: "Diplomacy, International Business, Tourism, Translation"
        },
        {
          name: "Igbo Language",
          code: "IGB",
          description: "Indigenous language preservation",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Grammar", "Literature", "Culture", "Oral Tradition", "Modern Application"],
          career: "Education, Media, Cultural Studies, Literature"
        }
      ]
    },
    {
      category: "Vocational Subjects",
      subjects: [
        {
          name: "Agricultural Science",
          code: "AGR",
          description: "Modern farming and agricultural practices",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Crop Production", "Animal Husbandry", "Soil Science", "Farm Management", "Agricultural Economics"],
          career: "Agriculture, Agribusiness, Food Technology, Veterinary"
        },
        {
          name: "Technical Drawing",
          code: "TD",
          description: "Engineering drawing and design",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Geometric Construction", "Orthographic Projection", "Isometric Drawing", "Building Drawing", "Machine Drawing"],
          career: "Engineering, Architecture, Industrial Design, Construction"
        },
        {
          name: "Visual Arts",
          code: "VA",
          description: "Creative and applied arts",
          levels: "JSS 1-3, SSS 1-3",
          topics: ["Drawing", "Painting", "Sculpture", "Graphics", "Textile Design"],
          career: "Fine Arts, Graphic Design, Fashion Design, Animation"
        }
      ]
    }
  ]

  const SubjectCard = ({ subject }: { subject: any }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-primary">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-semibold text-primary">{subject.name}</h4>
        <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full font-semibold">
          {subject.code}
        </span>
      </div>
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{subject.description}</p>
      
      {subject.levels && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-800">Levels: </span>
          <span className="text-xs text-gray-600">{subject.levels}</span>
        </div>
      )}
      
      <div className="mb-4">
        <h5 className="font-semibold text-gray-800 mb-2 text-sm">Key Topics:</h5>
        <div className="flex flex-wrap gap-1">
          {subject.topics.map((topic: string, idx: number) => (
            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {topic}
            </span>
          ))}
        </div>
      </div>
      
      <div className="border-t pt-3">
        <h5 className="font-semibold text-gray-800 mb-1 text-sm">
          {subject.career ? 'Career Paths:' : 'Assessment:'}
        </h5>
        <p className="text-xs text-gray-600 leading-relaxed">
          {subject.career || subject.assessment}
        </p>
      </div>
    </div>
  )

  const primaryContent = (
    <div className="space-y-8">
      {primarySubjects.map((category, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold text-secondary mb-6">{category.category}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subjects.map((subject, idx) => (
              <SubjectCard key={idx} subject={subject} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const secondaryContent = (
    <div className="space-y-8">
      {secondarySubjects.map((category, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold text-secondary mb-6">{category.category}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {category.subjects.map((subject, idx) => (
              <SubjectCard key={idx} subject={subject} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const tabs = [
    {
      id: 'primary',
      label: 'Primary School',
      content: primaryContent
    },
    {
      id: 'secondary',
      label: 'Secondary College',
      content: secondaryContent
    }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Subjects Offered"
        subtitle="Comprehensive academic programs designed to prepare students for future success"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Academics', href: '/academics' },
          { name: 'Subjects Offered' }
        ]}
        backgroundImage="/hero4.jpg"
      />
      
      <ContentSection>
        <div className="space-y-12">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Academic Excellence Through Diverse Learning
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              At Shining Light School, we offer a comprehensive range of subjects designed to provide 
              students with a well-rounded education. Our curriculum follows the Nigerian National 
              Educational standards while incorporating modern teaching methodologies.
            </p>
          </div>

          <CustomTabs tabs={tabs} defaultTab="primary" />

          {/* Subject Selection Guidance */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Subject Selection Guidance
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-3">Science Track</h4>
                <p className="text-gray-700 text-sm mb-3">For students interested in medicine, engineering, and technology</p>
                <div className="text-xs space-y-1">
                  <p><strong>Core:</strong> English, Maths, Physics, Chemistry, Biology</p>
                  <p><strong>Optional:</strong> Further Maths, Geography, Computer Studies</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-3">Arts Track</h4>
                <p className="text-gray-700 text-sm mb-3">For students interested in humanities, law, and social sciences</p>
                <div className="text-xs space-y-1">
                  <p><strong>Core:</strong> English, Maths, Literature, Government</p>
                  <p><strong>Optional:</strong> Economics, Geography, Languages, CRS/IRS</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-3">Commercial Track</h4>
                <p className="text-gray-700 text-sm mb-3">For students interested in business, finance, and economics</p>
                <div className="text-xs space-y-1">
                  <p><strong>Core:</strong> English, Maths, Economics, Government</p>
                  <p><strong>Optional:</strong> Geography, Literature, Commerce, Accounting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Methods */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">
              Assessment & Evaluation
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Continuous Assessment</h4>
                <p className="text-sm opacity-90">Regular class tests, assignments, and participation</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Practical Work</h4>
                <p className="text-sm opacity-90">Laboratory experiments and hands-on activities</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Projects</h4>
                <p className="text-sm opacity-90">Research projects and creative assignments</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Examinations</h4>
                <p className="text-sm opacity-90">Mid-term and end-of-term examinations</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
