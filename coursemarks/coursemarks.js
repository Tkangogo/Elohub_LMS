/* Coursemarks Logic - Student 3 */

document.addEventListener('DOMContentLoaded', () => {
    // Student 3 wants to add a feature: Click on a row to toggle detail view (simulated)

    const rows = document.querySelectorAll('.marks-table tbody tr');

    rows.forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => {
            // Highlight row
            rows.forEach(r => r.style.backgroundColor = 'transparent');
            row.style.backgroundColor = '#f8fafc';

            // In a real app, this might open a modal with breakdown
            console.log('Clicked course row');
        });
    });
});
