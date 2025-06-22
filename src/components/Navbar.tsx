import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import resume  from '../data/Ankit_Mewada_01.pdf'
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">AM</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:block">
                {personal.name}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href={resume}
                target="_blank" 
                download={resume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 overflow-hidden"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-left"
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <a
                  href={personal.resume}
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="flex items-center justify-center px-4 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 rounded-lg transition-all duration-200 font-medium"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;