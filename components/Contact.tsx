import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  // --------------------------------------------------------------------------
  // GOOGLE FORM CONFIGURATION
  // --------------------------------------------------------------------------
  
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScMfwIXaBYnU1oYDFNhJLOsry6A6VDveucEzIR-1LQ7QJagXQ/formResponse";
  
  // These IDs must be strings starting with "entry."
  const ENTRY_NAME_ID = "entry.1608212892"; 
  const ENTRY_EMAIL_ID = "entry.1880855369";
  const ENTRY_SUBJECT_ID = "entry.14189437";
  const ENTRY_MESSAGE_ID = "entry.1025356494"; 

  return (
    <section id="contact" className="py-20 bg-tech-surface/30 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
                    <span className="text-tech-accent">06.</span> Get In Touch
                </h2>
                <p className="text-tech-muted max-w-2xl mx-auto">
                    Interested in discussing curriculum development, speaking engagements, or private mentorship?
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Info Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                     <div className="bg-tech-surface p-6 rounded-xl border border-tech-muted/10 flex items-center space-x-4">
                        <div className="p-3 bg-tech-bg rounded-lg text-tech-accent">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">Email</h4>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-tech-muted hover:text-tech-accent transition-colors">
                                {PERSONAL_INFO.email}
                            </a>
                        </div>
                     </div>

                     <div className="bg-tech-surface p-6 rounded-xl border border-tech-muted/10 flex items-center space-x-4">
                        <div className="p-3 bg-tech-bg rounded-lg text-tech-secondary">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">Phone</h4>
                            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-tech-muted hover:text-tech-accent transition-colors">
                                {PERSONAL_INFO.phone}
                            </a>
                        </div>
                     </div>

                     <div className="bg-tech-surface p-6 rounded-xl border border-tech-muted/10 flex items-center space-x-4">
                        <div className="p-3 bg-tech-bg rounded-lg text-tech-accent">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">Location</h4>
                            <p className="text-tech-muted">{PERSONAL_INFO.location}</p>
                        </div>
                     </div>

                     {/* Social Media Connectivity Area */}
                     <div className="bg-gradient-to-r from-tech-surface to-tech-bg p-8 rounded-xl border border-tech-accent/20">
                        <h3 className="text-xl font-bold text-white mb-4">Connect on Socials</h3>
                        <p className="text-tech-muted text-sm mb-6">
                            Follow my journey and get the latest educational resources and coding tips.
                        </p>
                        <div className="flex justify-between items-center gap-2">
                             <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="flex-1 p-3 bg-blue-700/20 hover:bg-blue-700 text-blue-500 hover:text-white rounded-lg transition-colors flex justify-center">
                                <Linkedin className="w-6 h-6" />
                             </a>
                             <a href={PERSONAL_INFO.socials.facebook} target="_blank" rel="noreferrer" className="flex-1 p-3 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg transition-colors flex justify-center">
                                <Facebook className="w-6 h-6" />
                             </a>
                             <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noreferrer" className="flex-1 p-3 bg-pink-600/20 hover:bg-pink-600 text-pink-500 hover:text-white rounded-lg transition-colors flex justify-center">
                                <Instagram className="w-6 h-6" />
                             </a>
                             <a href={PERSONAL_INFO.socials.youtube} target="_blank" rel="noreferrer" className="flex-1 p-3 bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white rounded-lg transition-colors flex justify-center">
                                <Youtube className="w-6 h-6" />
                             </a>
                        </div>
                     </div>
                </motion.div>

                {/* Form Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {submitted ? (
                         <div className="h-full flex flex-col items-center justify-center bg-tech-surface rounded-xl p-8 border border-tech-accent/20 text-center">
                             <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mb-4">
                                 <Send className="w-8 h-8 text-tech-accent" />
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                             <p className="text-tech-muted">Thank you for reaching out. I'll get back to you shortly.</p>
                             <button 
                                onClick={() => setSubmitted(false)}
                                className="mt-6 text-sm text-tech-secondary hover:underline"
                             >
                                Send another message
                             </button>
                         </div>
                    ) : (
                        <form 
                            action={"https://docs.google.com/forms/d/e/1FAIpQLScMfwIXaBYnU1oYDFNhJLOsry6A6VDveucEzIR-1LQ7QJagXQ/formResponse"}
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={() => setSubmitted(true)}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-tech-accent">Name</label>
                                    <input 
                                        type="text" 
                                        name={"entry.1608212892"}
                                        required
                                        className="w-full bg-tech-bg border border-tech-muted/20 rounded p-3 text-white focus:border-tech-accent focus:ring-1 focus:ring-tech-accent outline-none transition-all" 
                                        placeholder="Your Name" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-tech-accent">Email</label>
                                    <input 
                                        type="email" 
                                        name={"entry.1880855369"}
                                        required
                                        className="w-full bg-tech-bg border border-tech-muted/20 rounded p-3 text-white focus:border-tech-accent focus:ring-1 focus:ring-tech-accent outline-none transition-all" 
                                        placeholder="john@example.com" 
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-tech-accent">Subject</label>
                                <input 
                                    type="text" 
                                    name={"entry.14189437"}
                                    required
                                    className="w-full bg-tech-bg border border-tech-muted/20 rounded p-3 text-white focus:border-tech-accent focus:ring-1 focus:ring-tech-accent outline-none transition-all" 
                                    placeholder="Collaboration Inquiry" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-mono text-tech-accent">Message</label>
                                <textarea 
                                    rows={5} 
                                    name={"entry.1025356494"}
                                    required
                                    className="w-full bg-tech-bg border border-tech-muted/20 rounded p-3 text-white focus:border-tech-accent focus:ring-1 focus:ring-tech-accent outline-none transition-all" 
                                    placeholder="Hello..." 
                                />
                            </div>

                            <button type="submit" className="group w-full py-4 bg-transparent border border-tech-secondary text-tech-secondary hover:bg-tech-secondary hover:text-white font-bold rounded flex items-center justify-center transition-all uppercase tracking-wide">
                                Send Message
                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    )}
                    
                    {/* Hidden iframe to handle Google Form submission without redirection */}
                    <iframe 
                        name="hidden_iframe" 
                        id="hidden_iframe" 
                        style={{ display: 'none' }} 
                        title="hidden_iframe"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Contact;