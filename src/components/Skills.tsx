import React from 'react';
import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative bg-black/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Experience</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData['Technical Experience'].map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {skillGroup.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
