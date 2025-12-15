import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Terminal, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

// Generates a tech-themed placeholder based on project details
const TechPlaceholder = ({ title, type }: { title: string, type: string }) => {
  // Deterministic variation based on string length to keep it consistent per project
  const variant = (title.length + (type?.length || 0)) % 3;
  
  const getIcon = () => {
      switch(variant) {
          case 0: return <Code className="w-10 h-10 text-emerald-500" />;
          case 1: return <Terminal className="w-10 h-10 text-blue-500" />;
          default: return <Cpu className="w-10 h-10 text-purple-500" />;
      }
  };

  const getAccentColor = () => {
       switch(variant) {
          case 0: return 'border-emerald-500/20 bg-emerald-500/5';
          case 1: return 'border-blue-500/20 bg-blue-500/5';
          default: return 'border-purple-500/20 bg-purple-500/5';
      }
  }

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-tech-bg/50 group-hover:bg-tech-bg transition-colors duration-500`}>
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.2) 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
        }}></div>
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Center Card */}
        <div className={`relative z-10 p-5 rounded-2xl border ${getAccentColor()} backdrop-blur-sm flex flex-col items-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
            <div className="mb-3 p-3 rounded-full bg-tech-bg shadow-inner">
                {getIcon()}
            </div>
            <div className="h-1 w-12 rounded-full bg-tech-muted/20 overflow-hidden">
                <div className="h-full w-full bg-tech-muted/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
        </div>
        
        {/* Text Overlay */}
        <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-mono text-tech-muted uppercase tracking-[0.2em]">
                {type || 'PROJECT'}
            </span>
        </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
    // Determine if we should show iframe or placeholder
    // We prioritize liveUrl for the "Live View"
    const showLivePreview = Boolean(project.liveUrl);

    // Safely extract hostname for display
    let hostname = 'localhost:3000';
    try {
        if (project.liveUrl) {
            hostname = new URL(project.liveUrl).hostname;
        }
    } catch (e) {
        // Fallback if URL is invalid
    }

    return (
        <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            layout
            className="group relative bg-tech-surface rounded-xl overflow-hidden border border-tech-muted/10 hover:border-tech-accent/50 transition-all hover:shadow-2xl hover:shadow-tech-accent/10 block cursor-pointer flex flex-col h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
              {/* Browser-like Header */}
              <div className="h-8 bg-tech-bg border-b border-tech-muted/10 flex items-center px-4 space-x-2 shrink-0 z-20 relative">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="ml-2 flex-1 h-4 bg-tech-surface rounded-full opacity-50 text-[8px] flex items-center px-2 text-tech-muted overflow-hidden font-mono truncate">
                    {hostname}
                  </div>
              </div>

              {/* Project Preview Window */}
              <div className="relative h-56 overflow-hidden bg-white shrink-0">
                {showLivePreview ? (
                    <div className="w-full h-full relative">
                         {/* 
                            Desktop Simulation Scaling:
                            We create a container 4x the width/height and scale it down by 0.25.
                            This simulates a ~1400px wide viewport in the small card.
                         */}
                        <div className="w-[400%] h-[400%] origin-top-left transform scale-[0.25]">
                            <iframe 
                                src={project.liveUrl}
                                title={project.title}
                                className="w-full h-full border-none"
                                loading="lazy"
                                scrolling="no"
                                tabIndex={-1}
                                style={{ pointerEvents: 'none' }} // Pass clicks to parent anchor
                            />
                        </div>
                        {/* Interactive overlay to capture clicks for the parent link and add hover effect */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-tech-accent/5 transition-colors z-10" />
                    </div>
                ) : (
                    <div className="h-full w-full bg-tech-bg">
                        <TechPlaceholder title={project.title} type={project.tags[0]} />
                    </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow relative z-20 bg-tech-surface">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-tech-accent transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="text-tech-muted hover:text-white transition-colors p-1 bg-tech-bg rounded">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-tech-muted text-xs mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] uppercase font-bold text-tech-secondary bg-tech-secondary/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
        </motion.a>
    );
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'DSA' | 'C/C++' | 'Personal'>('All');

  const categories = ['All', 'DSA', 'C/C++', 'Personal'];

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'DSA') return p.tags.includes('DSA');
    if (filter === 'C/C++') return p.tags.includes('C/C++');
    if (filter === 'Personal') return p.category === 'Personal';
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-tech-bg">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
            <span className="text-tech-accent">04.</span> Featured Projects
          </h2>
          <div className="w-20 h-1 bg-tech-accent mx-auto rounded-full mb-8"></div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                  filter === cat 
                    ? 'bg-tech-accent text-tech-bg font-bold shadow-lg shadow-tech-accent/20' 
                    : 'bg-tech-surface text-tech-muted hover:text-white border border-tech-muted/20 hover:border-tech-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;