import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { NavLinks } from '../constants'
import logo from '../assets/logo.jpg'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const navRef = useRef(null)

  // Handle scroll properties (sticky and active links spy)
  useEffect(() => {
    const handleScroll = () => {
      // 1. Shrink navbar on scroll
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // 2. Active Section Spy
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200 // Offset for active trigger

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP Entrance Animation
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
    )
  }, [])

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.getElementById(id)
    if (target) {
      const offset = 80 // height of navbar
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <a href="#home" className="logo-container" onClick={(e) => handleLinkClick(e, 'home')}>
        <img src={logo} alt="design by iqra" className="logo-img" />
        <span>design by iqra</span>
      </a>

      {/* Hamburger Toggle */}
      <button 
        className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`} 
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        {NavLinks.map((link) => (
          <li key={link.id} className={activeSection === link.id ? 'active' : ''}>
            <a 
              href={`#${link.id}`} 
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar