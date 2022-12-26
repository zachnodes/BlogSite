const express = require('express')
const router = express.Router()
const {createPost} = require('../controllers/articlesctrl')

router.post('/new', createPost)

module.exports = router