import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-tech-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-accent/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
            <span className="text-tech-secondary">02.</span> Experience
          </h2>
          <div className="w-20 h-1 bg-tech-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline central line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-secondary via-tech-accent to-tech-secondary opacity-30"></div>

          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-start mb-16 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Spacer for opposite side */}
              <div className="flex-1 hidden md:block"></div>

              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-tech-bg border-4 border-tech-secondary z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300 group-hover:border-tech-accent">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              </div>

              {/* Content Card */}
              <div className="flex-1 pl-12 md:pl-0 md:px-12 w-full">
                <div className="bg-tech-surface p-6 rounded-xl border border-tech-muted/10 border-l-4 border-l-tech-secondary shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-300 group-hover:border-l-tech-accent">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-tech-accent transition-colors">{exp.role}</h3>
                    <span className="flex items-center text-xs text-tech-accent font-mono bg-tech-accent/10 px-3 py-1 rounded-full mt-2 sm:mt-0 border border-tech-accent/20">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-tech-secondary font-medium mb-4 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {exp.institution}
                  </h4>
                  <p className="text-tech-muted mb-4 text-sm leading-relaxed border-l-2 border-tech-muted/20 pl-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <ul className="list-disc list-inside text-sm text-tech-text space-y-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-tech-muted/10">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-tech-bg bg-tech-muted px-2 py-0.5 rounded hover:bg-white transition-colors cursor-default">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;