import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-white/40">
                    {project.links.map((link: any, i: number) => {
                      if (link.name === 'GitHub') {
                        return (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
                            <Github size={20} />
                          </a>
                        );
                      }
                      if (link.name === 'Live Demo') {
                        return (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Live Demo">
                            <ExternalLink size={20} />
                          </a>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
                
                <div className="text-xs font-mono text-white/30 mb-6 uppercase tracking-wider">
                  {project.dates}
                </div>

                <ul className="space-y-3 mb-8">
                  {project.bullets.map((bullet, i) => {
                    const highlightedBullet = bullet.replace(
                      /(\d+%|\d+K\+|\d+\+?)/g,
                      '<span class="text-white font-medium">$1</span>'
                    );
                    return (
                      <li key={i} className="text-sm text-white/60 leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="px-8 py-4 bg-black/20 border-t border-white/5">
                <div className="text-xs font-mono text-emerald-400/80 leading-relaxed">
                  {project.stack}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
