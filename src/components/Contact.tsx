import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Contact: React.FC = () => {
  const { email, phone, links } = resumeData.basics;
  
  const linkedIn = links.find(l => l.name === 'LinkedIn');
  const github = links.find(l => l.name === 'GitHub');

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative bg-black/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <motion.a
            href={`mailto:${email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-white font-medium mb-2">Email</h3>
            <p className="text-sm text-white/50 text-center break-all">{email}</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-white font-medium mb-2">Phone</h3>
            <p className="text-sm text-white/50 text-center">{phone}</p>
          </motion.a>

          {/* LinkedIn */}
          {linkedIn && (
            <motion.a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-white font-medium mb-2">LinkedIn</h3>
              <p className="text-sm text-white/50 text-center flex items-center gap-1">
                Connect <ExternalLink size={12} />
              </p>
            </motion.a>
          )}

          {/* GitHub */}
          {github && (
            <motion.a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-white font-medium mb-2">GitHub</h3>
              <p className="text-sm text-white/50 text-center flex items-center gap-1">
                Follow <ExternalLink size={12} />
              </p>
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
};
