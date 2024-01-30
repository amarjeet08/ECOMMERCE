import User from '../models/user.model.js'
import jwt from 'jsonwebtoken';

const secretKey = 'mynameiskhan'

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })


        if (!email || password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, username: user.username }, secretKey, { expiresIn: '1d' });

        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 })
        res.status(200).json({ message: 'Login successful', token })
    } catch {
        console.log('Error during user login:', error);
        res.status(500).json({ error: 'Interval server error' })
    }
}

export default loginController;