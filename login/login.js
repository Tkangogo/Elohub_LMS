/* Login Logic - Student 1 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMsg = document.getElementById('error-msg');

    // Auto-fill for easier testing if present? (Optional, skipping for now)

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (!name || !email) {
            showError('Please enter both name and email.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            showError('Please enter a valid student email.');
            return;
        }

        const user = { name, email };

        // Save to Storage
        localStorage.setItem('lmsUser', JSON.stringify(user));

        // Redirect to Main Shell (index.html in root)
        window.location.href = '../index.html';
    });

    function showError(msg) {
        errorMsg.textContent = msg;
        errorMsg.style.opacity = '1';
        setTimeout(() => {
            errorMsg.style.opacity = '0';
        }, 3000);
    }
});
