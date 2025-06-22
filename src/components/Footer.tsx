import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: personal.github, icon: Github, label: 'GitHub' },
    { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {personal.name}
            </h3>
            <p className="text-gray-400">
              Full Stack MERN Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <nav className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center text-gray-400">
            <span>© {currentYear} {personal.name}. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1"
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400 mx-1" />
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Built with React & Tailwind CSS</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Scroll to top hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2"
            >
              ↑
            </motion.div>
            Back to top
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;