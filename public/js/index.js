const blogPosts = document.getElementById('blog-posts');

fetch('/posts').then((response) => {
    response.json().then((data) => {
        console.log(data)
        console.log(data[1])
        data.forEach((post) => {
            let postListElement = document.createElement('li')
            postListElement.className = 'blog-post-list-element'
            
            commentCount = document.createElement('div')
            commentCount.className = 'comment-count'
            commentCount.innerHTML = 'Number of comments: ' + post.comments.length

            // Normally I would use templating or something better for this, but this should do for now
            postListElement.innerHTML = '<h2><a href=/view/post?postId=' + post.id + '>' + post.title + '</a></h2>' + post.body.substring(0, 200) + '...<br>'
            postListElement.appendChild(commentCount)

            blogPosts.append(postListElement)
        })
    })
}).catch((error) => {

})