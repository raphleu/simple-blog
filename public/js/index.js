const blogPosts = document.getElementById('blog-posts');

fetch('/posts').then((response) => {
    response.json().then((data) => {
        data.forEach((post) => {
            let postListElement = document.createElement('li')
            postListElement.className = 'blog-post-list-element'
            
            commentCount = document.createElement('div')
            commentCount.className = 'comment-count'
            commentCount.innerHTML = 'Comments: ' + post.comments.length

            postPreview = document.createElement('div')
            postPreview.className = 'post-preview'
            if (post.body.length > 200) {
                postPreview.innerHTML = post.body.substring(0, 200) + '...'    
            }
            else {
                postPreview.innerHTML = post.body
            }

            // Normally I would use templating or something better for this, but this should do for now
            postListElement.innerHTML = '<h2><a href=/view/post?postId=' + post.id + '>' + post.title + '</a></h2>'
            postListElement.appendChild(postPreview)
            postListElement.appendChild(commentCount)

            blogPosts.append(postListElement)
        })
    })
}).catch((error) => {

})