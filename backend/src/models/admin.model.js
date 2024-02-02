import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin;