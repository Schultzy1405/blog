const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitBtn = document.getElementById('submitbtn');
const blogForm = document.getElementById('blog-form');

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    const blogPost = { username, title, content };
    if (username === "" || title === "" || content === "") {
        alert("Please fill out the remaining information.")
    } else {
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html';
    }
});
const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});