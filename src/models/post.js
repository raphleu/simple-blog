const { nanoid } = require('nanoid')

class Post {
    constructor({ title, body }) {
        this.title = title
        this.body = body
        this.id = nanoid()
        this.comments = []
    }

    static findById(id) {
        return PostDB.posts.find( (post) => post.id === id )
    }

    static getAll() {
        return PostDB.posts
    }

    addComment(comment) {
        this.comments.push(comment)
    }

    getComments() {
        return this.comments
    }
}

module.exports = Post

// This is a bit hacky, since it's getting around a circular dependency. Normally with a DB, or even if I instantiated the blog
// posts outside of here, this wouldn't be an issue. But this seems like a simple enough way to get the job done while maintaining
// a more typical structure with a DB layer 
const PostDB = require('../db/post')