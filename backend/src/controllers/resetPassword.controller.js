import User from '../models/user.model.js'

const resetTokens = new Map();

const resetPassword = async (req, res) => {

    const { token, newPassword } = req.body;

    try {
        // Check if the reset token is valid
        const userId = resetTokens.get(token);

        if (!userId) {
            return res.status(400).json({ error: 'Invalid or expired reset token.' });
        }

        // Update the user's password in the database
        await User.findByIdAndUpdate(userId, { password: newPassword });

        // Remove the used reset token
        resetTokens.delete(token);

        res.json({ message: 'Password reset successful.' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

export default resetPassword;