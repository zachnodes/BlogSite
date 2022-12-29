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

// get all posts and preview them
const getPost = async (req, res) => {
    try {
        const articles = await Post.find({}).sort({createdAt: -1})
        res.status(200).json(articles)
    } catch (e) {
        res.status(400).json({e: e.message})
    }
}

// get single post for viewing
const getSinglePost = async (req, res) => {
    const {slug} = req.params
    try {
        const singlePost = await Post.findOne({slug: slug})
        res.status(200).json(singlePost)

    } catch (e) {
        res.status(400).json({e: e.message})
    }
}

module.exports = {
    createPost,
    getPost,
    getSinglePost
}
