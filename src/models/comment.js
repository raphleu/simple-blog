const Post = require('./post')
const { nanoid } = require('nanoid')

class Comment {
    constructor({ name, text, postId }) {
        if (!text || text.trim() === '') {
            return { error: 'text field cannot be empty for a comment' }
        }
        this.name = name
        this.text = text
        if (!postId) {
            return { error: 'postId field cannot be empty for a comment' }
        }
        this.postId = postId
        this.id = nanoid()
    }

    static comments = []

    save() {
        const p = Post.findById(this.postId)
        if (p) {
            Comment.comments.push(this)
            p.addComment(this)
            return(this)
        }
        else {
            return { error: 'No Post found with ID: ' + this.postId }
        }
    }

    update({name, text}) {
        if (typeof text !== 'undefined' && text.trim() === '') {
            return { error: 'text field cannot be empty for a comment' }
        }
        if (name) {
            this.name = name
        }
        if (text) {
            this.text = text
        }
        return this
    }

    static findById(id) {
        const comment = Comment.comments.find( (comment) => comment.id === id )
        if (!comment) {
            return { error: 'No Comment found with id: ' + id }
        }
        return comment
    }
} 

module.exports = Comment