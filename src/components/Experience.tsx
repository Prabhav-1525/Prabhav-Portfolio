import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import resumeData from '../data/resume.json';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Experience</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isExpanded 
                    ? "bg-white/5 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                    : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                )}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{exp.role}</h3>
                    <div className="text-emerald-400 font-medium text-lg">{exp.company}</div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2 text-sm text-white/50 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="absolute right-6 top-8 md:static text-white/30"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, i) => {
                            // Highlight numbers/metrics
                            const highlightedBullet = bullet.replace(
                              /(\d+%|\d+K\+|\d+\+?)/g,
                              '<span class="text-emerald-400 font-semibold">$1</span>'
                            );

                            return (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                className="flex items-start gap-3 text-white/70 leading-relaxed"
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
