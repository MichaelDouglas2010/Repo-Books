import mongoose from "mongoose";

//Create a type of Book to insert data at mongo
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
})

export default mongoose.model('Book', bookSchema);
