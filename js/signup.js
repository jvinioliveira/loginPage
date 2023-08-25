// Var do nome inserido
var nameInput = document.getElementById ('name');
var labelName = document.getElementById ('labelName');
var validName = false;
// Var do Email inserido
var email = document.getElementById ('email'); 
var labelEmail = document.getElementById ('labelEmail');
var validEmail = false;
// Var da senha inserida
var passInput = document.getElementById ('passInput');
var labelPassInput = document.getElementById ('labelPassInput');
var validPass = false;
// Var do icone da field senha
var showPassIcon = document.getElementById ('showPassIcon');
// Var da Senha da field confirmação
var passInputConfirm = document.getElementById ('passInputConfirm');
var labelpassInputConfirm = document.getElementById ('labelpassInputConfirm');
var validPassConfirm = false;
// Var icone da field confirmação
var showPassIconConfirm = document.getElementById ('showPassIconConfirm');
// var da cor padrão
var mainColor = "#076001";
// Var de mensagem de erro e mensagem de sucesso 
var msgSuccess = document.getElementById ('msgSuccess');
var msgError = document.getElementById ('msgError');
// Var do Botão cadastrar e botão login
var btnSingUp = document.getElementById ('btnSingUp');
var btnSingIn = document.getElementById ('btnSingIn');


// Função para cadastrar Nome
nameInput.addEventListener('keyup', function() {
  const nameValue = nameInput.value.trim();

  if (nameValue.length < 3 || /^[a-zA-ZÀ-ÿ\sÇç]+$/.test(nameValue) === false) {
    labelName.setAttribute ('style', 'color: red');
    nameInput.setAttribute ('style', 'border: 1px solid red; color: red;');
    nameInput.placeholder = 'Insira no minimo 3 caracteres *';
    labelName.innerHTML = '<i class="fi fi-rs-user">*</i>';
    validName = false;
  } else {
    labelName.setAttribute ('style', 'color:' + mainColor);
    nameInput.setAttribute ('style', 'border: 1px solid' + mainColor);
    labelName.innerHTML = '<i class="fi fi-rr-check"></i>';
    validName = true;
  }
});

// Função para cadastrar E-mail
email.addEventListener('keyup', function() {
  if (!isValidEmail(email.value)) {
    labelEmail.setAttribute ('style', 'color: red');
    email.setAttribute ('style', 'border: 1px solid red; color: red;');
    email.placeholder = 'Insira um E-mail válido';
    labelEmail.innerHTML = '<i class="fi fi-rs-envelope">*</i>';
    validEmail = false;
  } else {
    labelEmail.setAttribute ('style', 'color:' + mainColor);
    email.setAttribute ('style', 'border: 1px solid' + mainColor);
    labelEmail.innerHTML = '<i class="fi fi-rr-check"></i>';
    validEmail = true;
  }
});
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

// Função para cadastrar Senha
passInput.addEventListener('keyup', function() {
  if (passInput.value.length < 6) {
    labelPassInput.setAttribute ('style', 'color: red');
    showPassIcon.setAttribute ('style', 'color: red');
    passInput.setAttribute ('style', 'border: 1px solid red; color: red;');
    passInput.placeholder = 'Insira no mínimo 6 caracteres';
    labelPassInput.innerHTML = '<i class="fi fi-rr-lock">*</i>';
    validPass = false;
  } else {
    labelPassInput.setAttribute ('style', 'color:' + mainColor);
    showPassIcon.setAttribute ('style', 'color:' + mainColor);
    passInput.setAttribute ('style', 'border: 1px solid' + mainColor);
    labelPassInput.innerHTML = '<i class="fi fi-rr-check"></i>'
    validPass = true;
  }
});

// Função para cadastrar a Confirmação de Senha
passInputConfirm.addEventListener('keyup', function() {
  if (passInput.value != passInputConfirm.value) {
    labelpassInputConfirm.setAttribute ('style', 'color: red');
    showPassIconConfirm.setAttribute ('style', 'color: red');
    passInputConfirm.setAttribute ('style', 'border: 1px solid red; color: red;');
    passInputConfirm.placeholder = 'Senhas não correspondem';
    labelpassInputConfirm.innerHTML = '<i class="fi fi-rs-key-skeleton-left-right">*</i>';
    validPassConfirm = false;
  } else if (passInputConfirm.value.length < 6 && passInput.value === passInputConfirm.value ) {
    labelpassInputConfirm.setAttribute ('style', 'color: red');
    showPassIconConfirm.setAttribute ('style', 'color: red');
    passInputConfirm.setAttribute ('style', 'border: 1px solid red; color: red;');
    labelpassInputConfirm.innerHTML = '<i class="fi fi-rs-key-skeleton-left-right">*</i>';
    validPassConfirm = false;
  } else {
    labelpassInputConfirm.setAttribute ('style', 'color:' + mainColor);
    showPassIconConfirm.setAttribute ('style', 'color:' + mainColor);
    passInputConfirm.setAttribute ('style', 'border: 1px solid' + mainColor);
    labelpassInputConfirm.innerHTML = '<i class="fi fi-rr-check"></i>';
    validPassConfirm = true;
  }
});

// Função para validar cadastro
function signUp() {
  if (validName && validEmail && validPass && validPassConfirm){
    let userList = JSON.parse (localStorage.getItem ('userList') || '[]');

    userList.push ({
      nameCad: nameInput.value,
      emailCad: email.value,
      passCad: passInput.value,
    });

    localStorage.setItem ('userList', JSON.stringify(userList));

    msgSuccess.setAttribute ('style', 'display: block');
    msgError.setAttribute ('style', 'display: none');
    btnSingUp.setAttribute ('style', 'display: none');
    btnSingIn.setAttribute ('style', 'display: block');
  } else {
    msgError.setAttribute ('style', 'display: block');
    msgSuccess.setAttribute ('style', 'display: none');
    btnSingUp.setAttribute ('style', 'display: block');
    btnSingIn.setAttribute ('style', 'display: none');
  };
};

// Função para direcionar usuário para página de login
function signIn() {
  window.location.href = 'signin.html';
};

// Script mostrar senha
showPassIcon.addEventListener ('click', function() {
    if (passInput.type === 'password') {
      passInput.type = 'text';
      showPassIcon.querySelector('i').classList.remove('fi', 'fi-rr-eye');
      showPassIcon.querySelector('i').classList.add('fi', 'fi-rr-eye-crossed');
    } else {
      passInput.type = 'password';
      showPassIcon.querySelector('i').classList.remove('fi', 'fi-rr-eye-crossed');
      showPassIcon.querySelector('i').classList.add('fi', 'fi-rr-eye');
    }
});

// Script mostrar senha de confirmação
showPassIconConfirm.addEventListener ('click', function() {
  if (passInputConfirm.type === 'password') {
    passInputConfirm.type = 'text';
    showPassIconConfirm.querySelector('i').classList.remove('fi', 'fi-rr-eye');
    showPassIconConfirm.querySelector('i').classList.add('fi', 'fi-rr-eye-crossed');
  } else {
    passInputConfirm.type = 'password';
    showPassIconConfirm.querySelector('i').classList.remove('fi', 'fi-rr-eye-crossed');
    showPassIconConfirm.querySelector('i').classList.add('fi', 'fi-rr-eye');
  }
});
