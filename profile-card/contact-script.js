document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    const errorMessages = {
        fullName: document.getElementById('error-full-name'),
        email: document.getElementById('error-email'),
        subject: document.getElementById('error-subject'),
        message: document.getElementById('error-message-text'),
    };

    const inputs = [fullNameInput, emailInput, subjectInput, messageInput];

    // Function to show an error message
    function showError(inputElement, message, errorElement) {
        inputElement.setAttribute('aria-invalid', 'true');
        errorElement.textContent = message;
        errorElement.hidden = false;
        inputElement.classList.add('input-error');
    }

    // Function to hide an error message
    function hideError(inputElement, errorElement) {
        inputElement.setAttribute('aria-invalid', 'false');
        errorElement.textContent = '';
        errorElement.hidden = true;
        inputElement.classList.remove('input-error');
    }

    // Validation function for individual fields
    function validateField(inputElement) {
        const fieldName = inputElement.name;
        const value = inputElement.value.trim();
        let isValid = true;
        let errorMessage = '';

        hideError(inputElement, errorMessages[fieldName]);

        if (inputElement.hasAttribute('required') && value === '') {
            errorMessage = `${inputElement.previousElementSibling.textContent} is required.`;
            isValid = false;
        } else if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address (e.g., name@example.com).';
                isValid = false;
            }
        } else if (fieldName === 'message') {
            if (value.length < 10) {
                errorMessage = 'Message must be at least 10 characters long.';
                isValid = false;
            }
        }

        if (!isValid) {
            showError(inputElement, errorMessage, errorMessages[fieldName]);
        }
        return isValid;
    }

    // Validate all fields on form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Simulate form submission success
            form.reset(); // Clear the form
            inputs.forEach(input => hideError(input, errorMessages[input.name])); // Clear any remaining error indicators
            successMessage.hidden = false; // Show success message
            // Hide success message after a few seconds
            setTimeout(() => {
                successMessage.hidden = true;
            }, 5000);
        } else {
            successMessage.hidden = true; // Hide success message if there are errors
            // Find the first invalid input and focus it for accessibility
            const firstInvalidInput = inputs.find(input => input.classList.contains('input-error'));
            if (firstInvalidInput) {
                firstInvalidInput.focus();
            }
        }
    });

    // Add real-time validation on input blur
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            // Clear error as user types, but re-validate on blur
            if (input.classList.contains('input-error')) {
                hideError(input, errorMessages[input.name]);
            }
        });
    });
});
