
import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js'
import userRouter from './routes/user.js';


//connect to database
await mongoose .connect(process.env.MONGO_URI);

// create an express app
const app = express();


// use the middleware
app.use(express.json());

// use routes
app.use(todoRouter);
app.use(userRouter);

 
// listen for incoming requests
app.listen(3000, () => {
    console.log('app is listening on port 3000');
});

