import Product from '../models/product.model.js';

const viewProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        if (!products.length) {
            return res.status(404).json({ error: 'No products found' });
        }

        res.json({ products });
    } catch (error) {
        console.error('Error fetching products', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default viewProducts;