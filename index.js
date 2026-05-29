document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        let isValid = true;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        
        emailError.innerText = "";
        messageError.innerText = "";

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.innerText = "Please enter a valid email.";
            isValid = false;
        }

        // Empty Message Check
        if (message.trim() === "") {
            messageError.innerText = "Message cannot be empty.";
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            alert("Thank you! Your message has been 'sent'.");
        }
    });
});