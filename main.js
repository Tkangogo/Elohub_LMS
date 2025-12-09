/* Main App Logic (Shell) - Student 1 (Architecture) */

document.addEventListener('DOMContentLoaded', () => {

    // Auth Check
    const storedUser = localStorage.getItem('lmsUser');

    if (!storedUser) {
        // Redirect to login if no session found
        window.location.href = 'login/login.html';
        return; // Stop execution
    }

    const user = JSON.parse(storedUser);
    initializeSidebar(user);

    const contentFrame = document.getElementById('content-frame');
    const navLinks = document.querySelectorAll('.nav-item');

    // Ensure default page is loaded
    if (!contentFrame.contentWindow.location.href || contentFrame.contentWindow.location.href === 'about:blank') {
        contentFrame.src = 'dashboard/dashboard.html';
    }

    function initializeSidebar(user) {
        document.getElementById('display-name').textContent = user.name;
        document.getElementById('display-email').textContent = user.email;
        const initial = user.name.charAt(0).toUpperCase();
        document.getElementById('user-avatar').textContent = initial;
    }

    // Navigation Active State Handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });
});
