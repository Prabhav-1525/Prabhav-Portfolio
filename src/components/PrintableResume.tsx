import React from 'react';
import resumeData from '../data/resume.json';

export const PrintableResume: React.FC = () => {
  return (
    <div className="px-8 py-6 max-w-4xl mx-auto text-black bg-white font-sans">
      {/* Header */}
      <header className="text-center border-b-2 border-gray-800 pb-3 mb-4">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{resumeData.basics.name}</h1>
        <div className="text-sm flex flex-wrap justify-center gap-2 text-gray-700">
          <span>{resumeData.basics.location}</span>
          <span>•</span>
          <a href={`tel:${resumeData.basics.phone}`} className="hover:text-blue-600 hover:underline">{resumeData.basics.phone}</a>
          <span>•</span>
          <a href={`mailto:${resumeData.basics.email}`} className="hover:text-blue-600 hover:underline">{resumeData.basics.email}</a>
          {resumeData.basics.links.map((link, i) => (
            <React.Fragment key={i}>
              <span>•</span>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                {link.url.replace('https://', '').replace('www.', '').replace(/\/$/, '')}
              </a>
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-4">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 text-gray-900">Summary</h2>
        <p className="text-sm text-gray-800 leading-relaxed text-justify">{resumeData.basics.summary}</p>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 text-gray-900">Education</h2>
        {resumeData.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between font-bold text-sm text-gray-900">
              <span>{edu.institution}</span>
              <span>{edu.dates}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="italic">{edu.degree}</span>
              {edu.location && <span>{edu.location}</span>}
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 text-gray-900">Experience</h2>
        {resumeData.experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between font-bold text-sm text-gray-900">
              <span>{exp.company}</span>
              <span>{exp.dates}</span>
            </div>
            <div className="flex justify-between text-sm italic text-gray-700 mb-2">
              <span>{exp.role}</span>
              <span>{exp.location}</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1">
              {exp.bullets.slice(0, 3).map((bullet, j) => (
                <li key={j} className="pl-1">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 text-gray-900">Projects</h2>
        {resumeData.projects.map((proj, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between font-bold text-sm text-gray-900">
              <span>{proj.title}</span>
              <span>{proj.dates}</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm italic text-gray-700">Stack: {proj.stack}</div>
              {proj.links && proj.links.length > 0 && (
                <div className="text-sm flex gap-3">
                  {proj.links.map((link, j) => (
                    <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1">
              {proj.bullets.slice(0, 2).map((bullet, j) => (
                <li key={j} className="pl-1">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Technical Experience */}
      <section className="mb-4">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 text-gray-900">Technical Experience</h2>
        <div className="text-sm text-gray-800 space-y-1">
          {resumeData['Technical Experience'].map((skillGroup, i) => (
            <div key={i}>
              <span className="font-bold text-gray-900">{skillGroup.group}:</span> {skillGroup.skills.join(', ')}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="mb-4">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 text-gray-900">Certifications & Awards</h2>
        <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1">
          {resumeData.certifications.slice(0, 3).map((cert, i) => (
            <li key={`cert-${i}`} className="pl-1">{cert.name}</li>
          ))}
          {resumeData.awards.slice(0, 1).map((award, i) => (
            <li key={`award-${i}`} className="pl-1">{award}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
