import { FC } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Equium CPU Miner',
      description: 'High-performance CPU mining solution for Equium cryptocurrency using Equihash 96,5 algorithm. Optimized for multi-core processors with 88+ threads.',
      technologies: ['Rust', 'Solana', 'Blockchain', 'Linux'],
      githubUrl: 'https://github.com/HannaPrints/equium',
    },
    {
      id: 2,
      title: 'EVM Wallet Generator',
      description: 'Secure Ethereum wallet generator with mnemonic phrase support. Compatible with all EVM chains including Ethereum, BSC, Polygon, and more.',
      technologies: ['Python', 'Web3', 'Ethereum', 'Cryptography'],
    },
    {
      id: 3,
      title: 'KyberSwap Integration',
      description: 'Complete DeFi swap integration using KyberSwap Aggregator API. Supports multi-chain swaps with best price routing.',
      technologies: ['Python', 'DeFi', 'Web3', 'API Integration'],
    },
    {
      id: 4,
      title: 'Mining Dashboard',
      description: 'Real-time monitoring dashboard for cryptocurrency mining operations. Displays system stats, hashrate, earnings, and wallet information.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Real-time'],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
