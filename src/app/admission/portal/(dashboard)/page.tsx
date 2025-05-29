import ApplicationFlow from '@/components/Admission/Portal/Dashboard/Application/ApplicationFlow'
import React from 'react'

const flows = [
  {
    name: "Bio-data",
    description: "",
    link: "/admission/portal/bio-data",
    completed: false,
  },
  {
    name: "Documents",
    description: "",
    link: "/admission/portal/documents",
    completed: false,
  },
  {
    name: "Payment",
    description: "",
    link: "/admission/portal/payment",
    completed: false,
  },
  {
    name: "Review",
    description: "",
    link: "/admission/portal/review",
    completed: false,
  }
]

export default function AdmissionPortal() {
  return (
    <div>
        <ApplicationFlow />
    </div>
  )
}
