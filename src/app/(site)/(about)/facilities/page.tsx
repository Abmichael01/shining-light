import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight } from 'lucide-react'
import React from 'react'

export default function FacilitiesPage() {
  const facilities = [
    {
      name: "Modern Classrooms",
      description: "Well-ventilated, spacious classrooms equipped with modern teaching aids, interactive whiteboards, and comfortable seating arrangements for optimal learning.",
      icon: "🏫",
      features: ["Interactive Whiteboards", "Air Conditioning", "Ergonomic Furniture", "Adequate Lighting", "Audio-Visual Equipment"]
    },
    {
      name: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology laboratories with modern equipment for hands-on learning experiences and practical demonstrations.",
      icon: "🔬",
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Safety Equipment", "Modern Instruments"]
    },
    {
      name: "Computer Laboratory",
      description: "State-of-the-art computer lab with high-speed internet connectivity, latest software, and modern hardware for digital literacy programs.",
      icon: "💻",
      features: ["50+ Computers", "High-Speed Internet", "Latest Software", "Programming Tools", "Digital Learning Platforms"]
    },
    {
      name: "Library & Resource Center",
      description: "Extensive collection of books, journals, digital resources, and quiet study areas to support comprehensive learning and research.",
      icon: "📚",
      features: ["10,000+ Books", "Digital Resources", "Reading Areas", "Research Support", "E-Library Access"]
    },
    {
      name: "Sports Complex",
      description: "Multi-purpose sports facilities including football field, basketball court, athletics track, and indoor games area for physical development.",
      icon: "⚽",
      features: ["Football Field", "Basketball Court", "Athletics Track", "Indoor Games", "Sports Equipment"]
    },
    {
      name: "Auditorium",
      description: "Modern auditorium with excellent acoustics and seating capacity for assemblies, presentations, cultural events, and graduation ceremonies.",
      icon: "🎭",
      features: ["500 Seating Capacity", "Sound System", "Projection Equipment", "Stage Lighting", "Air Conditioning"]
    },
    {
      name: "Medical Center",
      description: "Well-equipped medical facility with qualified nursing staff to handle health emergencies and routine medical care for students and staff.",
      icon: "🏥",
      features: ["Qualified Nurse", "First Aid Equipment", "Emergency Care", "Health Records", "Regular Check-ups"]
    },
    {
      name: "Cafeteria",
      description: "Hygienic and spacious dining facility serving nutritious meals and snacks, promoting healthy eating habits among students.",
      icon: "🍽️",
      features: ["Nutritious Meals", "Hygienic Environment", "Spacious Dining", "Healthy Snacks", "Special Diets"]
    },
    {
      name: "Transport Services",
      description: "Safe and reliable school bus services covering various routes across the state with trained drivers and route supervisors.",
      icon: "🚌",
      features: ["Multiple Routes", "Trained Drivers", "Route Supervisors", "Regular Maintenance", "Safety Standards"]
    }
  ]

  const featuredImages = [
    { name: "Main Building", description: "Our impressive main academic building" },
    { name: "Science Labs", description: "Modern laboratory facilities" },
    { name: "Sports Field", description: "Expansive sports and recreation area" },
    { name: "Library", description: "Quiet study and research environment" }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Our Facilities"
        subtitle="Modern infrastructure designed to enhance learning and development"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Facilities' }
        ]}
        backgroundImage="/hero1.jpg"
      />
      
      <ContentSection>
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              World-Class Learning Environment
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              Our state-of-the-art facilities provide the perfect environment for learning, growth, and development. 
              We believe that exceptional facilities contribute significantly to educational excellence and student success.
            </p>
          </div>

          {/* Featured Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4">{facility.icon}</div>
                  <h3 className="text-xl font-fancy font-semibold text-primary mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {facility.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Facility Images Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Take a Visual Tour
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{image.name} Image</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary mb-1">{image.name}</h4>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Security Section */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">Safety & Security</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold mb-2">24/7 Security</h4>
                <p className="text-sm">Round-the-clock security personnel and CCTV monitoring for complete safety.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🚨</div>
                <h4 className="font-semibold mb-2">Emergency Systems</h4>
                <p className="text-sm">Fire safety equipment, emergency alarms, and evacuation procedures in place.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🏥</div>
                <h4 className="font-semibold mb-2">Health & Safety</h4>
                <p className="text-sm">Regular health checks, sanitization protocols, and medical emergency preparedness.</p>
              </div>
            </div>
          </div>

          {/* Accessibility & Sustainability */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-fancy font-bold text-primary mb-4">Accessibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Wheelchair accessible buildings and pathways</li>
                <li>• Ramps and elevators for easy mobility</li>
                <li>• Accessible restroom facilities</li>
                <li>• Inclusive learning environments</li>
                <li>• Special needs support infrastructure</li>
              </ul>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-fancy font-bold text-primary mb-4">Sustainability</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Solar power systems for energy efficiency</li>
                <li>• Water recycling and conservation systems</li>
                <li>• Waste management and recycling programs</li>
                <li>• Green spaces and gardens</li>
                <li>• Eco-friendly building materials</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Experience Our Facilities
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We invite you to visit our campus and see firsthand how our exceptional facilities 
              support student learning and development. Schedule a tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Schedule a Visit
                <CircleArrowRight />
              </GlidingButton>
              <GlidingButton className="bg-secondary px-8">
                <a href="/virtual-tour">Virtual Tour</a>
              </GlidingButton>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
