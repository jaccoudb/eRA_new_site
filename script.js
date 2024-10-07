const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");
const eyeIcon = togglePasswordButton.querySelector('i');
const loginForm = document.getElementById("login-form");
const resetForm = document.getElementById("reset-form");
const showResetFormButton = document.getElementById("show-reset-form");
const showLoginFormButton = document.getElementById("show-login-form");

togglePasswordButton.addEventListener("click", function () {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  eyeIcon.classList.toggle("mdi-eye");
  eyeIcon.classList.toggle("mdi-eye-off");
});

// Lógica para alternar entre Login e Reset de Senha
showResetFormButton.addEventListener("click", function (event) {
  event.preventDefault(); // Previne a ação padrão do link
  loginForm.style.display = "none"; // Esconde o formulário de login
  resetForm.style.display = "block"; // Exibe o formulário de reset de senha
});

showLoginFormButton.addEventListener("click", function (event) {
  event.preventDefault(); // Previne a ação padrão do link
  resetForm.style.display = "none"; // Esconde o formulário de reset de senha
  loginForm.style.display = "block"; // Exibe o formulário de login
});

// Lógica do botão de enviar no formulário de Reset de Senha
const resetSubmitButton = document.getElementById("reset-submit");
resetSubmitButton.addEventListener("click", function () {
  const resetEmail = document.getElementById("reset-email").value;
  if (resetEmail) {
    alert("Um link de reset foi enviado para " + resetEmail);
    resetForm.style.display = "none"; // Fecha o formulário após enviar
    loginForm.style.display = "block"; // Retorna ao formulário de login
  } else {
    alert("Por favor, digite um email válido.");
  }
});
