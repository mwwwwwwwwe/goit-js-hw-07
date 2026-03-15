const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const { email, password } = event.target.elements;
    
    const trimmedEmail = email.value.trim();
    const trimmedPassword = password.value.trim();
    
    if (trimmedEmail === '' || trimmedPassword === '') {
        alert('All form fields must be filled in');
        return;
    }
    
    console.log({ email: trimmedEmail, password: trimmedPassword });
    event.target.reset();
});



