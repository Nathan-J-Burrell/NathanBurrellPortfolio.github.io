document.querySelector('.burger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('form-message').textContent = "Please fill in all fields.";
        return;
    }

    // Simulate form submission
    document.getElementById('form-message').textContent = "Thank you for your message, I will get back to you as soon as I'm available!";

    // Clear form fields
    document.getElementById('contact-form').reset();
});

