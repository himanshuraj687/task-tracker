import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <FaCheckCircle className="text-white text-3xl animate-pulse" />
            <span className="text-white font-bold text-xl tracking-tight">TaskSphere</span>
          </div>
          <div className="hidden sm:flex space-x-4 text-blue-100 text-sm font-medium">
            <span className="bg-blue-700 bg-opacity-40 px-3 py-1.5 rounded-md text-white">Dashboard</span>
            <span className="hover:text-white px-3 py-1.5 transition duration-200 cursor-pointer">Workspace</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;