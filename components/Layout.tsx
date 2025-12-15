import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const CV_LINK = "https://drive.google.com/file/d/1LL4_wmNkCtJFCU3B4uZ3A2EH1nYiIFGV/view?usp=drive_link";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, "", href);
    } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, "", href);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-10 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-tech-bg/95 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 text-2xl font-bold font-mono text-white group cursor-pointer"
        >
          <Code2 className="text-tech-accent group-hover:rotate-12 transition-transform" />
          <span>Sheeraz<span className="text-tech-accent">.mentor</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-tech-muted hover:text-tech-accent transition-colors relative group cursor-pointer"
            >
              <span className="text-tech-accent mr-1 opacity-0 group-hover:opacity-100 transition-opacity font-mono">/</span>
              {link.name}
            </a>
          ))}
          <a 
            href={CV_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono font-bold text-tech-bg bg-tech-accent rounded hover:bg-emerald-400 transition-colors flex items-center cursor-pointer"
          >
            <Download className="w-3 h-3 mr-2" />
            Resume.pdf
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-tech-surface border-b border-tech-muted/20 py-4 shadow-xl">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-tech-text hover:text-tech-accent py-2 block border-b border-tech-muted/10 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
             <a 
                href={CV_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 mt-4 text-center font-bold text-tech-bg bg-tech-accent rounded block cursor-pointer"
             >
                Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-surface py-12 border-t border-tech-muted/10 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-8">
            <a href={PERSONAL_INFO.socials.github} className="p-3 bg-tech-bg rounded-full text-tech-muted hover:text-white hover:bg-tech-secondary/20 transition-all">
                <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.socials.linkedin} className="p-3 bg-tech-bg rounded-full text-tech-muted hover:text-white hover:bg-tech-secondary/20 transition-all">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-tech-bg rounded-full text-tech-muted hover:text-white hover:bg-tech-secondary/20 transition-all">
                <Mail className="w-5 h-5" />
            </a>
        </div>
        <p className="text-tech-muted text-sm font-mono mb-2">
            Designed & Built by {PERSONAL_INFO.name}
        </p>
        <p className="text-xs text-tech-muted/50">
            © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};