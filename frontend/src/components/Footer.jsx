import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-xs font-medium">
        &copy; {new Date().getFullYear()} TaskSphere Matrix Platform Inc. Core Interface Delivery Build.
      </div>
    </footer>
  );
};

export default Footer;