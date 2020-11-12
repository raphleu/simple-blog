const Comment = require('../src/models/comment')

jest.mock('../src/db/post', () => jest.fn());
const PostDB = require('../src/db/post')
PostDB.mockImplementation(()=> {
    return {
        posts: jest.fn().mockImplementation(() => { return [] })
    }
})

jest.mock('../src/models/post');
const Post = require('../src/models/post')
Post.mockImplementation(()=> {
    return {
        findById: jest.fn()
    }
})

test('should construct comment with nonempty text and postId', () => {
    // comment without text key defined shouldn't construct
    const commentWithoutText = new Comment({ 
        name: "test comment" 
    })
    expect(commentWithoutText).toStrictEqual({ error: 'text field cannot be empty for a comment' })

    // comment with empty text key defined shouldn't construct
    const commentWithEmptyText = new Comment({ 
        name: "test comment", 
        text: ""
    })
    expect(commentWithEmptyText).toStrictEqual({ error: 'text field cannot be empty for a comment' })

    // comment with whitespace only text key defined shouldn't construct
    const commentWithWhitespaceText = new Comment({ 
        name: "test comment", 
        text: "   ", 
        postId: 1
    })
    expect(commentWithWhitespaceText).toStrictEqual({ error: 'text field cannot be empty for a comment' })

    // comment without postId key shouldn't construct
    const commentWithoutPostId = new Comment({ 
        name: "test comment", 
        text: " asdf  ",
    })
    expect(commentWithoutPostId).toStrictEqual({ error: 'postId field cannot be empty for a comment' })

    // comment with all required fields should construct
    const commentWithText = new Comment({ 
        name: "test comment", 
        text: "  this has text ", 
        postId: 1
    })
    expect(commentWithText).toMatchObject({ 
        name: "test comment", 
        text: "  this has text ",
        postId: 1
    })

    // could have more test cases like name being optional, but I'll leave it at this...
})

test('should save comment', () => {
    // comment save returns an error if the post doesn't exist
    const comment = new Comment({ 
        name: "test comment", 
        text: "this has text", 
        postId: 1
    })
    Post.findById.mockImplementation(() => false)
    const errorSavedComment = comment.save()
    expect(errorSavedComment).toStrictEqual({ error: 'No Post found with ID: 1'})

    // comment save returns comment
    Post.findById.mockImplementation(() => {
        return {
            addComment() {
                return true
            }
        }
    })
    const savedComment = comment.save()
    expect(savedComment).toMatchObject(comment)

    // comment save persists comment
    expect(Comment.comments).toStrictEqual([savedComment])
})

test('should find comment by id', () => {
    Post.findById.mockImplementation(() => {
        return {
            addComment() {
                return true
            }
        }
    })
    const comment = new Comment({
        text: "test comment",
        postId: 1
    })
    const commentId = comment.id
    Comment.comments.push(comment)
    const findCommentResult = Comment.findById(commentId)
    expect(findCommentResult).toStrictEqual(comment)
})

test('should update comment with valid text value', () => {
    Post.findById.mockImplementation(() => {
        return {
            addComment() {
                return true
            }
        }
    })

    Comment.comments = []
    const comment = new Comment({
        text: "test comment",
        postId: 1
    })
    const commentId = comment.id
    Comment.comments.push(comment)

    // comment should return error if you try setting text to empty string
    let updatedComment = comment.update({
        text: ''
    })
    expect(updatedComment).toStrictEqual({error: 'text field cannot be empty for a comment'})

    // comment should return error if you try setting text to whitespace only string
    updatedComment = comment.update({
        text: '    '
    })
    expect(updatedComment).toStrictEqual({error: 'text field cannot be empty for a comment'})

    // comment should update with new text and name
    updatedComment = comment.update({
        text: 'updated text', 
        name: 'updated name'
    })
    expect(updatedComment.name).toBe('updated name')
    expect(updatedComment.text).toBe('updated text')
    // make sure this change persisted to our collection
    expect(Comment.comments).toStrictEqual([updatedComment])

     // comment update ignores extra params, such as postId
    updatedComment = comment.update({
        text: 'updated text again', 
        name: 'updated name', 
        postId: 12312
    })
    expect(updatedComment.postId).toBe(1)
})