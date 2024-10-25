import express from "express";
import mongoose from "mongoose";
//Import routes
import bookRoutes from './routes/index'

const app = express();
const port = 3001

// Can use Json in requests
app.use(express.json());

// Connect to the database
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dev-library');
        console.log('Database connected');
    } catch (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    }
}
//Route books get
app.use('/book', bookRoutes)



app.listen(port, () =>{
    console.log(`Server is running in port:${port} `)
})

connectToDatabase();