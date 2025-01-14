// script.js

document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const special = document.getElementById('symbols').checked; // Updated to match HTML

    // Basic validation: password length and at least one checkbox selected
    if (length < 8 || length > 20) {
        alert('Password length must be between 8 and 20 characters.');
        return;
    }

    if (!uppercase && !lowercase && !numbers && !special) {
        alert('You must select at least one character type.');
        return;
    }

    // Generate Password Logic
    const password = generatePassword(length, uppercase, lowercase, numbers, special);
    document.getElementById('generated-password').value = password;  // Updated to match HTML
});

function generatePassword(length, uppercase, lowercase, numbers, special) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const spec = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let charset = '';
    if (uppercase) charset += upper;
    if (lowercase) charset += lower;
    if (numbers) charset += num;
    if (special) charset += spec;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        password += randomChar;
    }

    return password;
}

