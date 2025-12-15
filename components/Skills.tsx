import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b'];

const Skills: React.FC = () => {
  // Prepare data for a simple "Expertise Distribution" chart
  const chartData = SKILLS.map((cat, index) => ({
    name: cat.category,
    value: cat.skills.reduce((acc, curr) => acc + curr.level, 0) / cat.skills.length,
    color: COLORS[index % COLORS.length]
  }));

  return (
    <section id="skills" className="py-20 bg-tech-surface/30">
      <div className="container mx-auto px-6">
         <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-white">
            <span className="text-purple-500">03.</span> Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Chart Section */}
          <motion.div 
            className="lg:col-span-1 bg-tech-surface p-6 rounded-2xl border border-tech-muted/10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 font-mono">Proficiency Overview</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {chartData.map((d) => (
                <div key={d.name} className="flex items-center text-sm text-tech-muted">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: d.color }}></div>
                  {d.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Progress Bars Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((category, catIndex) => (
              <motion.div 
                key={category.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-tech-text border-b border-tech-muted/20 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-tech-text">{skill.name}</span>
                        <span className="text-xs text-tech-muted font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-tech-bg rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-tech-secondary to-tech-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;