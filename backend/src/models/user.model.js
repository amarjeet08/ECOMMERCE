import mongoose from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: String,
    paymentInformation: {
        type: String,
        enum: ['COD', 'Razorpay'],
        default: 'Razorpay'
    },
    orderHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);

module.exports = User;