import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
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
        enum: ['CashOnDelivery', 'Razorpay'],
        default: 'Razorpay'
    },
    orderHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

export default User;