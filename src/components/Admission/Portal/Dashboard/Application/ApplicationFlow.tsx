"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// This array will eventually come from your backend API
const initialFlows = [
  {
    name: "Bio-data",
    description: "Complete your personal information",
    link: "/admission/portal/bio-data",
    completed: false,
  },
  {
    name: "Documents",
    description: "Upload required documents",
    link: "/admission/portal/documents",
    completed: false,
  },
  {
    name: "Payment",
    description: "Make admission payment",
    link: "/admission/portal/payment",
    completed: false,
  },
];

export default function ApplicationFlow() {
  const pathname = usePathname();

  // This would be replaced with backend data in real app
  const [flows, setFlows] = React.useState(initialFlows);

  // Find current step index
  const currentStepIndex = flows.findIndex((step) => step.link === pathname);
  const currentStep = flows[currentStepIndex];

  // Calculate progress
  const completedCount = flows.filter((step) => step.completed).length;
  const progressPercentage = (completedCount / flows.length) * 100;

  // Simulate fetching from backend (optional)
  React.useEffect(() => {
    // Replace this with actual API call
    setTimeout(() => {
      setFlows([
        {
          name: "Bio-data",
          description: "Complete your personal information",
          link: "/admission/portal/bio-data",
          completed: true,
        },
        {
          name: "Documents",
          description: "Upload required documents",
          link: "/admission/portal/documents",
          completed: true,
        },
        {
          name: "Payment",
          description: "Make admission payment",
          link: "/admission/portal/payment",
          completed: true,
        },
      ]);
    }, 500);
  }, []);

  // Check if all required steps are completed
  const allCompleted = flows.every((step) => step.completed);

  return (
    <div className="space-y-10">
      {allCompleted && (
        <div className="mt-10 bg-white border rounded-xl p-6 md:p-10">
          <div className="flex flex-col items-center text-center">
            <svg
              className="w-12 h-12 text-green-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Your Application is Ready!
            </h3>

            <p className="text-gray-600 mb-6">
              You can now submit your application. All required steps have been
              completed.
            </p>

            {/* Submit Button */}
            <Link
              href="/admission/portal/confirmation"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Submit Application
            </Link>

            {/* Contact Info */}
            <p className="mt-6 text-xs text-gray-500">
              ⚠️ If payment fails, please contact the school office for manual
              processing.
            </p>
          </div>
        </div>
      )}
      {/* Progress Tracker */}
      <div className="bg-background rounded-xl p-6 md:p-10 border">
        <div className="flex items-center justify-between mb-2">
          {flows.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed
                      ? "bg-green-500 text-white"
                      : index === currentStepIndex
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.completed ? <span>✓</span> : index + 1}
                </div>
                <span className="text-xs mt-1 text-center w-20">
                  {step.name}
                </span>
              </div>

              {index < flows.length - 1 && (
                <div
                  className={`flex-1 h-0.5 ${
                    index < currentStepIndex ? "bg-green-500" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {completedCount} of {flows.length} steps completed
        </p>
      </div>

      {/* Step Navigation */}
      <div className="bg-background rounded-xl p-6 md:p-10 border">
        <h2 className="text-xl font-bold mb-6">Admission Portal</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flows.map((step, index) => {
            const isCompleted = step.completed;
            const isActive = pathname === step.link;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg border flex justify-between flex-col ${
                  isActive
                    ? "bg-primary/5 border-primary"
                    : isCompleted
                    ? "bg-green-50 border-green-200"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isCompleted ? "✓" : index + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium">{step.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {step.description}
                    </p>

                    {isActive && (
                      <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Current Step
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <Link
                    href={step.link}
                    className={`text-sm font-medium py-2 px-10 rounded-full border text-center w-full ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-primary hover:text-primary-dark"
                    }`}
                  >
                    {isActive
                      ? isCompleted
                        ? "Edit"
                        : "Continue"
                      : isCompleted
                      ? "Completed"
                      : "Start"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 📤 Submit Application Section */}

        {/* ❌ Not Completed Yet */}
        {!allCompleted && (
          <div className="mt-10 bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              ⚠️ Please complete all steps before submitting your application.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
