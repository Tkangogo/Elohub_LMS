/* Dashboard Logic - Student 2 */

document.addEventListener('DOMContentLoaded', () => {

    // Set Current Date
    const dateElement = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('en-US', options);

    // Get User Name from Parent (localStorage access)
    // Since we are same domain (iframe), we can access localStorage directly
    const storedUser = localStorage.getItem('lmsUser');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        const welcomeMsg = document.getElementById('welcome-msg');
        // Extract first name
        const firstName = user.name.split(' ')[0];
        welcomeMsg.textContent = `Good Morning, ${firstName}!`;
    }

    // Add interactivity to course cards
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // In a real app this would go to course details
            // For now we just animate slightly
            card.style.transform = 'scale(0.98)';
            setTimeout(() => card.style.transform = '', 150);
        });
    });

});
