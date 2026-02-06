import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      scrollToTop();
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-primary/80 backdrop-blur-lg border-b border-neutral-800/50 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-50"
            >
              <span className="text-2xl font-display font-bold">
                <span className="text-neutral-100">Bikash</span>
                <span className="gradient-text">.</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  whileHover={{ y: -2 }}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent-cyan'
                      : 'text-neutral-300 hover:text-accent-cyan'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-cyan"
                    />
                  )}
                </motion.a>
              ))}
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-neutral-300 hover:text-accent-cyan transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        {/* Backdrop */}
        <motion.div
          initial={false}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <motion.div
          initial={false}
          animate={{
            x: isMobileMenuOpen ? 0 : '100%',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-primary border-l border-neutral-800 p-8 pt-24"
        >
          <nav className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ x: 50, opacity: 0 }}
                animate={{
                  x: isMobileMenuOpen ? 0 : 50,
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.05 }}
                className={`text-2xl font-semibold transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent-cyan'
                    : 'text-neutral-300 hover:text-accent-cyan'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            
            <motion.a
              href="/resume.pdf"
              download
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: isMobileMenuOpen ? 0 : 50,
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              transition={{ delay: navItems.length * 0.05 }}
              className="btn-primary text-lg inline-flex items-center justify-center gap-2 mt-4"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </nav>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;
