import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Heart, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-tech-accent" />,
      title: "Digital Integrator",
      text: "Expert in integrating latest digital tools to enhance classroom engagement and streamline learning."
    },
    {
      icon: <Code2 className="w-6 h-6 text-tech-secondary" />,
      title: "Diverse Instruction",
      text: "Adept at simplifying complex IT concepts for diverse learning styles, both in-class and online."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Collaborative Mentor",
      text: "A collaborative team player proficient in troubleshooting and providing support to students and colleagues."
    }
  ];

  return (
    <section id="about" className="py-20 bg-tech-surface/30 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
            <span className="text-tech-accent">01.</span> Professional Summary
          </h2>
          <div className="w-20 h-1 bg-tech-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 text-tech-muted leading-relaxed text-justify"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-white font-medium">
              An organized professional educator with proven expertise in delivering effective computer science instruction, student guidance, and digital literacy development.
            </p>
            <p>
              I have a strong track record of improving student performance through engaging, technology-enhanced teaching methods. My aim is to be a successful person not only by saying but by pursuing my interest to the tangible practical implication which keeps me motivated in my profession.
            </p>
            <p>
              I possess exemplary skills in reading, analysis, research, and critical thinking. I demonstrate strong verbal communication and lecturing abilities, coupled with excellent coaching and teaching skills to empower students to reach their full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-tech-bg border border-tech-muted/10 p-6 rounded-xl hover:border-tech-accent/50 transition-colors flex items-start space-x-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <div className="p-3 bg-tech-surface rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-tech-muted">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;