const Post = require('../models/postschema')
const mongoose = require('mongoose')

// create blog post
const createPost = async (req, res) => {
    const {title, description, content} = req.body

    try {
        const createPost = await Post.create({title, description, content})
        res.status(200).json(createPost)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    createPost
}
