import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10 bg-black/40">
      <p className="text-white/40 text-sm font-mono">
        © {new Date().getFullYear()} Prabhav Saxena. All rights reserved.
      </p>
    </footer>
  );
};
