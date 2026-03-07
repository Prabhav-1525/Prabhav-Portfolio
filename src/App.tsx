/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintableResume } from './components/PrintableResume';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 selection:text-emerald-200 font-sans print:bg-white print:text-black">
      <div className="print:hidden">
        <AnimatedBackground />
        
        {showSplash ? (
          <Splash onComplete={() => setShowSplash(false)} />
        ) : (
          <main className="relative z-10">
            <Navigation />
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
          </main>
        )}
      </div>
      
      {/* This component is only visible when printing */}
      <div className="hidden print:block">
        <PrintableResume />
      </div>
    </div>
  );
}
