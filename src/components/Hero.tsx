import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Code2, Database, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Tech icons floating */}
          <div className="flex justify-center lg:justify-start mb-8 space-x-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="text-blue-400"
            >
              <Code2 size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-teal-400"
            >
              <Database size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-orange-400"
            >
              <Server size={24} />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-4"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-2xl lg:text-3xl text-blue-400 font-semibold mb-2">
              {personal.title}
            </h2>
            <h3 className="text-xl lg:text-2xl text-teal-400 font-medium">
              {personal.subtitle}
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href={personal.resume}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="mr-2" size={20} />
              View Projects
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto lg:mx-0"
          >
            {portfolioData.stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;