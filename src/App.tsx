import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app bg-gradient-to-br from-dark via-[#1a1a2e] to-[#16213e] min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16">
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 bg-dark/50 backdrop-blur-md">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-dark font-bold">D</span>
                </div>
                <span className="gradient-text font-bold text-lg">Djametcoder</span>
              </div>
              <p className="text-gray-400 text-sm">
                Fullstack developer & blockchain enthusiast building the future of web3.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        setActiveSection(link.toLowerCase())
                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {[
                  { label: 'GitHub', href: 'https://github.com/Djametcode' },
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'Twitter', href: 'https://twitter.com' },
                  { label: 'Email', href: 'mailto:kampretsiji1@gmail.com' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; 2025 Djametcoder. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Built with React, TypeScript, Tailwind CSS & Framer Motion
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
