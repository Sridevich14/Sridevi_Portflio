const textElement = document.querySelector('.typing-text');
const text = "Sridevi";
let index = 0;
let isTyping = true;

function type() {
    if (isTyping) {
        textElement.textContent += text[index];
        index++;
    } else {
        textElement.textContent = textElement.textContent.slice(0, -1);
        index--;
    }

    if (index >= text.length) {
        isTyping = false;
    }

    if (index <= 0) {
        isTyping = true;
    }
}
setInterval(type, 200);

const textToType = "Front-End Developer";
        let currentIndex = 0;
        const typingHeader = document.getElementById('typing-header');

        function typeText() {
            if (currentIndex < textToType.length) {
                typingHeader.textContent += textToType[currentIndex];
                currentIndex++;
                setTimeout(typeText, 100); 
            }
        }
        window.onload = typeText;

        //Contact form Verification
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const submitButton = document.getElementById('submit');
        
    function showError(inputElement, errorMessage) {
        const errorElement = inputElement.nextElementSibling;
        errorElement.textContent = errorMessage;
    }
    function hideError(inputElement) {
        const errorElement = inputElement.nextElementSibling;
        errorElement.textContent = '';
    }
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Please enter your name.');
        } else {
            hideError(nameInput);
        }

        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Please enter your email.');
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
        } else {
            hideError(emailInput);
        }

        if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Please enter your phone number.');
        } else if (!isValidPhoneNumber(phoneInput.value.trim())) {
            showError(phoneInput, 'Please enter a 10-digit phone number.');
        } else {
            hideError(phoneInput);
        }

        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Please enter your message.');
        } else {
            hideError(messageInput);
        }
        if (isValidForm()) {
            setTimeout(() => {
                alert('Thank you!! We will reach you out soon');
                contactForm.reset();
            }, 500);
        }
    });
    function isValidEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
    function isValidPhoneNumber(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }
    function isValidForm() {
        return (
            nameInput.value.trim() !== '' &&
            isValidEmail(emailInput.value.trim()) &&
            isValidPhoneNumber(phoneInput.value.trim()) &&
            messageInput.value.trim() !== ''
        );
    }
});

        
                
//Smooth scrolling effect
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});
