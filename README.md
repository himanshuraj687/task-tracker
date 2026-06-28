# Task Tracker

A full-stack task tracker built with React, Vite, Tailwind CSS, Express, and MongoDB.

## Features

- Create, edit, delete, and complete tasks
- Search, filter, and sort task lists
- Responsive dashboard UI
- Toast notifications and empty/loading states
- REST API backed by MongoDB

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB with Mongoose

## Project Structure

```text
task-tracker/
  backend/
  frontend/
  .gitignore
  README.md
```

## Prerequisites

- Node.js 18+
- npm
- MongoDB connection string

## Environment Variables

Copy the example files and fill in your own values locally:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Create a `.env` file inside `frontend/`:

```env
VITE_API_URL=http://localhost:5000/api
```

## Local Setup

### 1. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Run the backend

```bash
cd backend
npm run dev
```

The API runs on `http://localhost:5000` by default.

### 3. Run the frontend

```bash
cd frontend
npm run dev
```

The app runs on `http://localhost:5173` by default.

## Build

```bash
cd frontend
npm run build
```

## API Endpoints

- `GET /api/tasks` - get all tasks
- `POST /api/tasks` - create a task
- `PUT /api/tasks/:id` - update a task
- `DELETE /api/tasks/:id` - delete a task

## Notes

- The backend requires a valid MongoDB URI to start.
- Update the frontend API URL if the backend is deployed somewhere other than localhost.
- The frontend build has been verified successfully in this workspace.

## GitHub

Repository: https://github.com/himanshuraj687/task-tracker