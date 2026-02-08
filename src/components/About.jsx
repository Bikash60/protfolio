import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Engineering",
      description:
        "4.6+ years of experience building scalable React and Node.js applications with clean architecture and modern tooling.",
    },
    {
      icon: Rocket,
      title: "Performance & Automation",
      description:
        "Reduced manual operational effort by 40% using Zapier, n8n, and optimized backend workflows.",
    },
    {
      icon: Users,
      title: "Enterprise Systems",
      description:
        "Delivered production-grade platforms for universities and healthcare organizations with thousands of users.",
    },
    {
      icon: Award,
      title: "Technical Leadership",
      description:
        "Leading complex systems with SSO, RBAC, audit trails, and multi-module reporting architectures.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-container overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">
              ABOUT ME
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>

          <h2 className="heading-lg mb-6">
            Engineering Scalable & Elegant Digital Products
          </h2>

          <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Senior Software Engineer specializing in full-stack development,
            system architecture, and automation-driven solutions that scale with
            business growth.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={item}
          className="glass-card p-8 md:p-12 mb-16"
        >
          <div className="space-y-5 text-neutral-300 leading-relaxed text-lg">
            <p>
              I’m a full-stack developer with over <span className="text-accent-cyan font-semibold">
              4.6 years</span> of experience designing and delivering
              high-performance applications across healthcare, education, and
              enterprise domains.
            </p>

            <p>
              My expertise spans React-based frontends, Node.js backends,
              RESTful APIs, payment integrations, and AWS services. I focus on
              writing clean, maintainable code while ensuring performance,
              security, and scalability from day one.
            </p>

            <p>
              Currently at <span className="text-accent-cyan font-semibold">
              DBI 360</span>, I lead the development of vendor management,
              inventory automation, and audit systems—architecting solutions
              with SSO authentication, RBAC, and complex reporting pipelines.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={item}
          className="grid sm:grid-cols-2 gap-6"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass-card p-6 hover:border-accent-cyan/30 transition-all duration-300"
            >
              <h.icon className="w-8 h-8 text-accent-cyan mb-4" />
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                {h.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
