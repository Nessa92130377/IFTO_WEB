
function validityFields() {
    const emailValid = isEmailValid();
    document.getElementById('recorver-password-button').disabled = !emailValid;

    const passwordValid = isPasswordValid(); 
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
        return false
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


function cadastro() {
    window.location.href = "cadastrar.html"
}

function loginuser() {
    window.location.href = "login.html"
}

function login() {
    window.location.href = "index.html"
}

function loginindex() {
    window.location.href = "cursos.html"
}