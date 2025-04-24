// Counter functionality
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('counterBtn');
    const countDisplay = document.getElementById('count');
    
    // Load saved count from localStorage
    let count = localStorage.getItem('clickCount') || 0;
    countDisplay.textContent = count;
    
    // Add click event
    button.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
        localStorage.setItem('clickCount', count);
        
        // Add animation
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});