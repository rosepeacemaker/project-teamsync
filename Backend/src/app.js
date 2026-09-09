import express from 'express';
import authRoutes from './routes/auth.route.js';


const app = express();



app.use(express.json());


// Prifix for all routes
// Post routes /api/auth/register

app.use("/api/auth", authRoutes);


export default app;