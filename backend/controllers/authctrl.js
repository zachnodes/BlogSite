const User = require('../models/userschema')


// Register User
const registerUser = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const user = await User.signup(username, email, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Login User
const loginUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.login(username, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    registerUser,
    loginUser
}