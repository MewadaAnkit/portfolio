import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Users, Database, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { projects } = portfolioData;

  const categories = ['All', 'Full Stack', 'Backend Heavy', 'Frontend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getHighlightIcon = (highlight: string) => {
    if (highlight.includes('Real-time') || highlight.includes('faster')) return <Zap className="w-4 h-4" />;
    if (highlight.includes('users') || highlight.includes('records')) return <Users className="w-4 h-4" />;
    if (highlight.includes('data') || highlight.includes('API')) return <Database className="w-4 h-4" />;
    if (highlight.includes('compliant') || highlight.includes('Encrypted')) return <Shield className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Real-world applications that showcase my expertise in building scalable, secure, and efficient systems. 
            Each project demonstrates different aspects of full-stack development with a focus on robust backend architecture.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-400 text-gray-900 shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'Backend Heavy' 
                      ? 'bg-green-400 text-gray-900' 
                      : project.category === 'Full Stack'
                      ? 'bg-blue-400 text-gray-900'
                      : 'bg-purple-400 text-gray-900'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {selectedProject === project.id ? project.longDescription : project.description}
                </p>

                <button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold mb-4 transition-colors duration-200"
                >
                  {selectedProject === project.id ? 'Show Less' : 'Read More'}
                </button>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-teal-400"
                    >
                      {getHighlightIcon(highlight)}
                      <span className="ml-2">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;