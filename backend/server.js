import express from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from "./src/db/index.js";

//import routes
import userRoutes from './src/routes/user.route.js'

//Create an express app
const app = express();
connectDB()

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Usr routes
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the HomePage')
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})