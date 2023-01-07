const express = require('express')
const router = express.Router()
const { createPost, getPost, getSinglePost} = require('../controllers/articlesctrl')
const {requireAuth} = require('../middleware/requireAuth')

router.use('/new', requireAuth)

router.post('/new', createPost)

router.get('/', getPost)

// get single article
router.get('/:slug', getSinglePost)

module.exports = router