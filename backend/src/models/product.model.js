import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    ratings: [{
        type: Number,
        min: 1,
        max: 5
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    category: {
        type: String,
    },
    subcategory: {
        type: String,
        required: true
    }

}, { timestamps: true })

export const Product = mongoose.model('Product', productSchema);
export default Product;


