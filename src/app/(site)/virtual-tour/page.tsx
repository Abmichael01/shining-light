"use client"

import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { gsap } from "gsap"

export default function VirtualTourPage() {
  const [selectedLocation, setSelectedLocation] = useState('main-entrance')
  const [searchTerm, setSearchTerm] = useState('')

  const locations = [
    {
      id: 'main-entrance',
      name: 'Main Entrance',
      image: '/hero1.jpg',
      description: 'Welcome to Shining Light School - Our impressive main entrance sets the tone for excellence.'
    },
    {
      id: 'academic-buildings',
      name: 'Academic Buildings',
      children: [
        {
          id: 'primary-block',
          name: 'Primary School Block',
          image: '/hero2.jpg',
          description: 'Modern classrooms designed specifically for our young learners with age-appropriate facilities.'
        },
        {
          id: 'secondary-block',
          name: 'Secondary School Block',
          image: '/hero3.jpg',
          description: 'State-of-the-art facilities for our secondary students with advanced learning environments.'
        },
        {
          id: 'administration-block',
          name: 'Administration Block',
          image: '/hero4.jpg',
          description: 'Our administrative headquarters where school management and staff offices are located.'
        }
      ]
    },
    {
      id: 'laboratories',
      name: 'Science Laboratories',
      children: [
        {
          id: 'physics-lab',
          name: 'Physics Laboratory',
          image: '/hero1.jpg',
          description: 'Fully equipped physics lab with modern instruments for practical experiments and demonstrations.'
        },
        {
          id: 'chemistry-lab',
          name: 'Chemistry Laboratory',
          image: '/hero2.jpg',
          description: 'Advanced chemistry lab with safety equipment and modern apparatus for chemical experiments.'
        },
        {
          id: 'biology-lab',
          name: 'Biology Laboratory',
          image: '/hero3.jpg',
          description: 'Well-equipped biology lab with microscopes and specimens for life science studies.'
        },
        {
          id: 'computer-lab',
          name: 'Computer Laboratory',
          image: '/hero4.jpg',
          description: 'Modern ICT facility with latest computers and high-speed internet for digital learning.'
        }
      ]
    },
    {
      id: 'library',
      name: 'Library & Resource Center',
      image: '/hero1.jpg',
      description: 'Our extensive library with thousands of books and digital resources for research and study.'
    },
    {
      id: 'sports-facilities',
      name: 'Sports & Recreation',
      children: [
        {
          id: 'football-field',
          name: 'Football Field',
          image: '/hero2.jpg',
          description: 'Standard football pitch for training and inter-school competitions.'
        },
        {
          id: 'basketball-court',
          name: 'Basketball Court',
          image: '/hero3.jpg',
          description: 'Professional basketball court for sports activities and tournaments.'
        },
        {
          id: 'athletics-track',
          name: 'Athletics Track',
          image: '/hero4.jpg',
          description: 'Running track for athletics training and school sports events.'
        }
      ]
    },
    {
      id: 'dining-facilities',
      name: 'Dining Facilities',
      children: [
        {
          id: 'cafeteria',
          name: 'Main Cafeteria',
          image: '/hero1.jpg',
          description: 'Spacious dining hall serving nutritious meals in a hygienic environment.'
        },
        {
          id: 'kitchen',
          name: 'School Kitchen',
          image: '/hero2.jpg',
          description: 'Modern kitchen facilities where healthy meals are prepared daily.'
        }
      ]
    },
    {
      id: 'special-facilities',
      name: 'Special Facilities',
      children: [
        {
          id: 'auditorium',
          name: 'School Auditorium',
          image: '/hero3.jpg',
          description: 'Multi-purpose auditorium for assemblies, presentations, and cultural events.'
        },
        {
          id: 'medical-center',
          name: 'Medical Center',
          image: '/hero4.jpg',
          description: 'Well-equipped medical facility with qualified nursing staff for student healthcare.'
        },
        {
          id: 'music-room',
          name: 'Music & Arts Studio',
          image: '/hero1.jpg',
          description: 'Creative spaces for music lessons, art classes, and cultural activities.'
        }
      ]
    }
  ]

  // Animate image when selection changes
  useEffect(() => {
    gsap.fromTo(".tour-image", 
      { opacity: 0, scale: 1.1 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );
  }, [selectedLocation]);

  // Get all locations for search (flattened)
  const getAllLocations = () => {
    const allLocations: any[] = []
    locations.forEach(location => {
      if (location.children) {
        allLocations.push(...location.children)
      } else {
        allLocations.push(location)
      }
    })
    return allLocations
  }

  // Filter locations based on search
  const filteredLocations = getAllLocations().filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Get current location details
  const getCurrentLocation = () => {
    const allLocations = getAllLocations()
    return allLocations.find(loc => loc.id === selectedLocation) || allLocations[0]
  }

  const currentLocation = getCurrentLocation()

  const handleLocationClick = (locationId: string) => {
    setSelectedLocation(locationId)
  }

  return (
    <div className='w-full'>
      <PageHero 
        title="Virtual Tour"
        subtitle="Explore our campus from the comfort of your home"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Virtual Tour' }
        ]}
        backgroundImage="/hero1.jpg"
      />
      
      <ContentSection className="py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Discover Our Campus
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Take a virtual journey through our beautiful campus and explore the facilities 
              that make Shining Light School a premier educational institution.
            </p>
          </div>

          {/* Main Tour Interface */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Location Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Search Bar */}
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Location List */}
                <div className="max-h-96 overflow-y-auto">
                  {searchTerm ? (
                    // Show search results
                    <div className="p-2">
                      {filteredLocations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => handleLocationClick(location.id)}
                          className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                            selectedLocation === location.id
                              ? 'bg-primary text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <span className="font-medium">{location.name}</span>
                        </button>
                      ))}
                      {filteredLocations.length === 0 && (
                        <p className="text-gray-500 text-center py-4">No locations found</p>
                      )}
                    </div>
                  ) : (
                    // Show accordion structure
                    <Accordion type="single" collapsible className="w-full">
                      {locations.map((location, index) => (
                        <AccordionItem key={location.id} value={location.id} className="border-b-0">
                          {location.children ? (
                            <>
                              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                                <span className="font-medium text-gray-800">{location.name}</span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-0">
                                <div className="border-l-2 border-gray-200 ml-4">
                                  {location.children.map((child) => (
                                    <button
                                      key={child.id}
                                      onClick={() => handleLocationClick(child.id)}
                                      className={`w-full text-left p-3 pl-6 border-l-2 border-transparent hover:border-primary transition-colors ${
                                        selectedLocation === child.id
                                          ? 'bg-primary text-white border-primary'
                                          : 'hover:bg-gray-50'
                                      }`}
                                    >
                                      <span className="font-medium text-sm">{child.name}</span>
                                    </button>
                                  ))}
                                </div>
                              </AccordionContent>
                            </>
                          ) : (
                            <button
                              onClick={() => handleLocationClick(location.id)}
                              className={`w-full text-left p-4 transition-colors ${
                                selectedLocation === location.id
                                  ? 'bg-primary text-white'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <span className="font-medium">{location.name}</span>
                            </button>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Image Display */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Location Header */}
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-fancy font-bold text-primary mb-2">
                    {currentLocation?.name}
                  </h3>
                  <p className="text-gray-700">
                    {currentLocation?.description}
                  </p>
                </div>

                {/* Image Display */}
                <div className="relative">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={currentLocation?.image}
                      alt={currentLocation?.name}
                      className="w-full h-full object-cover tour-image"
                    />
                  </div>
                  
                  {/* Image Overlay with Location Name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h4 className="text-white text-xl font-semibold">
                      {currentLocation?.name}
                    </h4>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Features & Amenities</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Modern facilities and equipment</li>
                        <li>• Safe and secure environment</li>
                        <li>• Regular maintenance and upgrades</li>
                        <li>• Accessible design for all students</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Usage & Activities</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Daily academic activities</li>
                        <li>• Student clubs and societies</li>
                        <li>• Special events and programs</li>
                        <li>• Community engagement activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Statistics */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">
              Campus at a Glance
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Classrooms</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-sm opacity-90">Locations to Explore</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-sm opacity-90">Science Labs</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10</div>
                <div className="text-sm opacity-90">Acres of Campus</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              While our virtual tour gives you a great overview, nothing beats experiencing 
              our campus in person. Schedule a visit to see our facilities firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
                Schedule Campus Visit
              </button>
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
