// Script mostrar senha
var passwordInput = document.getElementById("passInput");
var showPassIcon = document.getElementById("showPassIcon");

showPassIcon.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassIcon.querySelector("i").classList.remove("fi", "fi-rr-eye");
        showPassIcon.querySelector("i").classList.add("fi", "fi-rr-eye-crossed");
    } else {
        passwordInput.type = "password";
        showPassIcon.querySelector("i").classList.remove("fi", "fi-rr-eye-crossed");
        showPassIcon.querySelector("i").classList.add("fi", "fi-rr-eye");
    }
});
// Script mostrar senha de confirmação
var passwordInputConfirm = document.getElementById("passInputConfirm");
var showPassIconConfirm = document.getElementById("showPassIconConfirm");

showPassIconConfirm.addEventListener("click", function() {
  if (passwordInputConfirm.type === "password") {
    passwordInputConfirm.type = "text";
    showPassIconConfirm.querySelector("i").classList.remove("fi", "fi-rr-eye");
    showPassIconConfirm.querySelector("i").classList.add("fi", "fi-rr-eye-crossed");
  } else {
    passwordInputConfirm.type = "password";
    showPassIconConfirm.querySelector("i").classList.remove("fi", "fi-rr-eye-crossed");
    showPassIconConfirm.querySelector("i").classList.add("fi", "fi-rr-eye");
  }
});