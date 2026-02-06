import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: reduceMotion ? 0 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static background (NO animation) */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* ONE subtle floating orb (desktop only) */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          className="absolute top-24 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl hidden lg:block will-change-transform"
        />
      )}

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">
              SENIOR SOFTWARE ENGINEER
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading-xl mb-6">
            <span className="block text-neutral-100">Bikash Kumar</span>
            <span className="block gradient-text">Chand</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-neutral-300 max-w-3xl mb-10 leading-relaxed"
          >
            Crafting scalable full-stack solutions with precision and elegance.
            Specialized in React ecosystems and backend architectures.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects <ArrowRight className="w-5 h-5" />
            </a>

            <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 text-neutral-300 font-semibold rounded-lg border border-neutral-700 hover:text-accent-cyan transition-colors"
            >
              <Download className="w-5 h-5 inline mr-2" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a key={i} className="text-neutral-400 hover:text-accent-cyan transition-colors">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator – ONLY infinite animation kept */}
      {!reduceMotion && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-accent-cyan/30 rounded-full will-change-transform"
        />
      )}
    </section>
  );
};

export default Hero;
