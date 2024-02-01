import Product from '../models/product.model.js';

const editProduct = async (req, res) => {
    const { productId } = req.params;
    const updatedProductData = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        Object.assign(product, updatedProductData);

        await product.save();

        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        console.error('Error editing product', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default editProduct;