import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Bikash60",
      color: "hover:text-accent-cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bikash-chand-7247aa244",
      color: "hover:text-accent-blue"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/bickychand60",
      color: "hover:text-accent-purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section id="contact" className="relative section-container overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">GET IN TOUCH</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>
          
          <h2 className="heading-lg mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:bikashchand1998@gmail.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-xl border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent-cyan/20 rounded-lg group-hover:bg-accent-cyan/30 transition-colors">
                    <Mail className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Email</p>
                    <p className="text-neutral-100 font-semibold">bikashchand1998@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+918917453160"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-xl border border-accent-blue/30 hover:border-accent-blue transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent-blue/20 rounded-lg group-hover:bg-accent-blue/30 transition-colors">
                    <Phone className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Phone</p>
                    <p className="text-neutral-100 font-semibold">+91 8917453160</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 rounded-xl border border-accent-purple/30">
                  <div className="p-3 bg-accent-purple/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Location</p>
                    <p className="text-neutral-100 font-semibold">Bhubaneswar, Odisha, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Availability */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6">
                Social Media
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 glass-card border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6 border-accent-cyan/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse" />
                <div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-2">
                    Available for Opportunities
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    I'm currently open to full-time positions, freelance projects, and consulting opportunities. 
                    Let's build something amazing together!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
