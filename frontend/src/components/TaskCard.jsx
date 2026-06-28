import React from 'react';
import { FaEdit, FaTrashAlt, FaCalendarAlt, FaCheck, FaExclamationCircle } from 'react-icons/fa';

const TaskCard = ({ task, onEdit, onDelete, onMarkCompleted }) => {
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High': return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Medium': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-sky-50 text-sky-700 border-sky-200';
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-800';
      case 'In Progress': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getPriorityStyle(task.priority)}`}>
            {task.priority} Priority
          </span>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusStyle(task.status)}`}>
            {task.status}
          </span>
        </div>
        <h3 className={`text-base font-bold text-slate-800 mb-1.5 tracking-tight group-hover:text-blue-600 transition-colors ${task.status === 'Completed' ? 'line-through text-slate-400' : ''}`}>
          {task.title}
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed mb-4 whitespace-pre-wrap">
          {task.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-50 mt-auto">
        <div className="flex flex-col space-y-2 text-[11px] text-slate-400 font-medium mb-4">
          <div className="flex items-center space-x-1.5">
            <FaCalendarAlt className="text-slate-400" />
            <span>Due: <strong className="text-slate-600">{formatDate(task.dueDate)}</strong></span>
          </div>
          <div className="flex items-center space-x-1.5">
            <FaExclamationCircle />
            <span>Created: <span>{formatDate(task.createdAt)}</span></span>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          {task.status !== 'Completed' && (
            <button
              onClick={() => onMarkCompleted(task)}
              title="Mark as Completed"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition duration-200"
            >
              <FaCheck className="text-xs" />
            </button>
          )}
          <button
            onClick={() => onEdit(task)}
            title="Edit Task Document"
            className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200"
          >
            <FaEdit className="text-xs" />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            title="Delete Engine Task"
            className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition duration-200"
          >
            <FaTrashAlt className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;