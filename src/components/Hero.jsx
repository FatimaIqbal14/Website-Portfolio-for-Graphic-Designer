import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const containerRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRow1Ref = useRef(null)
  const titleRow2Ref = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    tl.fromTo(subtitleRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5 }
    )
    .fromTo([titleRow1Ref.current, titleRow2Ref.current],
      { opacity: 0, y: 60, skewY: 5 },
      { opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.2 },
      '-=0.5'
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.9, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8 },
      '-=0.6'
    )

    // Interactive mouse move effect for floating sparkles
    const sparkles = containerRef.current.querySelectorAll('.sparkle-icon')
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.015
      const moveY = (clientY - window.innerHeight / 2) * 0.015
      
      sparkles.forEach((sparkle, idx) => {
        const factor = (idx + 1) * 0.6
        gsap.to(sparkle, {
          x: moveX * factor,
          y: moveY * factor,
          duration: 1,
          ease: 'power2.out'
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollProjects = (e) => {
    e.preventDefault()
    const target = document.getElementById('projects')
    if (target) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = target.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="section" ref={containerRef} style={{ borderBottom: '1px solid var(--color-border)' }}>
      {/* Sparkle SVG elements inspired by logo stars */}
      <svg className="sparkle-icon sparkle-1" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.6L12 0Z" />
      </svg>
      <svg className="sparkle-icon sparkle-2" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.6L12 0Z" />
      </svg>
      <svg className="sparkle-icon sparkle-3" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.6L12 0Z" />
      </svg>

      <div className="container hero-content">
        <span ref={subtitleRef} className="hero-subtitle">
          Art Direction & Visual Identity
        </span>
        
        <h1 className="hero-title">
          <div ref={titleRow1Ref}>design by</div>
          <div ref={titleRow2Ref} style={{ color: 'var(--color-cream)' }}>
            <span>iqra</span>.
          </div>
        </h1>

        <p ref={descRef} className="hero-desc">
          Crafting premium, bespoke brand experiences, structural packaging, and editorial design for visionaries and creative labels.
        </p>

        <div ref={ctaRef}>
          <a href="#projects" className="btn-primary" onClick={scrollProjects}>
            Explore Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
