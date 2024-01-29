import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
}, { timestamps: true })

export const Category = mongoose.model('Category', categorySchema); 