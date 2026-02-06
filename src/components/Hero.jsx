import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating gradient orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">
              SENIOR SOFTWARE ENGINEER
            </span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1 variants={itemVariants} className="heading-xl mb-6">
            <span className="block text-neutral-100">Bikash Kumar</span>
            <span className="block gradient-text">Chand</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-neutral-300 max-w-3xl mb-8 leading-relaxed text-balance"
          >
            Crafting scalable full-stack solutions with precision and elegance.
            Specialized in React ecosystems, Node.js architectures, and seamless API integrations.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 mb-12">
            <div className="flex flex-col">
              <span className="text-4xl font-bold gradient-text">4.6+</span>
              <span className="text-neutral-400 text-sm mt-1">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold gradient-text">15+</span>
              <span className="text-neutral-400 text-sm mt-1">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold gradient-text">10+</span>
              <span className="text-neutral-400 text-sm mt-1">Tech Stack</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="px-6 py-3 text-neutral-300 font-semibold rounded-lg hover:text-accent-cyan transition-colors duration-300 inline-flex items-center gap-2 border border-transparent hover:border-neutral-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6">
            <motion.a
              href="https://github.com/bikashchand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent-cyan transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/bikashchand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent-cyan transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:bikashchand1998@gmail.com"
              className="text-neutral-400 hover:text-accent-cyan transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-cyan/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent-cyan rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
