import Product from '../models/product.model.js';

const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            images,
            ratings,
            category,
            subcategory
        } = req.body;


        const newProduct = new Product({
            name,
            description,
            price,
            images,
            ratings,
            category,
            subcategory
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({ message: 'Product added successfully', product: savedProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default addProduct;
