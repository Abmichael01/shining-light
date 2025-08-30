import { cn } from '@/lib/utils'
import SectionPadding from './SectionPadding'
import React from 'react'

interface ContentSectionProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function ContentSection({ 
  children, 
  className,
  maxWidth = 'lg' 
}: ContentSectionProps) {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    full: 'max-w-full'
  }

  return (
    <SectionPadding className={cn("py-16", className)}>
      <div className={cn("mx-auto", maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </SectionPadding>
  )
}
