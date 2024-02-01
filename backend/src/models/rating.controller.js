import Product from '../models/product.model.js';

const addRatingToProduct = async (productId, newRating) => {
    try {
        // Fetch the product by ID
        const product = await Product.findById(productId);

        // Add the new rating to the ratings array
        product.ratings.push(newRating);

        // Calculate the new average rating
        const totalRatings = product.ratings.length;
        const sumRatings = product.ratings.reduce((sum, rating) => sum + rating, 0);
        const averageRating = sumRatings / totalRatings;

        // Update the averageRating field
        product.averageRating = averageRating;

        // Save the updated product
        await product.save();

        console.log('Product updated with new rating:', product);
        return product;
    } catch (error) {
        console.error('Error updating product rating:', error);
        throw error;
    }
};

export default addRatingToProduct;
