import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { personal } = portfolioData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="text-teal-400">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your next project or explore opportunities? 
            I'm always excited to work on meaningful projects that make a real impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Get In <span className="text-blue-400">Touch</span>
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href={`mailto:${personal.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Professional Profile
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Code Repository
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Available for Remote Work</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-xl border border-blue-400/30"
            >
              <h4 className="text-xl font-bold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  1.5+ years of proven experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Specialized in backend development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Fast learner and problem solver
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Clean, maintainable code advocate
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  placeholder="Project discussion, Job opportunity, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitted
                    ? 'bg-green-600 text-white cursor-default'
                    : isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent Successfully!
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full mr-2"
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;