import Product from "../models/product.model.js";

const searchProducts = async (req, res) => {
    try {
        const { query } = req.query;

        //Use a regular expression for case-sensitive search by product name
        const productNameRegex = new RegExp(query, 'i');

        //Use a mongodb query to search for products
        const products = await Product.find({
            $or: [
                { name: { $regex: productNameRegex } },
                { subcategory: { $regex: productNameRegex } }
            ]
        });

        res.json({ products })

    } catch (error) {
        console.error('Error searching products', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default searchProducts;