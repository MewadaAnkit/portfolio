import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cloud, Shield, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const { personal } = portfolioData;

  const techIcons = [
    { name: 'Node.js', icon: Server, color: 'text-green-400' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'Express', icon: Zap, color: 'text-yellow-400' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'Security', icon: Shield, color: 'text-red-400' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {personal.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Core <span className="text-teal-400">Expertise</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Backend Architecture', 'API Development', 'Database Design', 'Authentication Systems', 'Performance Optimization', 'Clean Code'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-semibold border border-blue-400/30 hover:bg-blue-400/10 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Stack Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-8">
              {techIcons.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className={`w-12 h-12 ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-white font-semibold text-sm">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Connecting lines animation */}
            <motion.div
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute inset-0 pointer-events-none"
            >
              <svg className="w-full h-full">
                <motion.path
                  d="M 50 50 Q 150 25 250 50 T 450 50"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;