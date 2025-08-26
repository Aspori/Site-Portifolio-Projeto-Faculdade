function alterarmenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('horizontal');
    menu.classList.toggle('vertical');
}
document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    alert(`Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
  
    
  });