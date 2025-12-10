// Dashboard JavaScript - Interactivity and Animations

document.addEventListener('DOMContentLoaded', () => {
    // Sidebar link highlighting
    const sidebarLinks = document.querySelectorAll('.sidebar-item a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all items
            sidebarLinks.forEach(l => l.parentElement.classList.remove('active'));
            // Add active class to clicked item
            this.parentElement.classList.add('active');
        });
    });

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

    // Responsive sidebar toggle (for mobile)
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    function toggleSidebar() {
        if (window.innerWidth <= 768) {
            sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Add a toggle button for mobile (not in HTML yet, but prepared)
    // const toggleBtn = document.createElement('button');
    // toggleBtn.textContent = '☰';
    // toggleBtn.className = 'sidebar-toggle';
    // document.querySelector('.navbar').appendChild(toggleBtn);
    // toggleBtn.addEventListener('click', toggleSidebar);

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    });

    // Initialize sidebar visibility on load
    if (window.innerWidth <= 768) {
        sidebar.style.display = 'none';
    }
});
