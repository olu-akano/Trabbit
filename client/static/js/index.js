// Log in form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', requestLogin);

// Show/hide signup form
    // Later swap to modal?
const signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', showSignup);
function showSignup(e){
    e.preventDefault();
    const signupModal = document.getElementById('signupModal');
    signupModal.classList.toggle('hide-modal');
}

// Check password confirmation in registration form
const password = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
confirmPassword.addEventListener('keyup', checkPassword)
function checkPassword(){
    const submitButton = document.getElementById('registrationButton');
    if (password.value === confirmPassword.value) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Registration form submission
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', requestRegistration);