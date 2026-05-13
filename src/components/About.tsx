import { motion } from 'framer-motion'
import { Briefcase, Code2, Zap, Target } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: Code2, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { icon: Zap, title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Databases'] },
    { icon: Target, title: 'Web3', items: ['Solana', 'EVM', 'Smart Contracts', 'DeFi'] },
    { icon: Briefcase, title: 'Tools', items: ['Git', 'Docker', 'CI/CD', 'AWS'] },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Fullstack developer with passion for Web3 and DeFi automation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate fullstack developer with expertise in building modern web applications and blockchain solutions. With a strong foundation in React, TypeScript, and Web3 technologies, I create seamless user experiences that bridge traditional web and decentralized finance.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve complex problems. Whether it's optimizing performance, implementing DeFi automation, or designing intuitive interfaces, I approach every project with dedication and attention to detail.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-300">Building scalable web applications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-300">DeFi automation and smart contracts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-300">Creating accessible and responsive designs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-3">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-white/10"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
