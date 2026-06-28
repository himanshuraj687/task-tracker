import React, { useState, useEffect } from 'react';
import { fetchTasksAPI, createTaskAPI, updateTaskAPI, deleteTaskAPI } from '../services/api';
import Navbar from '../components/Navbar';
import StatCards from '../components/StateCards';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import Footer from '../components/Footer';
import { toast, ToastContainer } from '../components/ToastSystem';
import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState(null);

  // Search, Filter, Sort State management
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const getTasksData = async () => {
    try {
      setLoading(true);
      const res = await fetchTasksAPI();
      setTasks(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failure syncing task database.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasksData();
  }, []);

  const handleSaveTask = async (taskData) => {
    try {
      if (currentTask) {
        const res = await updateTaskAPI(currentTask._id, taskData);
        setTasks(tasks.map((t) => (t._id === currentTask._id ? res.data.data : t)));
        toast.success('Task structure updated successfully.');
      } else {
        const res = await createTaskAPI(taskData);
        setTasks([res.data.data, ...tasks]);
        toast.success('Task committed to active array configuration.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error processing request configuration.');
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you absolute sure you want to terminate this operational task element?')) {
      try {
        await deleteTaskAPI(id);
        setTasks(tasks.filter((t) => t._id !== id));
        toast.warn('Task records successfully deleted.');
      } catch (error) {
        toast.error('Task engine removal runtime error.');
      }
    }
  };

  const handleMarkCompleted = async (task) => {
    try {
      const res = await updateTaskAPI(task._id, { ...task, status: 'Completed' });
      setTasks(tasks.map((t) => (t._id === task._id ? res.data.data : t)));
      toast.info('State lifecycle changed: Completed.');
    } catch (error) {
      toast.error('Lifecycle state execution failure.');
    }
  };

  // Processing, filtering, and sorting calculations
  const filteredAndSortedTasks = tasks
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => (filterStatus === 'All' ? true : t.status === filterStatus))
    .sort((a, b) => {
      if (sortBy === 'Newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'Oldest') return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === 'Due Date') return new Date(a.dueDate) - new Date(b.dueDate);
      if (sortBy === 'Priority') {
        const priorityWeights = { High: 3, Medium: 2, Low: 1 };
        return priorityWeights[b.priority] - priorityWeights[a.priority];
      }
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <StatCards tasks={tasks} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Control Panel: Generation UI */}
            <div className="lg:col-span-1">
              <TaskForm
                onSave={handleSaveTask}
                currentTask={currentTask}
                clearCurrent={() => setCurrentTask(null)}
              />
            </div>

            {/* Display Cluster Architecture */}
            <div className="lg:col-span-2 space-y-6">
              {/* Toolbar Actions */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative w-full sm:w-64">
                  <FaSearch className="absolute left-3.5 top-3 text-slate-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search task strings..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <div className="flex items-center space-x-2 w-1/2 sm:w-auto">
                    <FaFilter className="text-slate-400 text-xs" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 bg-white font-medium"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2 w-1/2 sm:w-auto">
                    <FaSortAmountDown className="text-slate-400 text-xs" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 bg-white font-medium"
                    >
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                      <option value="Priority">Priority Hierarchy</option>
                      <option value="Due Date">Due Target Line</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Task Cards Matrix Wrapper */}
              {loading ? (
                <Loader />
              ) : filteredAndSortedTasks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {filteredAndSortedTasks.map((task) => (
                    <TaskCard
                      key={task._id}
                      task={task}
                      onEdit={setCurrentTask}
                      onDelete={handleDeleteTask}
                      onMarkCompleted={handleMarkCompleted}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;