import React from 'react';
import resumeData from '../data/resume.json';

export const PrintableResume: React.FC = () => {
  return (
    <div className="p-12 max-w-4xl mx-auto text-black bg-white font-sans">
      {/* Header */}
      <header className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{resumeData.basics.name}</h1>
        <div className="text-sm flex flex-wrap justify-center gap-2 text-gray-700">
          <span>{resumeData.basics.location}</span>
          <span>•</span>
          <span>{resumeData.basics.phone}</span>
          <span>•</span>
          <span>{resumeData.basics.email}</span>
          {resumeData.basics.links.map((link, i) => (
            <React.Fragment key={i}>
              <span>•</span>
              <span>{link.url.replace('https://', '').replace('www.', '')}</span>
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 text-gray-900">Summary</h2>
        <p className="text-sm text-gray-800 leading-relaxed text-justify">{resumeData.basics.summary}</p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 text-gray-900">Education</h2>
        {resumeData.education.map((edu, i) => (
          <div key={i} className="mb-3">
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
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 text-gray-900">Experience</h2>
        {resumeData.experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between font-bold text-sm text-gray-900">
              <span>{exp.company}</span>
              <span>{exp.dates}</span>
            </div>
            <div className="flex justify-between text-sm italic text-gray-700 mb-2">
              <span>{exp.role}</span>
              <span>{exp.location}</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="pl-1">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 text-gray-900">Projects</h2>
        {resumeData.projects.map((proj, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between font-bold text-sm text-gray-900">
              <span>{proj.title}</span>
              <span>{proj.dates}</span>
            </div>
            <div className="text-sm italic text-gray-700 mb-2">Stack: {proj.stack}</div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1">
              {proj.bullets.map((bullet, j) => (
                <li key={j} className="pl-1">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Technical Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 text-gray-900">Technical Experience</h2>
        <div className="text-sm text-gray-800 space-y-1.5">
          {resumeData['Technical Experience'].map((skillGroup, i) => (
            <div key={i}>
              <span className="font-bold text-gray-900">{skillGroup.group}:</span> {skillGroup.skills.join(', ')}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 text-gray-900">Certifications & Awards</h2>
        <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1.5">
          {resumeData.certifications.map((cert, i) => (
            <li key={`cert-${i}`} className="pl-1">{cert.name}</li>
          ))}
          {resumeData.awards.map((award, i) => (
            <li key={`award-${i}`} className="pl-1">{award}</li>
          ))}
        </ul>
      </section>

      {/* Declaration */}
      {resumeData.declaration && (
        <section className="mt-12 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-800 italic mb-8">{resumeData.declaration}</p>
          <div className="flex justify-between text-sm text-gray-900 font-bold">
            <div>
              <p>Place: {resumeData.basics.location.split(',')[0]}</p>
              <p>Date: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
            </div>
            <div className="text-right">
              <p className="mb-1 border-b border-gray-900 inline-block min-w-[150px]"></p>
              <p>({resumeData.basics.name})</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
