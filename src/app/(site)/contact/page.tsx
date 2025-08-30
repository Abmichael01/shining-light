"use client"

import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import React, { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Rasonwa, Via Ilese – Ijebu Ode", "Ogun State, Nigeria"],
      color: "bg-blue-100"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+234 8161721618", "+234 803 XXX XXXX"],
      color: "bg-green-100"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["enquiry@shinninglightschool.com", "admissions@shinninglightschool.com"],
      color: "bg-purple-100"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 4:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
      color: "bg-yellow-100"
    }
  ]

  const departments = [
    {
      department: "Admissions Office",
      contact: "admissions@shinninglightschool.com",
      phone: "+234 8161721618",
      description: "For all admission-related inquiries, applications, and school visits"
    },
    {
      department: "Academic Affairs",
      contact: "academics@shinninglightschool.com", 
      phone: "+234 803 XXX XXXX",
      description: "For curriculum questions, academic programs, and educational matters"
    },
    {
      department: "Finance Office",
      contact: "finance@shinninglightschool.com",
      phone: "+234 805 XXX XXXX",
      description: "For fee payments, financial aid, and payment plan inquiries"
    },
    {
      department: "Student Affairs",
      contact: "students@shinninglightschool.com",
      phone: "+234 807 XXX XXXX",
      description: "For student welfare, disciplinary matters, and extracurricular activities"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className='w-full'>
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with us. We're here to help and answer any questions you may have."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact' }
        ]}
        backgroundImage="/hero3.jpg"
      />
      
      <ContentSection>
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              We're Here to Help
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              Whether you're a prospective parent, current student, or community member, 
              we welcome your questions and look forward to connecting with you. 
              Reach out to us through any of the methods below.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className={`${info.color} p-6 rounded-lg text-center hover:shadow-lg transition-shadow`}>
                <div className="text-primary mb-4 flex justify-center">{info.icon}</div>
                <h3 className="font-semibold text-primary mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-fancy font-bold text-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="finance">Finance</option>
                      <option value="student-affairs">Student Affairs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <GlidingButton type="submit" className="bg-primary w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </GlidingButton>
              </form>
            </div>

            {/* Department Contacts */}
            <div>
              <h3 className="text-2xl font-fancy font-bold text-primary mb-6">Direct Department Contacts</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-primary mb-2">{dept.department}</h4>
                    <p className="text-gray-700 text-sm mb-3">{dept.description}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <a href={`mailto:${dept.contact}`} className="text-primary hover:underline">
                          {dept.contact}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Find Us on the Map
            </h3>
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Coming Soon</p>
              {/* You can integrate Google Maps or other map service here */}
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Rasonwa, Via Ilese – Ijebu Ode, Ogun State, Nigeria
              </p>
              <p className="text-sm text-gray-600">
                We're easily accessible by public transportation and private vehicles. 
                Parking is available on campus for visitors.
              </p>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-secondary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-6 text-center">
              Emergency Contacts
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">School Emergency</h4>
                <p className="text-sm opacity-90">+234 8161721618</p>
                <p className="text-xs opacity-75">24/7 Emergency Line</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Medical Emergency</h4>
                <p className="text-sm opacity-90">199 (Emergency Services)</p>
                <p className="text-xs opacity-75">National Emergency Number</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">School Security</h4>
                <p className="text-sm opacity-90">+234 803 XXX XXXX</p>
                <p className="text-xs opacity-75">Campus Security</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">What are your visiting hours?</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Our office is open Monday to Friday, 8:00 AM to 4:00 PM, and Saturday 9:00 AM to 1:00 PM. 
                  Campus visits should be scheduled in advance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">How quickly do you respond to inquiries?</h4>
                <p className="text-gray-700 text-sm mb-4">
                  We typically respond to email inquiries within 24-48 hours during business days. 
                  For urgent matters, please call our main line.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Can I schedule a campus tour?</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Yes! We encourage prospective families to visit our campus. 
                  Contact our admissions office to schedule a personalized tour.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Do you have parking available?</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Yes, we have designated parking areas for visitors. 
                  Please check in at the main office upon arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
