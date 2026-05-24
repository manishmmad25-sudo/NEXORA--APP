// This file initializes the NEXORA application and handles user interactions.

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const moreOptionsButton = document.getElementById('more-options-button');
    const moreOptionsMenu = document.getElementById('more-options-menu');

    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform login logic here (e.g., API call)
        console.log('Logging in with:', email, password);
    });

    // Toggle More Options Menu
    moreOptionsButton.addEventListener('click', () => {
        moreOptionsMenu.classList.toggle('visible');
    });

    // Navigation logic for More Options Menu
    moreOptionsMenu.addEventListener('click', (event) => {
        const targetSection = event.target.dataset.section;
        if (targetSection) {
            navigateToSection(targetSection);
        }
    });

    function navigateToSection(section) {
        // Logic to navigate to the selected section
        console.log('Navigating to:', section);
        // Here you would typically load the corresponding component
    }
});