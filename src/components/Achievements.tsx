import React from 'react';
import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 relative bg-black/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Impact & Metrics</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {resumeData.achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono tracking-tighter">
                  {ach.metric}
                </div>
                <div className="text-sm font-semibold text-emerald-400 mb-1 uppercase tracking-wider">
                  {ach.title}
                </div>
                <div className="text-xs text-white/50 leading-snug">
                  {ach.context}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
