import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)

  useEffect(() => {
    // Left column content animates in
    gsap.fromTo(leftColRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Right column rotating graphic fades in
    gsap.fromTo(rightColRef.current,
      { opacity: 0, scale: 0.8, rotate: -15 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Discipline cards reveal stagger
    const cards = containerRef.current.querySelectorAll('.discipline-item')
    gsap.fromTo(cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.disciplines-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <section id="about" className="section" ref={containerRef} style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container about-grid">
        {/* Left Side: Content */}
        <div ref={leftColRef}>
          <span className="section-label">Who She Is</span>
          <h2 className="section-title">
            Crafting ideas into tactile & digital narratives.
          </h2>
          <p className="about-body">
            Iqra is a multidisciplinary art director and graphic designer. With an eye for minimalism and a love for high-contrast typography, she works across physical and digital boundaries to construct cohesive brand ecosystems. 
          </p>
          <p className="about-body" style={{ marginBottom: '40px' }}>
            From high-end cosmetics packaging featuring blind embossing to editorial architectures designed to give structure to complex images, her works focus on absolute clarity, modern geometry, and premium styling.
          </p>

          <h3 className="section-label" style={{ marginBottom: '20px' }}>Core Disciplines</h3>
          <div className="disciplines-list">
            <div className="discipline-item">
              <div className="discipline-icon">✦</div>
              <h4 className="discipline-title">Brand Identity</h4>
              <p className="discipline-desc">Logos, comprehensive brand systems, typographic standards, and aesthetic direction.</p>
            </div>
            <div className="discipline-item">
              <div className="discipline-icon">✦</div>
              <h4 className="discipline-title">Premium Packaging</h4>
              <p className="discipline-desc">Structural templates, box mockups, material advisory, foil print consultation.</p>
            </div>
            <div className="discipline-item">
              <div className="discipline-icon">✦</div>
              <h4 className="discipline-title">Editorial Layout</h4>
              <p className="discipline-desc">Structured catalog grids, magazine spreads, cover graphics, and typesetting.</p>
            </div>
            <div className="discipline-item">
              <div className="discipline-icon">✦</div>
              <h4 className="discipline-title">Typography</h4>
              <p className="discipline-desc">Custom letterforms, font curation, typeface design, and expressive typography art.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Rotating Vector Badge */}
        <div className="about-visual" ref={rightColRef}>
          <div className="circle-ring">
            <div className="rotating-circle"></div>
            <div className="circle-inner">
              design<br />by iqra
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
