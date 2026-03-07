import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                <GraduationCap className="text-emerald-500" />
                Education
              </h2>
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l border-white/10"
                >
                  <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-black" />
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <div className="text-white/60 font-medium mb-2">{edu.institution}</div>
                  <div className="text-sm font-mono text-white/40">{edu.dates}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                <Award className="text-emerald-500" />
                Certifications
              </h2>
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition-colors"
                >
                  {cert}
                </motion.div>
              ))}
              
              {resumeData.awards.map((award, index) => (
                <motion.div
                  key={`award-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (resumeData.certifications.length + index) * 0.05 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-100 hover:bg-emerald-500/20 transition-colors"
                >
                  🏆 {award}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
