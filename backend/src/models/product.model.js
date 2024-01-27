import mongoose from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    images: [images],
    ratings: [{ type: Number, min: 1, max: 5 }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }

}, { timestamps: true })


// Saving the product to the database
productSchema.save()
    .then((savedProduct) => {
        console.log('Product saved:', savedProduct);
    })
    .catch((error) => {
        console.error('Error saving product:', error);
    });



export const Product = mongoose.model('Product', productSchema);

module.exports = Product;


async function calculateAndSetAverageRating(productId) {
    try {
        const aggregationResult = await Product.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(productId) } },
            {
                $project: {
                    averageRating: { $avg: `$ratings` },
                },
            },
            {
                $set: {
                    'ratings': ['$averageRating'],
                },
            },
            {
                $merge: {
                    into: 'products',   // Specify the target collection
                    whenMatched: 'merge', //Update existing documents
                    whenNotMatched: 'insert' //Insert new documents

                }
            }
        ]);

        //Handle the aggregation result if needed 
        console.log(aggregationResult)

    } catch (err) {
        console.error('Error calculating and updating average rating:', err)
    }
}

//Usage
const productId = 'yourProductId';//Replace with the actual product ID
calculateAndSetAverageRating(productId)


