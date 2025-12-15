import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, ChevronDown, ChevronUp, Quote, GraduationCap, Globe2, Award } from 'lucide-react';
import { COURSES, TESTIMONIALS } from '../constants';

export const Courses: React.FC = () => {
  return (
    <section className="py-20 bg-tech-surface/30">
      <div className="container mx-auto px-6">
         <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
            <span className="text-tech-secondary">05.</span> Global Curriculum Expertise
          </h2>
          <div className="w-20 h-1 bg-tech-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-tech-muted max-w-2xl mx-auto">
            Delivering world-class computer science education aligned with international standards (IGCSE, IB, AP).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course, index) => (
            <motion.div 
              key={course.id}
              className="bg-tech-bg border border-tech-muted/10 rounded-xl overflow-hidden hover:border-tech-accent transition-all duration-300 group hover:-translate-y-2 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Color Bar */}
              <div className={`h-2 w-full ${index % 2 === 0 ? 'bg-tech-accent' : 'bg-tech-secondary'}`}></div>
              
              <div className="p-6">
                <div className="mb-4">
                    {index === 0 ? <Award className="w-8 h-8 text-yellow-500 mb-2" /> : 
                     index === 1 ? <Globe2 className="w-8 h-8 text-blue-500 mb-2" /> :
                     index === 2 ? <BookOpen className="w-8 h-8 text-green-500 mb-2" /> :
                     <GraduationCap className="w-8 h-8 text-purple-500 mb-2" />}
                    
                    <h3 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-tech-accent transition-colors">
                        {course.title}
                    </h3>
                    <span className="text-xs font-mono text-tech-muted bg-tech-surface px-2 py-1 rounded inline-block border border-tech-muted/20">
                        {course.level}
                    </span>
                </div>

                <p className="text-sm text-tech-muted mb-4 line-clamp-4">
                    {course.description}
                </p>

                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 3).map(topic => (
                            <span key={topic} className="text-[10px] bg-tech-surface border border-tech-muted/20 px-2 py-1 rounded text-tech-secondary">
                                {topic}
                            </span>
                        ))}
                        {course.topics.length > 3 && (
                            <span className="text-[10px] bg-tech-surface border border-tech-muted/20 px-2 py-1 rounded text-tech-muted">
                                +{course.topics.length - 3} more
                            </span>
                        )}
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

export const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-tech-bg">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
                        <Users className="inline-block w-8 h-8 mr-2 text-tech-accent" />
                        Feedback
                    </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {TESTIMONIALS.map((t, idx) => (
                        <motion.div 
                            key={t.id}
                            className="bg-tech-surface p-8 rounded-2xl relative border border-tech-muted/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <Quote className="absolute top-6 left-6 w-8 h-8 text-tech-muted/20" />
                            <p className="text-tech-muted italic mb-6 pl-6 relative z-10">"{t.content}"</p>
                            <div className="flex items-center pl-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-tech-accent mr-4" />
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <span className="text-xs text-tech-secondary">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};