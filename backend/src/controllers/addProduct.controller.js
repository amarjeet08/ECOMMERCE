import Product from '../models/product.model.js';
import Category from '../models/category.model.js';

const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            availability,
            images,
            ratings,
            category,
            subcategory
        } = req.body;


        // Check if the category exists
        const existingCategory = await Category.findById(category);
        if (!existingCategory) {
            return res.status(400).json({ error: 'Invalid category.' });
        }

        // Check if the provided subcategory is part of the category
        const isValidSubcategory = existingCategory.subcategories.includes(subcategory);
        if (!isValidSubcategory) {
            return res.status(400).json({ error: 'Invalid subcategory for the given category.' });
        }

        const newProduct = new Product({
            name,
            description,
            price,
            availability,
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
