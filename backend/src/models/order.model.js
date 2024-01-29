import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    totalAmount: { type: Number, required: true },
    payment: {
        method: { type: String, required: true },  // Payment method (e.g., 'Credit Card', 'Debit Card', etc.)
        transactionId: String,  // Razorpay transaction ID
        status: {
            type: String,
            enum: ['Pending', 'Processing', 'Successful', 'Failed'],
            default: 'Pending',
        },
        // Additional payment-related fields...
    },
    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        // other address details...
    },
    orderStatus: { type: String, enum: ['Processing', 'Shipped', 'Delivered'], default: 'Processing' },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
