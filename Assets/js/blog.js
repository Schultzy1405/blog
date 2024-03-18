function init() {
    const storedBlogPosts = localStorage.getItem('blogPosts')
if (storedBlogPosts) {
    const blogPosts = JSON.parse(storedBlogPosts)
    const blogPostContainer = document.getElementById('blogPostContainer');

    blogPosts.forEach(blogPost => {
        const blogPostElement = document.createElement('div');
            blogPostElement.innerHTML = `
            <h2>${blogPost.title}</h2>
            <p>By: ${blogPost.username}</p>
            <p>${blogPost.content}</p>
        `
        blogPostContainer.appendChild(blogPostElement)
    });
    }
}
init()
const toggleModeBtn = document.getElementById('toggle-mode');
const body = document.body;
toggleModeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
