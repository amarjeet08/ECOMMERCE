// Import necessary modules
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Create an Express router
const router = express.Router();

// Replace this with your actual secret key
const secretKey = 'mynameiskhan';

// Route for user registration (Sign Up)
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password, address, paymentInformation } = req.body;

        // Create a new user in the database without hashing the password for now
        const newUser = new User({ username, email, password, address, paymentInformation });
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ userId: newUser._id, username: newUser.username }, secretKey, { expiresIn: '1h' });

        // Set the token as an HTTP cookie
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // Max age in milliseconds (1 hour)

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user in the database
        const user = await User.findOne({ username });

        // If the user doesn't exist or the password is incorrect, return an error
        if (!user || password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id, username: user.username }, secretKey, { expiresIn: '1h' });

        // Set the token as an HTTP cookie
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // Max age in milliseconds (1 hour)

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route for user logout
router.post('/logout', (req, res) => {
    // Clear the token from the client-side cookie
    res.clearCookie('jwt');

    res.status(200).json({ message: 'Logout successful' });
});

// Export the router
export default router;
