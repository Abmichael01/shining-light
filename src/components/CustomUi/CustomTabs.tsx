"use client"

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface CustomTabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export default function CustomTabs({ tabs, defaultTab, className }: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Headers */}
      <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-3 px-6 text-sm font-semibold rounded-md transition-all duration-300",
              activeTab === tab.id
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 hover:text-primary hover:bg-white/50"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "transition-opacity duration-300",
              activeTab === tab.id ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
