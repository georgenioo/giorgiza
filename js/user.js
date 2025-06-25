import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userroutes from './routes/userroutes.js';

const app =express();

const PORT = 3000;

const MONGO_URL = 'mongodb+srv://giorgizaqroshvili:123@cluster0.1enfuse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json())
app.use('/users', userroutes);
app.use(cors())
app.listen(PORT, () => {
    console.log(`listening on ${PORT} `);
      mongoose
    .connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
})