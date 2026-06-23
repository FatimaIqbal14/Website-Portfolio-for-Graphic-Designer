import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import NavBar from './components/NavBar'
import LineArt from './components/LineArt'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

// Register only open-source ScrollTrigger to prevent bundle errors from premium plugins
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <>
      {/* Background Scroll-Linked SVG Line Art Thread */}
      <LineArt />

      {/* Floating Glassmorphism Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section (30 project expandable catalog) */}
      <Projects />

      {/* Contact Section & Request Form */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div>
          <p>© {new Date().getFullYear()} design by iqra. All Rights Reserved.</p>
          <p style={{ fontSize: '0.75rem', marginTop: '5px', opacity: 0.5 }}>
            Crafted for premium visual narratives.
          </p>
        </div>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Dribbble</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="footer-social-link">Behance</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}

export default App