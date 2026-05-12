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
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Djametcoder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
