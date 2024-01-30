
const logoutController = async (req, res) => {
    res.clearCookie('jwt');

    res.status(200).json({ message: 'Logout successful' })
}

export default logoutController;