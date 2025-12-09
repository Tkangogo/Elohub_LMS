/* Community Logic - Student 6 */

document.addEventListener('DOMContentLoaded', () => {

    const postInput = document.getElementById('post-input');
    const postBtn = document.getElementById('post-btn');
    const postsContainer = document.getElementById('posts-container');

    // Load existing posts from localStorage
    loadPosts();

    postBtn.addEventListener('click', createPost);
    postInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            createPost();
        }
    });

    function createPost() {
        const text = postInput.value.trim();
        if (!text) return;

        // Get User Name from Parent
        let userName = 'You';
        let userInitial = 'Y';

        try {
            const storedUser = localStorage.getItem('lmsUser');
            if (storedUser) {
                const user = JSON.parse(storedUser);
                userName = user.name;
                userInitial = userName.charAt(0).toUpperCase();
            }
        } catch (e) {
            // Ignore if cross-origin blocked (shouldn't be in same file system)
        }

        const newPost = {
            id: Date.now(),
            name: userName,
            initial: userInitial,
            content: text,
            time: 'Just now',
            likes: 0
        };

        savePost(newPost);
        renderPost(newPost);

        // Clear input and scroll to bottom
        postInput.value = '';
        postsContainer.scrollTop = postsContainer.scrollHeight;
    }

    function savePost(post) {
        let posts = JSON.parse(localStorage.getItem('lmsPosts') || '[]');
        posts.push(post);
        localStorage.setItem('lmsPosts', JSON.stringify(posts));
    }

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('lmsPosts') || '[]');
        posts.forEach(post => renderPost(post));
    }

    function renderPost(post) {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-header">
                <div class="p-avatar" style="background: #c084fc; color: white;">${post.initial}</div>
                <div class="p-info">
                    <h4>${post.name}</h4>
                    <span>${post.time}</span>
                </div>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            <div class="post-actions">
                <button><ion-icon name="heart-outline"></ion-icon> ${post.likes}</button>
                <button><ion-icon name="chatbubble-outline"></ion-icon> Reply</button>
            </div>
        `;
        // Append to end
        postsContainer.appendChild(card);
    }

});
