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

router.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found.'
    })
})

module.exports = router