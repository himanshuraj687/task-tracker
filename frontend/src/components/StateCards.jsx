import React from 'react';
import { FaTasks, FaClock, FaSpinner, FaCheckDouble } from 'react-icons/fa';

const StatCards = ({ tasks }) => {
  const total = tasks.length;
  const pending = tasks.filter(t => t.status === 'Pending').length;
  const inProgress = tasks.filter(t => t.status === 'In Progress').length;
  const completed = tasks.filter(t => t.status === 'Completed').length;

  const stats = [
    { title: 'Total Tasks', count: total, icon: FaTasks, color: 'from-blue-500 to-blue-600', text: 'text-blue-600' },
    { title: 'Pending', count: pending, icon: FaClock, color: 'from-amber-500 to-amber-600', text: 'text-amber-600' },
    { title: 'In Progress', count: inProgress, icon: FaSpinner, color: 'from-indigo-500 to-indigo-600', text: 'text-indigo-600' },
    { title: 'Completed', count: completed, icon: FaCheckDouble, color: 'from-emerald-500 to-emerald-600', text: 'text-emerald-600' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.title}</p>
            <h3 className="text-3xl font-bold text-slate-800 mt-1">{stat.count}</h3>
          </div>
          <div className={`p-3.5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-inner`}>
            <stat.icon className="text-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;