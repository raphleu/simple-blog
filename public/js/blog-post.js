const blogPostTitle = document.getElementById('blog-post-title')
const blogPostBody = document.getElementById('blog-post-body')
const blogPostComments = document.getElementById('blog-post-comments')

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

fetch('/post/' + postId).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            blogPostBody.innerText = data.error
        }
        else{
            blogPostTitle.textContent = data.title
            blogPostBody.textContent = data.body
            if (data.comments.length > 0) {
                data.comments.forEach((comment) => {
                    let commentListElement = document.createElement('li')
                    commentListElement.className = 'comment-list-element'
        
                    let commentNameDiv = document.createElement('div')
                    commentNameDiv.className = 'comment-name-div'
                    if (comment.name) {
                        commentNameDiv.innerHTML = comment.name
                    }
                    else {
                        commentNameDiv.innerHTML = '(comment has no name)'
                    }
        
                    commentListElement.appendChild(commentNameDiv)
        
                    let commentTextDiv = document.createElement('div')
                    commentTextDiv.className = 'comment-text-div'
                    commentTextDiv.innerHTML = comment.text
                    commentListElement.appendChild(commentTextDiv)
        
                    blogPostComments.append(commentListElement)
                })
            }
            else {
                blogPostComments.innerText = '(no comments to display)'
            }
        }
    }).catch((error) => {
    })
}).catch((error) => {
})