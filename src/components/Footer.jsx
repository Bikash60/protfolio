import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/bikashchand',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/bikashchand',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:bikashchand1998@gmail.com',
    },
  ];

  return (
    <footer className="relative border-t border-neutral-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4"
            >
              <span className="text-3xl font-display font-bold">
                <span className="text-neutral-100">Bikash</span>
                <span className="gradient-text">.</span>
              </span>
            </motion.div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Full-stack developer crafting elegant, scalable solutions. 
              Passionate about creating impactful digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-card border-accent-cyan/30 hover:border-accent-cyan text-neutral-400 hover:text-accent-cyan transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-neutral-400 hover:text-accent-cyan transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <a 
                  href="mailto:bikashchand1998@gmail.com"
                  className="hover:text-accent-cyan transition-colors duration-300"
                >
                  bikashchand1998@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918917453160"
                  className="hover:text-accent-cyan transition-colors duration-300"
                >
                  +91 8917453160
                </a>
              </li>
              <li className="text-neutral-500">
                Bhubaneswar, Odisha, India
              </li>
            </ul>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 btn-secondary inline-flex items-center gap-2 text-sm"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
            <p className="flex items-center gap-2">
              © {currentYear} Bikash Kumar Chand. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
