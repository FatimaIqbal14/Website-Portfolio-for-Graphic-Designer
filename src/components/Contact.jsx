import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'Brand Identity',
    budget: '$5,000 - $10,000'
  })
  
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef(null)

  // GSAP ScrollTrigger Reveal
  useEffect(() => {
    gsap.fromTo(containerRef.current.querySelectorAll('.contact-reveal'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Chip selector handler
  const handleChipSelect = (type, value) => {
    setFormData(prev => ({ ...prev, [type]: value }))
  }

  // Form submission: build mailto link
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const recipientEmail = 'hello@designbyiqra.com' // CHANGE THIS to Iqra's real email
    const emailSubject = `[Order Request] ${formData.projectType} - ${formData.subject || 'Design Inquiry'}`
    
    const emailBody = `Hello Iqra,

I am writing to place an order for branding / design services.

--- ORDER INQUIRY DETAILS ---
Client Name: ${formData.name || 'Not Provided'}
Brand Name: ${formData.brandName || 'Not Provided'}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
From Email: ${formData.email || 'Not Provided'}

--- MESSAGE ---
${formData.message || 'No additional details provided.'}

Best regards,
${formData.name || 'Inquirer'}`

    // Construct mailto link
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    // Open default mail client
    window.location.href = mailtoUrl
    setSubmitted(true)
    
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  // Pre-compiled email preview structure
  const previewSubject = `[Order Request] ${formData.projectType} - ${formData.subject || '(Subject)'}`
  const previewBody = `Hello Iqra,

I am writing to place an order for branding / design services.

--- ORDER INQUIRY DETAILS ---
Client Name: ${formData.name || '[Client Name]'}
Brand Name: ${formData.brandName || '[Brand/Company Name]'}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
From Email: ${formData.email || '[Your Contact Email]'}

--- MESSAGE ---
${formData.message || '[Describe your design goals, deadlines, and references here...]'}

Best regards,
${formData.name || '[Your Name]'}`

  return (
    <section id="contact" className="section" ref={containerRef}>
      <div className="container contact-layout">
        {/* Left Side: General Info & Channels */}
        <div className="contact-info-block contact-reveal">
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let’s craft your next brand landmark.</h2>
            <p className="about-body">
              Are you ready to create a visual identity, upscale your packaging layout, or curate an exhibition project? Let's discuss details. 
            </p>
            <p className="about-body">
              Fill out the project blueprint form to place an order. You can view the live email structure preview on the right before launching your mail application.
            </p>
          </div>

          <div className="contact-channels">
            <div className="channel-card">
              <div className="channel-icon">✉</div>
              <div>
                <div className="channel-label">Direct Inquiry</div>
                <a href="mailto:hello@designbyiqra.com" className="channel-value">hello@designbyiqra.com</a>
              </div>
            </div>
            <div className="channel-card">
              <div className="channel-icon">✹</div>
              <div>
                <div className="channel-label">Studio Hours</div>
                <span className="channel-value">Mon — Fri | 9:00 AM — 6:00 PM EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Order Form */}
        <div className="contact-reveal">
          <form className="inquiry-form-container" onSubmit={handleSubmit}>
            <h3 className="form-label" style={{ marginBottom: '25px', fontSize: '1rem', color: 'var(--color-cream)' }}>
              Project Blueprint Order Form
            </h3>

            {/* Client Name & Brand Name */}
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Client Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="brandName">Brand Name</label>
                <input 
                  type="text" 
                  id="brandName" 
                  name="brandName" 
                  className="form-input" 
                  placeholder="Company Name"
                  value={formData.brandName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email & Subject */}
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">Contact Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-input" 
                  placeholder="Design details"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Project Type Chips Selector */}
            <div className="form-group">
              <label className="form-label">Project Type</label>
              <div className="chip-group">
                {['Brand Identity', 'Premium Packaging', 'Editorial & Book', 'Typography', 'UI/UX', 'Other'].map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`chip ${formData.projectType === type ? 'selected' : ''}`}
                    onClick={() => handleChipSelect('projectType', type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range Selector */}
            <div className="form-group">
              <label className="form-label">Budget Range</label>
              <div className="chip-group">
                {['Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'].map(budget => (
                  <button
                    key={budget}
                    type="button"
                    className={`chip ${formData.budget === budget ? 'selected' : ''}`}
                    onClick={() => handleChipSelect('budget', budget)}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Description */}
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message & Details</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea" 
                placeholder="Give details about your visual brand goals..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
                

            <button type="submit" className="btn-primary" style={{ marginTop: '30px', width: '100%', justifyContent: 'center' }}>
              {submitted ? 'Email Sent! Redirecting...' : 'Place Order Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
