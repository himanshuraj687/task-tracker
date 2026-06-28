import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

connectDB();

const app = express();

// CORS Middleware Strategy
const allowedOrigins = [
  'http://localhost:5173',
  'https://your-frontend-vercel-domain.vercel.app' 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// API Base Routes
app.use('/api/tasks', taskRoutes);

// Base Route Verification
app.get('/', (req, res) => {
  res.send('Task Tracker API Running Smoothly.');
});

// Centralized error handling pipeline
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server executing in production container mode on port ${PORT}`);
});