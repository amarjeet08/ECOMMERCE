import nodemailer from 'nodemailer';
import crypto from 'crypto';
import User from '../models/user.model.js'


const gmailEmail = "ak3078184@gmail.com"
const gmailPassword = "dslb rasb vrjr jgdy";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

const resetTokens = new Map();

const forgetPassword = async (req, res) => {

    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        resetTokens.set(resetToken, user._id);

        const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;
        const mailOptions = {
            from: 'ak3078184@gmail.com',
            to: email,
            subject: 'Password Reset Request',
            text: `Click on the following link to reset your password: ${resetLink}`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: 'Password reset email sent. Check your inbox.' });
    } catch (error) {
        console.error('Error sending reset email:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};


export default forgetPassword;