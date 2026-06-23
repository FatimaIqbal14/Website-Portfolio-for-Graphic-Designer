import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projectsData from '../constants/projectsData'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeModalImage, setActiveModalImage] = useState(null)
  
  const sectionRef = useRef(null)
  const gridWrapperRef = useRef(null)
  const gridRef = useRef(null)

  // Get list of filters
  const filters = ['All', 'Branding', 'Packaging', 'Editorial', 'Typography', 'UI/UX']

  // Filter projects by category name
  const getFilteredProjects = () => {
    if (selectedFilter === 'All') return projectsData
    return projectsData.filter(project => 
      project.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
      project.title.toLowerCase().includes(selectedFilter.toLowerCase())
    )
  }

  const filteredProjects = getFilteredProjects()
  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 6)

  // Dynamic animations trigger based on card configuration
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.project-card')
    const activeAnimations = []

    if (cards && cards.length > 0) {
      cards.forEach((card) => {
        const anim = card.getAttribute('data-animation') || 'slide-up'
        let fromVars = { opacity: 0 }
        let toVars = { opacity: 1, duration: 0.8, ease: 'power3.out' }

        // Setup dynamic parameters
        if (anim === 'slide-left') {
          fromVars.x = -60
          toVars.x = 0
        } else if (anim === 'slide-right') {
          fromVars.x = 60
          toVars.x = 0
        } else if (anim === 'scale-in') {
          fromVars.scale = 0.85
          toVars.scale = 1
        } else if (anim === 'fade-tilt') {
          fromVars.y = 45
          fromVars.rotation = -3
          toVars.y = 0
          toVars.rotation = 0
        } else { // slide-up
          fromVars.y = 50
          toVars.y = 0
        }

        const animInstance = gsap.fromTo(card, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none reverse',
            overwrite: 'auto'
          }
        })
        activeAnimations.push(animInstance)
      })
    }

    // Refresh scroll positions to account for grid rendering changes
    ScrollTrigger.refresh()

    return () => {
      activeAnimations.forEach(anim => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill()
        anim.kill()
      })
    }
  }, [selectedFilter, isExpanded])

  // Initial header reveal
  useEffect(() => {
    gsap.fromTo('.projects-header-reveal',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  // Close modal on Escape press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
        setActiveModalImage(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Handle expanding portfolio
  const handleToggleExpand = () => {
    if (isExpanded) {
      const offset = 80 // navbar height
      const targetPosition = sectionRef.current.offsetTop - offset
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })

      setTimeout(() => {
        setIsExpanded(false)
      }, 300)
    } else {
      setIsExpanded(true)
    }
  }

  // Open modal wrapper
  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setActiveModalImage(project.image)
  }

  // Close modal wrapper
  const handleCloseModal = () => {
    setSelectedProject(null)
    setActiveModalImage(null)
  }

  return (
    <section id="projects" className="section" ref={sectionRef} style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Projects Header & Filter Panel */}
        <div className="projects-header-row projects-header-reveal">
          <div>
            <span className="section-label">Selected Works</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>The Portfolio</h2>
          </div>
          
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => {
                  setSelectedFilter(filter)
                  setIsExpanded(false) // Reset expansion on filter switch
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Expandable Grid Wrapper */}
        <div className="projects-grid-wrapper" ref={gridWrapperRef}>
          <div className="projects-grid" ref={gridRef}>
            {displayedProjects.map((project) => (
              <div 
                key={project.id} 
                className={`project-card ${project.layoutType || 'standard'}`}
                data-animation={project.animationType || 'slide-up'}
                onClick={() => handleOpenModal(project)}
              >
                <div className="project-img-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img" 
                    loading="lazy"
                  />
                  <div className="project-img-overlay"></div>
                </div>

                <div className="project-info">
                  <div>
                    <div className="project-meta-top">
                      <span className="project-cat">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <h3 className="project-card-title">{project.title}</h3>
                  </div>
                  <p className="project-card-desc">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More / Show Less CTA */}
        {filteredProjects.length > 6 && (
          <div className="projects-cta-container">
            <button className="btn-expand" onClick={handleToggleExpand}>
              {isExpanded ? 'Minimize Portfolio' : `Explore All Projects (${filteredProjects.length})`}
              <span className={`btn-expand-icon ${isExpanded ? 'up' : 'down'}`}>
                {isExpanded ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Detailed Project Overlay Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Left side image pane */}
            <div className="modal-image-pane">
              <img src={activeModalImage || selectedProject.image} alt={selectedProject.title} />
            </div>

            {/* Right side info pane */}
            <div className="modal-info-pane">
              <div>
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                
                <div className="modal-meta-grid">
                  <div>
                    <div className="modal-meta-label">Client</div>
                    <div className="modal-meta-value">{selectedProject.client}</div>
                  </div>
                  <div>
                    <div className="modal-meta-label">Year</div>
                    <div className="modal-meta-value">{selectedProject.year}</div>
                  </div>
                </div>

                <p className="modal-description">{selectedProject.description}</p>
              </div>

              <div>
                <div className="modal-details">
                  <div className="modal-meta-label" style={{ color: 'var(--color-accent)', marginBottom: '8px' }}>
                    Deliverables & Execution
                  </div>
                  <div>{selectedProject.details}</div>
                </div>

                {/* Detailed project gallery (small pictures tray) */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="modal-gallery-container">
                    <div className="modal-gallery-label">Detailed Workpieces (Click to zoom)</div>
                    <div className="modal-gallery-thumbnails">
                      {[selectedProject.image, ...selectedProject.gallery].map((imgUrl, idx) => (
                        <img
                          key={idx}
                          src={imgUrl}
                          alt={`${selectedProject.title} workpiece ${idx}`}
                          className={`modal-gallery-thumb ${activeModalImage === imgUrl ? 'active' : ''}`}
                          onClick={() => setActiveModalImage(imgUrl)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
