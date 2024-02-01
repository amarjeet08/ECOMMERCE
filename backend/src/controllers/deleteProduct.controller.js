import Product from '../models/product.model.js';

const deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        await product.deleteOne();

        res.json({ message: 'Product deleted successfully' })
    } catch (error) {
        console.error('Error deleting product', error);
        res.status(500).json({ error: 'Internal server error' })
    }
};

export default deleteProduct;