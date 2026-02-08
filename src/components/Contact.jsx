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
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:5678/webhook/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bikashchand1998@gmail.com",
      href: "mailto:bikashchand1998@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8917453160",
      href: "tel:+918917453160"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhubaneswar, Odisha, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bikashchand",
      color: "hover:text-accent-cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/bikashchand",
      color: "hover:text-accent-blue"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/bikashchand",
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
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 rounded-xl border border-accent-cyan/30 group-hover:border-accent-cyan/50 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-neutral-100 font-medium hover:text-accent-cyan transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-100 font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-6">
                Connect With Me
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
              whileHover={{ scale: 1.02 }}
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

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass-card p-8">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-neutral-300 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-neutral-300 font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-neutral-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-neutral-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
