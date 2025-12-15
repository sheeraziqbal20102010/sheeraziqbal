import React, { useEffect, useState } from 'react';
import { Monitor, Zap, Palette } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'default' | 'cyber'>('default');

  useEffect(() => {
    if (theme === 'cyber') {
      document.documentElement.classList.add('theme-cyber');
    } else {
      document.documentElement.classList.remove('theme-cyber');
    }
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-tech-surface/90 border-b border-tech-muted/10 backdrop-blur-sm z-[60] flex justify-center sm:justify-between items-center px-6 transition-colors duration-300">
       <div className="flex items-center space-x-2">
         <Palette className="w-4 h-4 text-tech-accent" />
         <span className="text-xs font-mono text-tech-muted uppercase tracking-wider hidden sm:inline">Interface Theme:</span>
       </div>
       
       <div className="flex items-center bg-tech-bg/50 rounded-full p-1 border border-tech-muted/20">
         <button 
           onClick={() => setTheme('default')}
           className={`flex items-center space-x-2 px-4 py-1 rounded-full text-xs font-mono transition-all duration-300 ${theme === 'default' ? 'bg-tech-secondary text-white shadow-lg' : 'text-tech-muted hover:text-white'}`}
         >
           <Monitor className="w-3 h-3" />
           <span>Classic</span>
         </button>
         <button 
           onClick={() => setTheme('cyber')}
           className={`flex items-center space-x-2 px-4 py-1 rounded-full text-xs font-mono transition-all duration-300 ${theme === 'cyber' ? 'bg-tech-accent text-tech-bg font-bold shadow-lg shadow-tech-accent/20' : 'text-tech-muted hover:text-white'}`}
         >
           <Zap className="w-3 h-3" />
           <span>Core/Neon</span>
         </button>
       </div>

       <div className="text-tech-muted text-[10px] font-mono hidden sm:block">
         <span className="w-2 h-2 rounded-full bg-tech-accent inline-block mr-2 animate-pulse"></span>
         System Active
       </div>
    </div>
  );
};