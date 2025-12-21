import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Terminal, Download, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const StatsCounter = ({ value, label, isNumeric = false }: { value: string; label: string, isNumeric?: boolean }) => {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => 
    isNumeric ? Math.round(current).toLocaleString() + '+' : value
  );

  useEffect(() => {
    if (isNumeric) {
      // Extract number from string if possible, else just set it
      const num = parseInt(value.replace(/\D/g, ''));
      if (!isNaN(num)) {
        spring.set(num);
      }
    }
  }, [isNumeric, value, spring]);

  return (
    <div className="flex flex-col items-center md:items-start">
      <motion.span 
        className="text-4xl font-bold text-tech-accent font-mono"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isNumeric ? display : value}
      </motion.span>
      <span className="text-sm text-tech-muted uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
};

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const nameText = "I am Sheeraz.";
  //https://drive.google.com/file/d/1xWkExytScoVw8UkywKQAk4yBZ-CoQlUV/view?usp=sharing (new)
  //https://drive.google.com/file/d/1LL4_wmNkCtJFCU3B4uZ3A2EH1nYiIFGV/view?usp=drive_link (old)
  const CV_LINK = "https://drive.google.com/file/d/1xWkExytScoVw8UkywKQAk4yBZ-CoQlUV/view?usp=sharing";
  
  // Using the thumbnail endpoint is often more reliable for embedding than the export=view endpoint
  // &sz=w1000 requests a large version of the image (width 1000px)
  const PROFILE_IMAGE_URL = "https://drive.google.com/thumbnail?id=1qxU6ZJZn9Bps3z0Zgfm0kNB7xGp8J7aQ&sz=w1000";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(nameText.slice(0, index));
      index++;
      if (index > nameText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [nameText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full circuit-pattern animate-pulse-slow"></div>
        <div className="absolute right-10 top-20 w-72 h-72 bg-tech-secondary blur-[100px] rounded-full mix-blend-screen"></div>
        <div className="absolute left-10 bottom-20 w-72 h-72 bg-tech-accent blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-tech-surface/50 border border-tech-accent/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-tech-accent animate-pulse"></span>
            <span className="text-tech-accent text-xs font-mono font-bold uppercase">{PERSONAL_INFO.title}</span>
          </div>
          
          <div className="mb-2">
             <span className="text-xl font-mono text-tech-muted block">
               &lt;Hello World /&gt;
             </span>
          </div>
          
          <div className="h-16 md:h-24 mb-4">
             <h1 className="text-5xl md:text-7xl font-bold font-mono text-white whitespace-nowrap leading-tight">
              {text}
              <span className="animate-pulse text-tech-accent">_</span>
            </h1>
          </div>
         
          <div className="mt-2 mb-8 w-full">
            <h2 className="text-sm md:text-lg lg:text-xl text-tech-secondary font-medium leading-relaxed">
              {PERSONAL_INFO.tagline}
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href={CV_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-tech-muted/30 hover:border-tech-accent text-tech-text hover:text-tech-accent font-semibold rounded-lg transition-all flex items-center bg-tech-surface/30 hover:bg-tech-surface"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-tech-muted/20 pt-8">
            <StatsCounter value="11+" label="Years Experience" />
            <StatsCounter value="5000" label="Students Taught" isNumeric={true} />
            <StatsCounter value="5+" label="Certifications" />
          </div>
        </motion.div>

        <motion.div 
          className="relative mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-sm lg:max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-tech-accent/30 rounded-2xl rotate-3"></div>
            <div className="absolute inset-0 border-2 border-tech-secondary/30 rounded-2xl -rotate-3"></div>
            <div className="absolute inset-0 bg-tech-surface rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group">
                <img 
                    src={PROFILE_IMAGE_URL}
                    alt="Muhammad Sheeraz" 
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      // Fallback if Google Drive link fails (e.g. strict CORS or permissions)
                      target.src = "https://placehold.co/600x600/1e293b/10b981?text=Sheeraz";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-bg via-transparent to-transparent"></div>
                
                {/* Floating Code Snippet Card */}
                <motion.div 
                    className="absolute bottom-6 left-6 right-6 bg-tech-bg/90 backdrop-blur-md p-4 rounded-lg border border-tech-muted/20 font-mono text-xs shadow-xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="flex space-x-1 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-tech-secondary">class <span className="text-yellow-400">Educator</span> {"{"}</p>
                    <p className="pl-4 text-tech-text">def <span className="text-blue-400">teaching_philosophy</span>():</p>
                    <p className="pl-8 text-green-400">return "Empower through Code"</p>
                    <p className="text-tech-secondary">{"}"}</p>
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-tech-muted animate-bounce cursor-pointer hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <a href="#about"><ChevronDown className="w-8 h-8" /></a>
      </motion.div>
    </section>
  );
};

export default Hero;
