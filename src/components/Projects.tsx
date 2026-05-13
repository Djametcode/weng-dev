import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'DeFi Automation Platform',
      description: 'Automated trading and liquidity management on Solana blockchain with real-time monitoring and risk management.',
      tags: ['Solana', 'Web3', 'React', 'TypeScript'],
      image: '🚀',
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Real-time cryptocurrency portfolio tracker with price alerts, analytics, and multi-chain support.',
      tags: ['React', 'Web3', 'Charts', 'APIs'],
      image: '📊',
      link: '#',
      github: '#',
    },
    {
      title: 'Smart Contract Suite',
      description: 'Collection of audited smart contracts for DeFi protocols including AMM, lending, and staking mechanisms.',
      tags: ['Solidity', 'Rust', 'Smart Contracts', 'Security'],
      image: '⚙️',
      link: '#',
      github: '#',
    },
    {
      title: 'Web3 Wallet Manager',
      description: 'Secure multi-chain wallet management interface with transaction history, token swaps, and NFT support.',
      tags: ['Web3.js', 'Ethers.js', 'React', 'Security'],
      image: '💰',
      link: '#',
      github: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics platform for blockchain data visualization and market insights.',
      tags: ['React', 'D3.js', 'APIs', 'Real-time'],
      image: '📈',
      link: '#',
      github: '#',
    },
    {
      title: 'Community Platform',
      description: 'Social platform for developers to share code, collaborate on projects, and discuss Web3 technologies.',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: '👥',
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work in web development and blockchain</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group h-full flex flex-col"
            >
              {/* Project Image/Icon */}
              <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">View</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-gray-400 mb-6">Want to see more projects?</p>
          <a
            href="https://github.com/Djametcode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
