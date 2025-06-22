import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="text-orange-400">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey in software development, from internships to freelance projects, 
            building real solutions for real problems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-teal-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-teal-400 hidden lg:block"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-orange-400 rounded-full border-4 border-gray-800 hidden lg:block transform -translate-x-2"></div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 p-8 rounded-xl shadow-xl"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <h4 className="text-xl text-orange-400 font-semibold">{job.company}</h4>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {job.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="text-lg font-semibold text-white flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-teal-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-300"
                          >
                            <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills gained section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Through Experience, I've <span className="text-teal-400">Mastered</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { skill: 'API Development', projects: '15+' },
              { skill: 'Database Design', projects: '10+' },
              { skill: 'System Architecture', projects: '8+' },
              { skill: 'Client Collaboration', projects: '12+' }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-900 p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {item.projects}
                </div>
                <div className="text-white font-semibold">
                  {item.skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;