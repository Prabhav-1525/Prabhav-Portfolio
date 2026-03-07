import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-mono mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4"
        >
          {resumeData.basics.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-3xl text-white/60 font-medium mb-8 max-w-3xl leading-snug"
        >
          {resumeData.basics.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base md:text-lg text-white/40 max-w-2xl mb-12 leading-relaxed"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={scrollToExperience}
            className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
          >
            View Experience
            <ChevronRight size={18} />
          </button>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
