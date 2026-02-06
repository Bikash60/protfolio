import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Dietary Business Intelligence (DBI 360)",
      location: "Bhubaneswar, Odisha",
      period: "Aug 2024 - Present",
      type: "Current Position",
      responsibilities: [
        "Leading development of enterprise vendor management and inventory automation platform",
        "Architecting REST API integrations for real-time data exchange with third-party vendors",
        "Implementing advanced workflow automation using Zapier and n8n, reducing manual processing by 40%",
        "Developing comprehensive audit management system with SSO authentication and RBAC",
        "Managing complex form interlinking and multi-module reporting systems"
      ],
      technologies: ["React.js", "Node.js", "MySQL", "Zapier", "n8n", "REST API", "SSO"],
      highlight: true
    },
    {
      role: "Software Engineer",
      company: "Silicon Tech Lab (STL)",
      location: "Bhubaneswar, Odisha",
      period: "Jul 2021 - Aug 2024",
      type: "3 Years",
      responsibilities: [
        "Developed admission management system for Purnea University with seamless workflows",
        "Built recruitment portal for AIIMS and DSEU optimizing applicant management",
        "Integrated payment gateways, SMS, and email services across multiple projects",
        "Implemented AWS services (S3, SES) for scalable file storage and email delivery",
        "Collaborated with cross-functional teams to deliver projects on tight deadlines"
      ],
      technologies: ["React.js", "Node.js", "MySQL", "AWS S3", "AWS SES", "Payment Gateways"],
      highlight: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="experience" className="relative section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">PROFESSIONAL JOURNEY</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>
          
          <h2 className="heading-lg mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Building impactful solutions across healthcare, education, and enterprise sectors
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-auto md:right-auto md:-translate-x-1/2 top-0 md:top-6 w-4 h-4 rounded-full bg-accent-cyan border-4 border-primary z-10" 
                     style={index % 2 === 0 ? { right: 'calc(100% - 2rem)' } : { left: '-2rem' }} 
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`glass-card p-8 ml-12 md:ml-0 ${
                    exp.highlight 
                      ? 'border-accent-cyan/50 hover:border-accent-cyan' 
                      : 'hover:border-accent-blue/50'
                  } transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Highlight badge */}
                  {exp.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-xs font-mono rounded-full border border-accent-cyan/30">
                        CURRENT
                      </span>
                    </div>
                  )}

                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    exp.highlight ? 'from-accent-cyan/5' : 'from-accent-blue/5'
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${
                          exp.highlight 
                            ? 'bg-accent-cyan/10 border border-accent-cyan/30' 
                            : 'bg-accent-blue/10 border border-accent-blue/30'
                        }`}>
                          <Briefcase className={`w-5 h-5 ${
                            exp.highlight ? 'text-accent-cyan' : 'text-accent-blue'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-neutral-100 mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-accent-cyan font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded ${
                          exp.highlight 
                            ? 'bg-accent-cyan/10 text-accent-cyan' 
                            : 'bg-accent-blue/10 text-accent-blue'
                        } font-mono text-xs`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-neutral-400">
                            <span className="text-accent-cyan mt-1.5">•</span>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs font-mono rounded border border-neutral-700 hover:border-accent-cyan/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
