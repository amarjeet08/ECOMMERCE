import mongoose, { Schema } from "mongoose";

const purchaseHistorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    }
}, { timestamps: true })

const PurchaseHistory = mongoose.model('PurchaseHistory', purchaseHistorySchema)
export default PurchaseHistory

