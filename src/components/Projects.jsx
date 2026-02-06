import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Vendor Management & Inventory System",
      company: "DBI 360",
      period: "Aug 2024 - Present",
      category: "Enterprise Platform",
      description: "Comprehensive vendor management and inventory automation platform designed for healthcare supply chain optimization.",
      fullDescription: "Developed and implemented a sophisticated vendor management and inventory automation platform that revolutionized supply chain operations. The system integrates REST APIs for real-time data exchange with third-party vendors, enabling seamless communication and automated workflows. Utilized advanced automation tools including Zapier for email triggering and n8n for complex workflow orchestration, achieving a 40% reduction in manual processing time.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "REST API", "Zapier", "n8n"],
      features: [
        "Real-time vendor data synchronization",
        "Automated inventory tracking and alerts",
        "Custom workflow automation reducing manual tasks by 40%",
        "Comprehensive reporting and analytics dashboard",
        "Integration with multiple third-party vendor systems"
      ],
      impact: "40% reduction in manual processing time, improved vendor response rates by 60%",
      gradient: "from-accent-cyan to-accent-blue"
    },
    {
      title: "Audit Management System",
      company: "DBI 360",
      period: "Aug 2024 - Present",
      category: "Healthcare Compliance",
      description: "Advanced audit management platform with SSO authentication and role-based access control for healthcare organizations.",
      fullDescription: "Architected and developed a comprehensive audit management system handling multiple complex forms and interlinking all modules for exhaustive reporting capabilities. Implemented enterprise-grade SSO authentication with sophisticated role-based access control to securely manage different user roles including Auditor, Admin, and Reviewer. The system provides real-time audit tracking, automated report generation, and compliance monitoring.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "SSO", "RBAC"],
      features: [
        "SSO authentication with multiple identity providers",
        "Granular role-based access control (Auditor, Admin, Reviewer)",
        "Multi-form audit workflow with automated routing",
        "Real-time compliance tracking and alerts",
        "Comprehensive inter-module reporting system"
      ],
      impact: "Streamlined audit processes, 100% compliance tracking, reduced audit cycle time by 35%",
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      title: "Admission Management System",
      company: "Silicon Tech Lab",
      period: "2021 - 2024",
      category: "Education",
      description: "Scalable admission platform for Purnea University enabling seamless application workflows and real-time data management.",
      fullDescription: "Built a comprehensive admission management system for Purnea University using React and Node.js, transforming the traditional application process into a streamlined digital experience. The platform handles thousands of concurrent applications with real-time data processing, integrated payment gateway for application fees, automated SMS and email notifications, and a sophisticated applicant tracking system.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "Payment Gateway", "SMS/Email API"],
      features: [
        "Multi-step application form with validation",
        "Integrated payment gateway for seamless transactions",
        "Automated SMS and email notification system",
        "Real-time application tracking for applicants and administrators",
        "Document upload and verification workflow"
      ],
      impact: "Processed 10,000+ applications, 95% reduction in processing time, 99.9% uptime during peak admission season",
      gradient: "from-accent-purple to-accent-cyan"
    },
    {
      title: "Recruitment Portal",
      company: "Silicon Tech Lab",
      period: "2021 - 2024",
      category: "HR Management",
      description: "Advanced recruitment module for AIIMS and DSEU optimizing applicant management and streamlining hiring workflows.",
      fullDescription: "Created a sophisticated recruitment portal for prestigious institutions including AIIMS and DSEU using React and Node.js. The system optimizes applicant management through intelligent workflow automation, integrates AWS Mail service for scalable email delivery, and utilizes AWS S3 for secure document storage. Features include applicant tracking, automated screening, interview scheduling, and comprehensive analytics.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "AWS SES", "AWS S3"],
      features: [
        "Intelligent applicant tracking system",
        "Automated resume screening and shortlisting",
        "Interview scheduling with calendar integration",
        "AWS S3 integration for secure document management",
        "Bulk email notifications via AWS SES",
        "Comprehensive recruitment analytics dashboard"
      ],
      impact: "Reduced hiring cycle time by 50%, improved candidate experience ratings by 85%, managed 5,000+ applications",
      gradient: "from-accent-cyan via-accent-blue to-accent-purple"
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
    <section id="projects" className="relative section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">FEATURED WORK</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>
          
          <h2 className="heading-lg mb-6">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Transforming complex business requirements into elegant, scalable solutions
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass-card overflow-hidden hover:border-accent-cyan/50 transition-all duration-500 h-full">
                {/* Project image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 mix-blend-overlay z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-accent-cyan text-xs font-mono rounded-full border border-accent-cyan/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-100 mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-accent-cyan font-semibold text-sm">
                        {project.company}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-accent-cyan transition-colors duration-300" />
                  </div>

                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs font-mono rounded border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-accent-cyan text-xs font-mono">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-primary/95 backdrop-blur-lg border-b border-neutral-800 p-6 flex items-start justify-between z-10">
              <div>
                <h3 className="text-3xl font-bold text-neutral-100 mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.period}
                  </span>
                  <span className="text-accent-cyan">{selectedProject.company}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors duration-300"
              >
                <X className="w-6 h-6 text-neutral-400 hover:text-neutral-100" />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-8">
              {/* Full description */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">Overview</h4>
                <p className="text-neutral-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Key features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-neutral-100 mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-300">
                      <span className="text-accent-cyan mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-8 p-6 bg-accent-cyan/5 border border-accent-cyan/20 rounded-xl">
                <h4 className="text-lg font-semibold text-accent-cyan mb-2">Impact & Results</h4>
                <p className="text-neutral-300">{selectedProject.impact}</p>
              </div>

              {/* Full tech stack */}
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-neutral-800/50 text-neutral-300 text-sm font-mono rounded-lg border border-neutral-700 hover:border-accent-cyan/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
