import User from "../models/user.model.js";

const adminMiddleware = async (req, res, next) => {
    try {
        const userId = req.body.user.userid;

        const user = await User.findById(userId);

        if (user && user.isAdmin) {
            next()
        } else {
            res.status(403).json({ error: 'Permission denied. Only admins can access this page.' })
        }
    } catch (error) {
        console.error('Error in admin middleware:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default adminMiddleware;