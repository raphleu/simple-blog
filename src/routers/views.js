const express = require('express')

const router = new express.Router()

router.get('', (req, res) => {
    res.render('index', {
        title: 'Blog posts'
    })
})

router.get('/view/post/', (req, res) => {
    res.render('blog-post', {
        title: 'Blog post'
    })
})

module.exports = router