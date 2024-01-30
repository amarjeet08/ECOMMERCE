import jwt from "jsonwebtoken";
import User from '../models/user.model.js'


const secretKey = 'mynameiskhan'

const signupController = async (req, res) => {
    try {
        const { username, email, password, address, paymentInformation } = req.body;
        const newUser = new User({ username, email, password, address, paymentInformation });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id, username: newUser.username }, secretKey, { expiresIn: '1d' })

        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 })

        res.status(201).json({ message: 'User registered successfully', token })
    } catch (error) {
        console.error('Error during user registration', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default signupController;

