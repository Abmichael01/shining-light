import { cn } from '@/lib/utils';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    className?: string; 
}

export default function SectionPadding({ className, children, ...rest }: Props) {
  return (
    <section {...rest} className={cn(
        "px-5 sm:10px md:px-15 lg:px-20",
        className
    )}>
       {children} 
    </section>
  )
}
