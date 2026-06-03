document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', (e) => {
        let isValid = true;

        // Reset errors
        emailError.textContent = '';
        passwordError.textContent = '';
        emailInput.style.borderColor = '#e5e7eb';
        passwordInput.style.borderColor = '#e5e7eb';

        // Validate Email
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
            emailInput.style.borderColor = '#ef4444';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.style.borderColor = '#ef4444';
            isValid = false;
        }

        // Validate Password
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Password is required';
            passwordInput.style.borderColor = '#ef4444';
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordInput.style.borderColor = '#ef4444';
            isValid = false;
        }

        // Prevent submission if invalid
        if (!isValid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            alert('Login successful!');
        }
    });
});