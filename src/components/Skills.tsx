import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { skills } = portfolioData;

  const categories = ['all', 'backend', 'frontend', 'database', 'tools', 'cloud', 'language'];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      backend: 'from-green-400 to-green-600',
      frontend: 'from-blue-400 to-blue-600',
      database: 'from-purple-400 to-purple-600',
      tools: 'from-orange-400 to-orange-600',
      cloud: 'from-yellow-400 to-yellow-600',
      language: 'from-red-400 to-red-600',
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 to-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My expertise spans across the full stack, with a strong emphasis on backend technologies and system architecture.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-6"></div>
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
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-teal-400 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="text-teal-400 font-bold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-3 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)}`}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400 capitalize">{skill.category}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full mx-0.5 ${
                        i < Math.ceil(skill.level / 20) ? 'bg-teal-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.slice(1).map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
            
            return (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-4 rounded-lg text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getCategoryColor(category)} mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{Math.round(avgLevel)}%</span>
                </div>
                <h4 className="text-white font-semibold capitalize">{category}</h4>
                <p className="text-gray-400 text-sm">{categorySkills.length} skills</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;