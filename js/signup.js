// Var do nome inserido
var nameInput = document.getElementById("name");
var labelName = document.getElementById("labelName");
// Var do Email inserido
var email = document.getElementById("email"); 
var labelEmail = document.getElementById("labelEmail");
// Var da senha inserida
var passInput = document.getElementById("passInput");
var labelPassInput = document.getElementById("labelPassInput");
// Var do icone da fild senha
var showPassIcon = document.getElementById("showPassIcon");
// Var da Senha da field confirmação
var passInputConfirm = document.getElementById("passInputConfirm");
var labelpassInputConfirm = document.getElementById("labelpassInputConfirm");
// Var icone da field confirmação
var showPassIconConfirm = document.getElementById("showPassIconConfirm");

// Função para cadastrar Nome
nameInput.addEventListener('keyup', function() {
  if (nameInput.value.length < 3) {
    labelName.setAttribute('style', 'color: red');
    nameInput.setAttribute('style', 'border: 1px solid red; color: red;');
    nameInput.placeholder = "Insira no minimo 3 caracteres";
    labelName.innerHTML = '<i class="fi fi-rs-user">*</i>';
  } else {
    labelName.setAttribute('style', 'color: #076001');
    nameInput.setAttribute('style', 'border: 1px solid #076001; color: #076001;');
    nameInput.placeholder = "Nome"; 
    labelName.innerHTML = '<i class="fi fi-rs-user">';
  }
});

// Função para cadastrar E-mail
email.addEventListener('keyup', function() {
  if (email.value.length < 3) {
    labelEmail.setAttribute('style', 'color: red');
    email.setAttribute('style', 'border: 1px solid red; color: red;');
    email.placeholder = "Insira um E-mail válido";
    labelEmail.innerHTML = '<i class="fi fi-rs-envelope">*</i>';
  } else {
    labelEmail.setAttribute('style', 'color: #076001');
    email.setAttribute('style', 'border: 1px solid #076001; color: #076001;');
    email.placeholder = "Nome";
    labelEmail.innerHTML = '<i class="fi fi-rs-user">';
  }
});


function signUp() {
}

// Script mostrar senha
showPassIcon.addEventListener("click", function() {
    if (passInput.type === "password") {
      passInput.type = "text";
      showPassIcon.querySelector("i").classList.remove("fi", "fi-rr-eye");
      showPassIcon.querySelector("i").classList.add("fi", "fi-rr-eye-crossed");
    } else {
      passInput.type = "password";
      showPassIcon.querySelector("i").classList.remove("fi", "fi-rr-eye-crossed");
      showPassIcon.querySelector("i").classList.add("fi", "fi-rr-eye");
    }
});

// Script mostrar senha de confirmação
showPassIconConfirm.addEventListener("click", function() {
  if (passInputConfirm.type === "password") {
    passInputConfirm.type = "text";
    showPassIconConfirm.querySelector("i").classList.remove("fi", "fi-rr-eye");
    showPassIconConfirm.querySelector("i").classList.add("fi", "fi-rr-eye-crossed");
  } else {
    passInputConfirm.type = "password";
    showPassIconConfirm.querySelector("i").classList.remove("fi", "fi-rr-eye-crossed");
    showPassIconConfirm.querySelector("i").classList.add("fi", "fi-rr-eye");
  }
});
