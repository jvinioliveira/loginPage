// Vars dos icones de mostrar senha
var passwordInput = document.getElementById ('passInput');
var showPassIcon = document.getElementById ('showPassIcon');

// Vars do e-mail
var inputEmail = document.getElementById ('email');
var labelEmail = document.getElementById ('labelEmail');
var validEmail = false;

// Vars da senha
var inputPass = document.getElementById ('passInput');
var labelPass = document.getElementById ('labelPass')
var validPass = false;

// Vars dos icones 
var correctEmail = document.getElementById ('correctEmail');
var correctPass = document.getElementById ('correctPass');

// var da cor padrão
var mainColor = "#076001";

// Var das mensagem do Btn
var Msg1 = document.querySelector ('.Msg1');
var Msg2 = document.querySelector ('.Msg2');
var MsgError = document.getElementById ('msgError');
var notFoundUser = document.getElementById ('notFoundUser');

// Função para validar email
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};
inputEmail.addEventListener ('keyup', function() {
    if (isValidEmail(inputEmail.value) == false) {
        labelEmail.setAttribute ('style', 'color: red');
        labelEmail.innerHTML = 'Digite um Email Válido *';
        inputEmail.setAttribute ('style', 'border: 1px solid red; color: red;');
        correctEmail.setAttribute ('style', 'display: none');
        validEmail = false;
    } else {
        labelEmail.setAttribute ('style', '');
        labelEmail.innerHTML = 'E-mail';
        inputEmail.setAttribute ('style', '');
        correctEmail.setAttribute ('style', 'display: block');
        validEmail = true;
    }
});

// Função para validar senha 
inputPass.addEventListener ('keyup', function() {
    if (inputPass.value.length < 6) {
        labelPass.setAttribute ('style', 'color: red');
        labelPass.innerHTML = 'Digite no Minimo 6 caracteres *';
        inputPass.setAttribute ('style', 'border: 1px solid red; color: red;');
        showPassIcon.setAttribute ('style', 'color: red');
        validPass = false;
    } else {
        labelPass.setAttribute ('style', '');
        labelPass.innerHTML = 'Senha';
        inputPass.setAttribute ('style', '');
        showPassIcon.setAttribute ('style', '');
        correctPass.setAttribute ('style', 'display: block');
        validPass = true;
    }
});

// Validar informações inseridas
function SignIn() {
    if (inputEmail.value.length == 0 || inputPass.value.length == 0) {
        Msg1.setAttribute ('style', 'display: block');
        Msg2.setAttribute ('style', 'display: none');
        MsgError.setAttribute ('style', 'display: block');        
    } else if (validEmail && validPass) {
        Msg1.setAttribute ('style', 'display: none');
        Msg2.setAttribute ('style', 'display: block'); 
        MsgError.setAttribute ('style', 'display: none');
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 3000);
    } else {
        Msg1.setAttribute ('style', 'display: block');
        Msg2.setAttribute ('style', 'display: none');
        MsgError.setAttribute ('style', 'display: none');
    }
};
// Função para Mostrar senha e mudar icone
showPassIcon.addEventListener ('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPassIcon.querySelector ('i').classList.remove('fi', 'fi-rr-eye');
        showPassIcon.querySelector ('i').classList.add('fi', 'fi-rr-eye-crossed');
    } else {
        passwordInput.type = 'password';
        showPassIcon.querySelector ('i').classList.remove('fi', 'fi-rr-eye-crossed');
        showPassIcon.querySelector ('i').classList.add('fi', 'fi-rr-eye');
    }
});