import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import profimg from "../assets/profimg.png";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: { y: reduceMotion ? 0 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-14 items-center min-h-screen">
        
        {/* LEFT — TEXT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="max-w-xl"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">
              SENIOR SOFTWARE ENGINEER
            </span>
          </motion.div>

          <motion.h1 variants={item} className="heading-xl mb-6">
            <span className="block text-neutral-100">Bikash Kumar</span>
            <span className="block gradient-text">Chand</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl text-neutral-300 mb-10">
            Crafting scalable full-stack solutions with precision and elegance.
            Specialized in React ecosystems and backend architectures.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
              <Mail size={18} /> Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-neutral-700 rounded-lg text-neutral-300 hover:text-accent-cyan transition"
            >
              <Download size={18} className="inline mr-2" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-6">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a key={i} className="text-neutral-400 hover:text-accent-cyan transition">
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple opacity-20 blur-xl rounded-2xl" />
            <div className="relative glass-card p-2">
              <img
                src={profimg}
                alt="Bikash Kumar Chand"
                 className="w-96 h-96 object-cover rounded-2xl opacity-90 group-hover:opacity-100 transition"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
