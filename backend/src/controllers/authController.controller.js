import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const User = require('../models/user.model')
const Admin = require('../models/admin.model')

const generateToken = (userId, isAdmin) => {
    const secret = 'acharyaprashantisbestintheworld';
    const expiresIn = '2h';

    return jwt.sign({ userId, isAdmin }, secret, { expiresIn })
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        //check if the user exists in both User and Admin Collections
        const user = await User.findOne({ username })
        const admin = await Admin.findOne({ username });

        if (!user && !admin) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        //Determine whether the entity is a user or an admin
        const entity = user || admin;
        const isPasswordValid = await bcrypt.compare(password, entity.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        //Generate a JWT token
        const token = generateToken(entity._id, !!admin);
        res.json({ token });

    } catch (err) {
        console.log('Error logging in:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = { loginUser }

