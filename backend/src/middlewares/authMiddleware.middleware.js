import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, 'acharyaprashantisbestintheworld');
        req.user = { userId: decoded.userId, isAdmin: false };
        next()
    } catch (err) {
        console.error('Error authenticating user:', err)
    }
};

const authenticateAdmin = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, 'acharyaprashantisbestintheworld'); // Replace with your secret key
        req.user = { userId: decoded.userId, isAdmin: decoded.isAdmin };
        next();
    } catch (error) {
        console.error('Error authenticating admin:', error);
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { authenticateUser, authenticateAdmin };