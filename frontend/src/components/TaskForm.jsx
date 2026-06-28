import React, { useState, useEffect } from 'react';
import { FaPlus, FaSave, FaTimes } from 'react-icons/fa';

const TaskForm = ({ onSave, currentTask, clearCurrent }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending',
    priority: 'Medium',
    dueDate: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentTask) {
      setFormData({
        title: currentTask.title,
        description: currentTask.description,
        status: currentTask.status,
        priority: currentTask.priority,
        dueDate: currentTask.dueDate ? currentTask.dueDate.substring(0, 10) : '',
      });
    } else {
      resetForm();
    }
  }, [currentTask]);

  const resetForm = () => {
    setFormData({ title: '', description: '', status: 'Pending', priority: 'Medium', dueDate: '' });
    setErrors({});
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.title.trim()) tempErrors.title = 'Title is required';
    if (!formData.description.trim()) tempErrors.description = 'Description is required';
    if (!formData.dueDate) tempErrors.dueDate = 'Due Date is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(formData);
    resetForm();
    if (currentTask) clearCurrent();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">
          {currentTask ? '📝 Edit Workspace Task' : '🚀 Construct New Task'}
        </h2>
        {currentTask && (
          <button onClick={clearCurrent} className="text-slate-400 hover:text-slate-600 transition">
            <FaTimes />
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Task Title *</label>
          <input
            type="text"
            placeholder="e.g., Integrate OAuth Middleware"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className={`w-full px-4 py-2 rounded-xl border ${errors.title ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100'} focus:outline-none focus:ring-4 transition duration-200 text-sm`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Description *</label>
          <textarea
            rows="3"
            placeholder="Provide architectural or feature scope details..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className={`w-full px-4 py-2 rounded-xl border ${errors.description ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100'} focus:outline-none focus:ring-4 transition duration-200 text-sm`}
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">State Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-100 transition duration-200 text-sm bg-white"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Priority Layer</label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-100 transition duration-200 text-sm bg-white"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Target Due Date *</label>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className={`w-full px-4 py-2 rounded-xl border ${errors.dueDate ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100'} focus:outline-none focus:ring-4 transition duration-200 text-sm`}
          />
          {errors.dueDate && <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm transition duration-200 transform active:scale-[0.99] text-sm mt-2"
        >
          {currentTask ? <FaSave /> : <FaPlus />}
          <span>{currentTask ? 'Update Node Target' : 'Commit Configuration'}</span>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;