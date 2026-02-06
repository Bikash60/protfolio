import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Utkal University",
      location: "Bhubaneswar, Odisha",
      period: "2018 - 2021",
      description: "Advanced studies in computer science, software engineering, and modern application development.",
      highlights: [
        "Specialized in Full-Stack Development",
        "Research in Web Technologies",
        "Database Management & Optimization"
      ],
      gradient: "from-accent-cyan to-accent-blue"
    },
    {
      degree: "Bachelor of Information Science and Telecommunication",
      institution: "Gangadhar Meher University",
      location: "Sambalpur, Odisha",
      period: "2015 - 2018",
      description: "Foundation in information systems, telecommunications, and software development principles.",
      highlights: [
        "Core Computer Science Fundamentals",
        "Networking & Telecommunications",
        "Software Development Life Cycle"
      ],
      gradient: "from-accent-blue to-accent-purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="education" className="relative section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">ACADEMIC BACKGROUND</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>
          
          <h2 className="heading-lg mb-6">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Strong academic foundation in computer science and software engineering
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-card p-8 hover:border-accent-cyan/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 rounded-xl border border-accent-cyan/30">
                    <GraduationCap className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="text-accent-cyan text-sm font-mono">
                      {index === 0 ? 'Master\'s Degree' : 'Bachelor\'s Degree'}
                    </span>
                  </div>
                </div>

                {/* Degree */}
                <h3 className="text-2xl font-bold text-neutral-100 mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-lg text-accent-blue font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-neutral-400 text-sm mb-4">
                  {edu.location}
                </p>

                {/* Description */}
                <p className="text-neutral-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent-cyan" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-neutral-400 text-sm">
                        <span className="text-accent-cyan mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
