// fetch password input from the html document in association with the toggle icon and container
const passwordInput = document.getElementById('password');
// Target the large clickable container
// fetch toggle icon from the html document to create function for it that will work
const toggleContainer = document.getElementById('toggle-container'); 
const togglePassword = document.getElementById('toggle-password');
// togglePassword is within the toggleContainer so it is to work by default.
// fetching the ID because it is in association with the password and toggleContainer.

toggleContainer.addEventListener('click', function () {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    
    // Toggle the input type
    if (isPassword) {
        passwordInput.setAttribute('type', 'text');
        
        // Change icon to 'slash' (password revealed)
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    } else {
        passwordInput.setAttribute('type', 'password');
        
        // Change icon to 'eye' (password hidden)
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    }
    // Set focus back to the input so the user can keep typing
    passwordInput.focus(); 
});