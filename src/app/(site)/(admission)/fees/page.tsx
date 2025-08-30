import PageHero from '@/components/General/PageHero'
import ContentSection from '@/components/General/ContentSection'
import GlidingButton from '@/components/CustomUi/GlidingButton'
import { Separator } from '@/components/ui/separator'
import { CircleArrowRight, CreditCard, DollarSign, Calendar } from 'lucide-react'
import React from 'react'

export default function FeesPage() {
  const primaryFees = [
    {
      grade: "Pre-School (Nursery 1-2)",
      annual: "₦180,000",
      termly: "₦60,000",
      features: ["Basic education", "Meals", "Learning materials", "Playground access"]
    },
    {
      grade: "Primary 1-3",
      annual: "₦240,000",
      termly: "₦80,000",
      features: ["Core subjects", "Meals", "Learning materials", "Sports", "Basic ICT"]
    },
    {
      grade: "Primary 4-6",
      annual: "₦300,000",
      termly: "₦100,000",
      features: ["Extended curriculum", "Meals", "All materials", "Sports", "ICT Lab access", "Library access"]
    }
  ]

  const secondaryFees = [
    {
      grade: "JSS 1-3",
      annual: "₦420,000",
      termly: "₦140,000",
      features: ["Full curriculum", "Laboratory access", "ICT training", "Sports", "Library", "Exam preparation"]
    },
    {
      grade: "SSS 1-2",
      annual: "₦480,000",
      termly: "₦160,000",
      features: ["Specialized subjects", "All lab access", "Career guidance", "WAEC preparation", "University counseling"]
    },
    {
      grade: "SSS 3",
      annual: "₦540,000",
      termly: "₦180,000",
      features: ["Intensive WAEC/NECO prep", "University guidance", "All facilities", "Extra coaching", "Mock exams"]
    }
  ]

  const additionalFees = [
    { item: "Registration Fee (One-time)", amount: "₦15,000", required: true },
    { item: "Development Fee (Annual)", amount: "₦25,000", required: true },
    { item: "Uniform & Books", amount: "₦35,000", required: true },
    { item: "Examination Fee (Per term)", amount: "₦8,000", required: true },
    { item: "Transport (Optional)", amount: "₦45,000/term", required: false },
    { item: "Boarding (If available)", amount: "₦120,000/term", required: false },
    { item: "After-school activities", amount: "₦15,000/term", required: false },
    { item: "Extra lessons", amount: "₦20,000/term", required: false }
  ]

  const paymentPlans = [
    {
      plan: "Annual Payment",
      discount: "5% Discount",
      description: "Pay full year fees at once and save money",
      benefits: ["5% discount on tuition", "Priority enrollment", "No payment reminders"],
      color: "bg-green-100 border-green-300"
    },
    {
      plan: "Termly Payment",
      discount: "Standard Rate",
      description: "Pay fees at the beginning of each term",
      benefits: ["Manageable payments", "Flexible planning", "Standard processing"],
      color: "bg-blue-100 border-blue-300"
    },
    {
      plan: "Monthly Installments",
      discount: "2% Processing Fee",
      description: "Spread payments across 10 months",
      benefits: ["Smaller monthly amounts", "Budget-friendly", "Auto-debit available"],
      color: "bg-yellow-100 border-yellow-300"
    }
  ]

  const paymentMethods = [
    {
      method: "Bank Transfer",
      description: "Direct transfer to our school account",
      icon: "🏦",
      processing: "Free"
    },
    {
      method: "Online Payment",
      description: "Secure online payment through our portal",
      icon: "💳",
      processing: "1% fee"
    },
    {
      method: "Bank Draft",
      description: "Banker's draft payable to the school",
      icon: "📄",
      processing: "Free"
    },
    {
      method: "Cash Payment",
      description: "Direct payment at school finance office",
      icon: "💵",
      processing: "Free"
    }
  ]

  const scholarships = [
    {
      type: "Academic Excellence",
      criteria: "Top 5% in entrance examination",
      benefit: "25% tuition reduction",
      duration: "Maintained with good grades"
    },
    {
      type: "Sibling Discount",
      criteria: "Multiple children enrolled",
      benefit: "10% off for 2nd child, 15% for 3rd+",
      duration: "While both children are enrolled"
    },
    {
      type: "Staff Children",
      criteria: "Children of school employees",
      benefit: "30% tuition reduction",
      duration: "Duration of employment"
    },
    {
      type: "Need-based Assistance",
      criteria: "Demonstrated financial need",
      benefit: "Up to 20% reduction",
      duration: "Annual review required"
    }
  ]

  return (
    <div className='w-full'>
      <PageHero 
        title="Tuition & Fees"
        subtitle="Transparent pricing for quality education that shapes tomorrow's leaders"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Admission', href: '/admission' },
          { name: 'Tuition Fees' }
        ]}
        backgroundImage="/hero2.jpg"
      />
      
      <ContentSection>
        <div className="space-y-16">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-fancy font-bold text-primary mb-4">
              Investment in Excellence
            </h2>
            <Separator className="mb-6 mx-auto w-24" />
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
              At Shining Light School, we believe quality education is an investment in your child's future. 
              Our fee structure is designed to be transparent, competitive, and reflective of the exceptional 
              educational experience we provide.
            </p>
          </div>

          {/* Primary School Fees */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Primary School Fees
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {primaryFees.map((fee, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-primary text-white p-6 text-center">
                    <h4 className="text-xl font-semibold mb-2">{fee.grade}</h4>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">{fee.annual}</p>
                      <p className="text-sm opacity-90">Annual Fee</p>
                      <p className="text-lg">{fee.termly}/term</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Includes:</h5>
                    <ul className="space-y-2">
                      {fee.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary School Fees */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Secondary School Fees
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {secondaryFees.map((fee, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-secondary text-white p-6 text-center">
                    <h4 className="text-xl font-semibold mb-2">{fee.grade}</h4>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">{fee.annual}</p>
                      <p className="text-sm opacity-90">Annual Fee</p>
                      <p className="text-lg">{fee.termly}/term</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Includes:</h5>
                    <ul className="space-y-2">
                      {fee.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Fees */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Additional Fees & Services
            </h3>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Item</th>
                    <th className="text-left p-4 font-semibold">Amount</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalFees.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-gray-800">{fee.item}</td>
                      <td className="p-4 text-gray-700 font-semibold">{fee.amount}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          fee.required 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {fee.required ? 'Required' : 'Optional'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Plans */}
          <div>
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Flexible Payment Plans
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {paymentPlans.map((plan, index) => (
                <div key={index} className={`p-6 rounded-lg border-2 ${plan.color}`}>
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-semibold text-primary mb-2">{plan.plan}</h4>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {plan.discount}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-8 text-center">
              Payment Methods
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h4 className="font-semibold text-primary mb-2">{method.method}</h4>
                  <p className="text-gray-700 text-sm mb-3">{method.description}</p>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {method.processing}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarships & Discounts */}
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold mb-8 text-center">
              Scholarships & Discounts
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{scholarship.type}</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Criteria:</strong> {scholarship.criteria}</p>
                    <p><strong>Benefit:</strong> {scholarship.benefit}</p>
                    <p><strong>Duration:</strong> {scholarship.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-6 text-center">
              Payment Details
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-4">Bank Information</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Bank Name:</strong> First Bank Nigeria</p>
                  <p><strong>Account Name:</strong> Shining Light School</p>
                  <p><strong>Account Number:</strong> 2034567890</p>
                  <p><strong>Sort Code:</strong> 011151003</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-4">Payment Instructions</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Include student's name in payment description</li>
                  <li>• Send payment confirmation to finance office</li>
                  <li>• Keep all payment receipts for records</li>
                  <li>• Contact finance office for payment issues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-fancy font-bold text-primary mb-4">
              Questions About Fees?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our finance team is available to discuss payment plans, scholarships, 
              and answer any questions about our fee structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlidingButton className="bg-secondary px-8">
                Pay Online
                <CreditCard className="w-4 h-4" />
              </GlidingButton>
              <GlidingButton className="bg-gradient-to-r from-primary to-primary/60 px-8">
                Download Fee Schedule
                <CircleArrowRight />
              </GlidingButton>
              <GlidingButton className="bg-primary px-8">
                Contact Finance Office
              </GlidingButton>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
