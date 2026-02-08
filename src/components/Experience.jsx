import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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
        "Developing audit management system with SSO authentication and RBAC",
        "Managing complex form interlinking and reporting modules",
      ],
      technologies: ["React.js", "Node.js", "MySQL", "Zapier", "n8n", "REST API", "SSO"],
      highlight: true,
    },
    {
      role: "Software Engineer",
      company: "Silicon Tech Lab (STL)",
      location: "Bhubaneswar, Odisha",
      period: "Jul 2021 - Aug 2024",
      type: "3 Years",
      responsibilities: [
        "Developed admission management system for Purnea University",
        "Built recruitment portals for AIIMS and DSEU",
        "Integrated payment gateways, SMS, and email services",
        "Implemented AWS S3 and SES for scalable infrastructure",
        "Collaborated with cross-functional teams under tight deadlines",
      ],
      technologies: ["React.js", "Node.js", "MySQL", "AWS S3", "AWS SES", "Payments"],
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" ref={ref} className="relative section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">
              PROFESSIONAL JOURNEY
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>

          <h2 className="heading-lg mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Building scalable solutions across healthcare, education, and enterprise systems
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glass-card p-8 relative overflow-hidden transition-all duration-300 ${
                exp.highlight
                  ? "border-accent-cyan/40 hover:border-accent-cyan"
                  : "hover:border-accent-blue/50"
              }`}
            >
              {/* Highlight Badge */}
              {exp.highlight && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-xs font-mono rounded-full border border-accent-cyan/30">
                  CURRENT
                </span>
              )}

              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  exp.highlight ? "from-accent-cyan/5" : "from-accent-blue/5"
                } to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-2 rounded-lg border ${
                      exp.highlight
                        ? "bg-accent-cyan/10 border-accent-cyan/30"
                        : "bg-accent-blue/10 border-accent-blue/30"
                    }`}
                  >
                    <Briefcase
                      className={`w-5 h-5 ${
                        exp.highlight ? "text-accent-cyan" : "text-accent-blue"
                      }`}
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-neutral-100">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-accent-cyan font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-neutral-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded font-mono text-xs ${
                      exp.highlight
                        ? "bg-accent-cyan/10 text-accent-cyan"
                        : "bg-accent-blue/10 text-accent-blue"
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-neutral-400">
                      <span className="text-accent-cyan">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono rounded border border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-accent-cyan/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
