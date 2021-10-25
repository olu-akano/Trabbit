// Retrieve random inspirational quote
async function renderQuote(){
    const quote = await getQuote();
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    quoteText.textContent = `"${quote.text}"`;
    if (!!quote.author){
        quoteAuthor.textContent = `- ${quote.author}`;
    } else {
        quoteAuthor.textContent = '';
    }
}
window.onload = renderQuote;

// Show/hide signup form
//     // Later swap to modal?
// const signupButton = document.getElementById('signupButton');
// signupButton.addEventListener('click', showSignup);
// function showSignup(e){
//     e.preventDefault();
//     const signupModal = document.getElementById('signupModal');
//     signupModal.classList.toggle('hide-modal');
// }
// Get the modal
var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
var signupButton = document.getElementById("signupButton");

// Get the <span> element that closes the modal
var closeButton = document.getElementById("closeModal")

// When the user clicks on the button, open the modal
function showSignup(e){
    e.preventDefault();
    // signupModal.style.display = "flex";
    signupModal.classList.add("signup-flex");
}
signupButton.addEventListener('click', showSignup);

// When the user clicks on <span> (x), close the modal
closeButton.onclick = () => { 
    // signupModal.style.display = "none"; 
    signupModal.classList.remove("signup-flex");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == signupModal) {
    // signupModal.style.display = "none";
    signupModal.classList.remove("signup-flex");
  }
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

// Log in form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', requestLogin);

// Registration form submission
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', requestRegistration);