document.getElementById("form-number").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Obtém os valores dos campos de entrada
    var numero1 = parseFloat(document.getElementById("number1").value);
    var numero2 = parseFloat(document.getElementById("number2").value);
  
    var successMessage = document.querySelector(".success-message");
    var errorMessage = document.querySelector(".error-message");
  
    // Limpa as mensagens anteriores
    successMessage.textContent = "";
    errorMessage.textContent = "";
  
    // Realiza a validação
    if (isNaN(numero1) || isNaN(numero2)) {
      errorMessage.textContent = "Por favor, insira números válidos.";
    } else if (numero2 > numero1) {
      successMessage.textContent = "Formulário válido: número 2 é maior que número 1.";
    } else {
      errorMessage.textContent = "Formulário inválido: número 2 não é maior que número 1.";
    }
  });
  