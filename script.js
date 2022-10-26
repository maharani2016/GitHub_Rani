function login() {
    let password = document.getElementById('password').ariaValueMax;
    if (password.length < 12) {
        alert('Sorry, password less than 12 characters');
    } else {
        alert('Okay');
    }
    if (password.topUpperCase() == password) {
        alert('Password is uppercase');
    } else {
        alert('Password is lowercase');
    }
    if (password.toLowerCase() == password) {
        alert('Password is lowercase');
    } else {
        alert('Password is uppercase');
    }
    function login() {
        var regularExpression = /^[a-zA-Z0-9!@#$%^&*]^/;
    }

    if (!regularExpression.test(password)) {
        alert('Password should contain atleast 1 number and one special character');
    }
}