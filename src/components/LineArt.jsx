import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LineArt = () => {
  const windingPathRef = useRef(null)
  const heroShapeRef = useRef(null)
  const aboutWaveRef = useRef(null)
  const projectsGuideRef = useRef(null)
  const contactLoopRef = useRef(null)

  useEffect(() => {
    // 1. Winding Path Drawing Animation (scroll-tied)
    const path = windingPathRef.current
    if (path) {
      const length = path.getTotalLength()
      // Set up dash array and offset to hide the line initially
      path.style.strokeDasharray = length
      path.style.strokeDashoffset = length

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        }
      })
    }

    // 2. Hero Section - Rotating Spirograph / Geometric Sphere
    if (heroShapeRef.current) {
      gsap.to(heroShapeRef.current, {
        rotation: 360,
        transformOrigin: 'center center',
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }

    // 3. About Section - Morphing / Wavy Path Scale & Stretch
    if (aboutWaveRef.current) {
      gsap.fromTo(aboutWaveRef.current,
        { scaleX: 0.8, scaleY: 0.6, x: -50, rotate: -5 },
        {
          scaleX: 1.2,
          scaleY: 1.1,
          x: 50,
          rotate: 15,
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: '#about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      )
    }

    // 4. Projects Section - Vertical Line Trackers that follow scroll
    if (projectsGuideRef.current) {
      const lines = projectsGuideRef.current.querySelectorAll('.guide-line')
      lines.forEach((line, index) => {
        gsap.fromTo(line,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: '#projects',
              start: 'top center',
              end: 'bottom center',
              scrub: 0.5
            }
          }
        )
      })
    }

    // 5. Contact Section - Signature Arrow Drawing
    if (contactLoopRef.current) {
      const loopPath = contactLoopRef.current.querySelector('path')
      if (loopPath) {
        const loopLen = loopPath.getTotalLength()
        loopPath.style.strokeDasharray = loopLen
        loopPath.style.strokeDashoffset = loopLen

        gsap.to(loopPath, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'center center',
            scrub: 0.8
          }
        })
      }
    }
  }, [])

  return (
    <div className="line-art-svg">
      <svg width="100%" height="100%" viewBox="0 0 1440 4000" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Full-length Winding Vector Thread */}
        <path
          ref={windingPathRef}
          className="line-art-path"
          d="M 100, 200 
             C 400, 300, 1000, 100, 1300, 500
             S 800, 1000, 900, 1300
             S 200, 1600, 300, 2000
             S 1200, 2200, 1100, 2600
             S 300, 2800, 400, 3200
             S 1000, 3600, 900, 3900"
        />

        {/* Hero Section Art: Geometric Star / Compass */}
        <g ref={heroShapeRef} transform="translate(1250, 400)" opacity="0.12">
          <circle r="120" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
          <circle r="80" fill="none" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M -150,0 L 150,0 M 0,-150 L 0,150" stroke="var(--color-accent)" strokeWidth="1.5" />
          <polygon points="0,-130 10,-30 130,0 10,30 0,130 -10,30 -130,0 -10,-30" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
          {/* Sparkles inside group */}
          <polygon points="50,-50 55,-35 70,-30 55,-25 50,-10 45,-25 30,-30 45,-35" fill="var(--color-accent)" opacity="0.5" />
          <polygon points="-60,60 -55,75 -40,80 -55,85 -60,100 -65,85 -80,80 -65,75" fill="var(--color-accent)" opacity="0.5" />
        </g>

        {/* About Section Art: Fluid Dynamic Waves */}
        <g ref={aboutWaveRef} transform="translate(100, 1100)" opacity="0.1">
          <path
            d="M 0,100 C 150,200 300,0 450,100 S 750,300 900,200"
            fill="none"
            stroke="var(--color-cream)"
            strokeWidth="2"
          />
          <path
            d="M 0,120 C 170,230 280,-20 470,120 S 730,320 900,220"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <path
            d="M 0,140 C 190,260 260,-40 490,140 S 710,340 900,240"
            fill="none"
            stroke="var(--color-cream)"
            strokeWidth="1"
          />
        </g>

        {/* Projects Section Art: Blueprint Grids */}
        <g ref={projectsGuideRef} opacity="0.08">
          {/* Vertical layout alignment lines */}
          <line className="guide-line" x1="150" y1="1800" x2="150" y2="3100" stroke="var(--color-accent)" strokeWidth="1" />
          <line className="guide-line" x1="720" y1="1800" x2="720" y2="3100" stroke="var(--color-cream)" strokeWidth="1" strokeDasharray="8,8" />
          <line className="guide-line" x1="1290" y1="1800" x2="1290" y2="3100" stroke="var(--color-accent)" strokeWidth="1" />
        </g>

        {/* Contact Section Art: Loop & Target Arrow */}
        <g ref={contactLoopRef} transform="translate(1100, 3450)" opacity="0.15">
          <path
            d="M -300,-100 C -150,-150 -50,50 50,0 C 150,-50 200,-150 150,-200 C 80,-260 -50,-150 -10,0 C 20,100 100,150 180,100 L 220,130 M 180,100 L 205,80 M 180,100 L 165,120"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
          />
          <circle cx="180" cy="100" r="4" fill="var(--color-accent)" />
        </g>
      </svg>
    </div>
  )
}

export default LineArt
