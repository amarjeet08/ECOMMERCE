import PurchaseHistory from "../models/purchaseHistory.model.js";

const checkOutController = async (req, res) => {
    try {
        const { userId, product, quantity, totalPrice, shippingAddress } = req.body;

        const purchase = new PurchaseHistory({
            user: userId,
            product,
            quantity,
            totalPrice,
            shippingAddress
        });

        await purchase.save();
        res.json({ message: 'Purchase successful' })
    } catch (error) {
        console.error('Error processing checkout', error);
        res.status(500).json({ error: 'Internal servor error' })
    }
}

export default checkOutController;