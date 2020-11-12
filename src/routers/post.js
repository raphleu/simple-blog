const express = require('express')
const Post = require('../models/post')

const router = new express.Router()

router.get('/posts', (req, res) => {
    res.json(Post.getAll())
})

router.get('/post/:postId', (req, res) => {
    const { postId } = req.params;
    const post = Post.findById(postId);
    if (!post) {
        return res.status(400).json({ error: 'No Post found with id: ' + postId })
    }
    res.json(post)
})

router.get('/post/:postId/comments', (req, res) => {
    const { postId } = req.params;
    const post = Post.findById(postId);
    if (!post) {
        return res.status(400).json({ error: 'No Post found with id: ' + postId })
    }
    const comments = post.getComments()
    res.json(comments)
})

module.exports = router