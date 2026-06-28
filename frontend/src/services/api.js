import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTasksAPI = () => API.get('/tasks');
export const createTaskAPI = (taskData) => API.post('/tasks', taskData);
export const updateTaskAPI = (id, taskData) => API.put(`/tasks/${id}`, taskData);
export const deleteTaskAPI = (id) => API.delete(`/tasks/${id}`);