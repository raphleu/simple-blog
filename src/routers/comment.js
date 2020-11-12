const express = require('express')
const Comment = require('../models/comment')

const router = new express.Router()

router.post('/comments', (req, res) => {
    const comment = new Comment(req.body)
    if (comment.error) {
        return res.status(400).json(comment)
    }
    const saveResult = comment.save()
    if (saveResult.error) {
        return res.status(400).json(saveResult)
    }
    else {
        return res.status(201).json(saveResult)
    }
})

router.patch('/comments/:commentId', (req, res) => {
    const { commentId } = req.params;
    const comment = Comment.findById(commentId);
    if (comment.error) {
        return res.status(400).json(comment)
    }
    const result = comment.update(req.body)
    if (result.error) {
        return res.status(400).json(result)
    }
    return res.status(200).json(result)
})

module.exports = router