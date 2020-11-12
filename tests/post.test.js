const Post = require('../src/models/post')

test('Should get all posts', () => {
    const posts = Post.getAll()
    expect(posts.length).toBe(3)
})

test('should find a single post by id', () => {
    const post = Post.findById(1)
    expect(post).toMatchObject({
        title: "How to code", 
        body: "Heres how you code...Praesent odio magna, vestibulum ac odio non, sollicitudin congue arcu. Integer eu dapibus justo. Duis ut ligula eget erat mattis posuere sit amet non risus. Donec quis convallis quam, sit amet sodales est. Quisque metus quam, vestibulum eu pretium eu, eleifend congue odio. Phasellus feugiat placerat mollis. Donec laoreet nec massa ut sollicitudin. Quisque diam metus, lobortis vel urna id, ullamcorper varius turpis. Nam non nisi ac mauris suscipit commodo sed in orci.", 
        id: 1
    })
})

test('should add a comment', () => {
    const post = new Post ({
        title: "test", 
        body: "test body"
    })
    const testComment = {
        text: "this is a fake comment"
    }
    post.addComment(testComment)
    expect(post.comments).toHaveLength(1)
    expect(post.comments).toStrictEqual([testComment])
})

test('should get comments', () => {
    const post = new Post ({
        title: "test", 
        body: "test body"
    })
    const testComment = {
        text: "this is a fake comment"
    }
    post.comments = [testComment]
    const comments = post.getComments()
    expect(comments).toStrictEqual([testComment])
})