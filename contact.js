// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const captcha = document.getElementById('captcha');
    const charCount = document.getElementById('charCount');
    const successMessage = document.getElementById('successMessage');

    // Real-time character count for message
    message.addEventListener('input', () => {
        const count = message.value.length;
        charCount.textContent = `${count}/500`;
    });

    // Form validation function
    function validateForm() {
        let isValid = true;

        // Reset error messages and styles
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(el => el.classList.remove('error'));

        // Full Name validation (letters only)
        if (!fullName.value.trim()) {
            document.getElementById('fullNameError').textContent = 'Full name is required';
            fullName.classList.add('error');
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(fullName.value.trim())) {
            document.getElementById('fullNameError').textContent = 'Only letters and spaces allowed';
            fullName.classList.add('error');
            isValid = false;
        }

        // Email validation
        if (!email.value.trim()) {
            document.getElementById('emailError').textContent = 'Email is required';
            email.classList.add('error');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            document.getElementById('emailError').textContent = 'Enter a valid email';
            email.classList.add('error');
            isValid = false;
        }

        // Phone validation (numbers only, optional)
        if (phone.value.trim() && !/^\d+$/.test(phone.value.trim())) {
            document.getElementById('phoneError').textContent = 'Only numbers allowed';
            phone.classList.add('error');
            isValid = false;
        }

        // Subject validation
        if (!subject.value) {
            document.getElementById('subjectError').textContent = 'Please select a subject';
            subject.classList.add('error');
            isValid = false;
        }

        // Message validation
        if (!message.value.trim()) {
            document.getElementById('messageError').textContent = 'Message is required';
            message.classList.add('error');
            isValid = false;
        }

        // CAPTCHA validation (3 + 4 = 7)
        if (captcha.value.trim() !== '7') {
            document.getElementById('captchaError').textContent = 'Incorrect answer, please try again';
            captcha.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            successMessage.classList.remove('hidden');
            form.reset();
            charCount.textContent = '0/500';

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    });

    // Real-time validation on blur
    [fullName, email, phone, subject, message, captcha].forEach(input => {
        input.addEventListener('blur', validateForm);
    });
});