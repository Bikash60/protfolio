import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Layers, 
  Workflow, 
  Globe 
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      category: "Frontend Development",
      color: "cyan",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 93 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "jQuery", level: 85 },
        { name: "Bootstrap & Tailwind", level: 88 }
      ]
    },
    {
      icon: Database,
      category: "Backend & Databases",
      color: "blue",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST API Design", level: 90 },
        { name: "PHP", level: 75 }
      ]
    },
    {
      icon: Cloud,
      category: "Cloud & DevOps",
      color: "purple",
      skills: [
        { name: "AWS (S3, SNS, SES)", level: 85 },
        { name: "Git & Version Control", level: 90 },
        { name: "SVN", level: 80 }
      ]
    },
    {
      icon: Workflow,
      category: "Automation & Integration",
      color: "cyan",
      skills: [
        { name: "Zapier", level: 88 },
        { name: "n8n Workflows", level: 85 },
        { name: "Payment Gateways", level: 87 },
        { name: "SMS & Email APIs", level: 90 }
      ]
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: 'border-accent-cyan/30',
        text: 'text-accent-cyan',
        gradient: 'from-accent-cyan/10 to-transparent',
        glow: 'shadow-accent-cyan/20'
      },
      blue: {
        border: 'border-accent-blue/30',
        text: 'text-accent-blue',
        gradient: 'from-accent-blue/10 to-transparent',
        glow: 'shadow-accent-blue/20'
      },
      purple: {
        border: 'border-accent-purple/30',
        text: 'text-accent-purple',
        gradient: 'from-accent-purple/10 to-transparent',
        glow: 'shadow-accent-purple/20'
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="relative section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider">TECHNICAL EXPERTISE</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>
          
          <h2 className="heading-lg mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glass-card p-8 hover:border-${category.color}/30 transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${colorClasses.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses.gradient} border ${colorClasses.border}`}>
                      <category.icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-100">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-neutral-300 font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className={`${colorClasses.text} font-mono text-sm`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut" 
                            }}
                            className={`h-full bg-gradient-to-r ${colorClasses.gradient.replace('to-transparent', `to-${category.color}`)} rounded-full`}
                            style={{
                              background: category.color === 'cyan' 
                                ? 'linear-gradient(to right, #00D9FF, #4D7CFE)' 
                                : category.color === 'blue'
                                ? 'linear-gradient(to right, #4D7CFE, #8B5CF6)'
                                : 'linear-gradient(to right, #8B5CF6, #00D9FF)'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tech stack badges */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-center text-neutral-400 text-sm font-mono mb-6 tracking-wider">
            ALSO PROFICIENT IN
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['JSON', 'AJAX', 'REST API', 'Git', 'SVN', 'Responsive Design', 'Agile/Scrum'].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 glass-card text-sm text-neutral-300 font-mono border border-neutral-700 hover:border-accent-cyan/50 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
