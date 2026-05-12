import { FC } from 'react'

const About: FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Who I Am?</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="avatar-placeholder">
              <span>DC</span>
            </div>
          </div>
          <div className="about-text">
            <h3>A Fullstack Developer</h3>
            <p>
              I'm a passionate fullstack developer who loves building modern web applications 
              and digital solutions. With expertise in both frontend and backend technologies, 
              I create seamless user experiences powered by robust server-side architecture.
            </p>
            <p>
              My journey in software development has led me to work with various technologies 
              including React, TypeScript, Node.js, Python, and blockchain technologies like 
              Ethereum and Solana.
            </p>
            <div className="skills">
              <h4>Technologies I work with:</h4>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Solidity</span>
                <span className="skill-tag">Rust</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
