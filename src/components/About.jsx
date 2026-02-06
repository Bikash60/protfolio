import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Deep proficiency in React.js, Node.js, and modern JavaScript ecosystems with 4.6 years of hands-on experience."
    },
    {
      icon: Rocket,
      title: "Performance Driven",
      description: "Reduced manual processing time by 40% through intelligent automation using Zapier and n8n workflows."
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Built scalable systems for universities and healthcare institutions handling thousands of concurrent users."
    },
    {
      icon: Award,
      title: "Technical Leadership",
      description: "Led development of complex audit and vendor management systems with SSO authentication and RBAC."
    }
  ];

  return (
    <section id="about" className="relative section-container overflow-hidden" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left side - Image and decorative elements */}
        <motion.div variants={itemVariants} className="relative">
          <div className="relative z-10">
            {/* Profile image placeholder with sophisticated border */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              <div className="relative glass-card p-2">
                <div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                    alt="Bikash Kumar Chand"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              className="absolute -top-6 -right-6 glass-card px-4 py-2 border border-accent-cyan/30 will-change-transform"
            >
              <span className="text-accent-cyan font-mono text-sm">React.js</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              className="absolute -bottom-6 -left-6 glass-card px-4 py-2 border border-accent-blue/30 will-change-transform"
            >
              <span className="text-accent-blue font-mono text-sm">Node.js</span>
            </motion.div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-accent-cyan/5 to-transparent blur-3xl -z-10" />
        </motion.div>

        {/* Right side - Content */}
        <div>
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
              <span className="text-accent-cyan font-mono text-sm tracking-wider">ABOUT ME</span>
            </div>
            
            <h2 className="heading-lg mb-6">
              Building Digital Excellence, One Line at a Time
            </h2>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed text-lg">
              <p>
                Full-stack developer with a passion for creating elegant, scalable solutions that 
                drive real business impact. With over 4.6 years of experience, I've mastered the 
                art of transforming complex requirements into intuitive, high-performance applications.
              </p>
              
              <p>
                My expertise spans the entire development lifecycle—from architecting robust Node.js 
                backends to crafting pixel-perfect React interfaces. I specialize in API integrations, 
                payment gateways, and AWS services, with a proven track record of reducing operational 
                overhead through intelligent automation.
              </p>
              
              <p>
                Currently leading development at <span className="text-accent-cyan font-semibold">
                DBI 360</span>, where I architect enterprise-grade solutions for healthcare and 
                education sectors, managing complex audit systems and vendor management platforms.
              </p>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 mt-10">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -3 }}
                className="glass-card p-5 hover:border-accent-cyan/30 transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-accent-cyan mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg mb-2 text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
