const express = require('express')
const router = express.Router()
const { createPost, getPost, getSinglePost} = require('../controllers/articlesctrl')


router.post('/new', createPost)

router.get('/', getPost)

// get single article
router.get('/:id', getSinglePost)

module.exports = router