import { FC } from 'react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero: FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Djametcoder</span>
        </h1>
        <p className="hero-subtitle">
          Fullstack Developer | Building digital experiences with modern technology
        </p>
        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => setActiveSection('projects')}
          >
            View My Work
          </button>
          <button 
            className="btn-secondary"
            onClick={() => setActiveSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
