// Dashboard JavaScript - Interactivity and Animations

document.addEventListener('DOMContentLoaded', () => {
    // Card hover effects (additional to CSS)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Progress bar animation for Completed Assignments
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        // Animate to 70% on page load
        setTimeout(() => {
            progressFill.style.width = '70%';
        }, 500);
    }

    // Simulate dynamic welcome message (could be from localStorage or API)
    const welcomeHeading = document.querySelector('.welcome-section h1');
    if (welcomeHeading) {
        // For demo purposes, keep static. In real app, fetch from user data
        console.log('Welcome message loaded');
    }

    // Add click handlers for cards (placeholder for future functionality)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clicked:', card.querySelector('p').textContent);
            // Could navigate to respective sections or open modals
        });
    });
});
