"use client"

import SectionPadding from './SectionPadding'
import React, { useEffect } from 'react'
import { gsap } from "gsap"


interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  breadcrumbs?: Array<{
    name: string
    href?: string
  }>
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = '/hero1.jpg',
  breadcrumbs 
}: PageHeroProps) {
  // Animate on mount
  useEffect(() => {
    gsap.fromTo(".page-hero-image", { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(".page-hero-image", { scale: 1 }, { scale: 1.2, duration: 10 });
    gsap.fromTo(".page-hero-title", { x: -200 }, { x: 0, duration: 0.8 });
    gsap.fromTo(".page-hero-subtitle", { opacity: 0 }, { opacity: 1, duration: 1.2 });
    gsap.fromTo(".page-hero-breadcrumbs", { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <SectionPadding className="relative h-[400px] w-full flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={backgroundImage}
          alt="Page hero background"
          className="w-full h-full object-cover object-center page-hero-image opacity-0"
        />
      </div>
      <div className="absolute z-[1] inset-0 size-full bg-gradient-to-r from-primary from-2% to-primary/10"></div>
      
      <div className="relative z-[2] text-center text-white space-y-4">
        {breadcrumbs && (
          <nav className="flex justify-center space-x-2 text-sm page-hero-breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-white/60">/</span>}
                <span className={crumb.href ? "hover:underline cursor-pointer" : "text-white/80"}>
                  {crumb.name}
                </span>
              </React.Fragment>
            ))}
          </nav>
        )}
        
        <h1 className="text-4xl md:text-5xl font-fancy font-bold leading-tight page-hero-title">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg max-w-2xl mx-auto opacity-90 page-hero-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </SectionPadding>
  )
}
