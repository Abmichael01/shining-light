import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string; 
}

export default function SectionPadding({ className, children }: Props) {
  return (
    <section className={cn(
        "px-5 sm:10px md:px-15 lg:px-20",
        className
    )}>
       {children} 
    </section>
  )
}
