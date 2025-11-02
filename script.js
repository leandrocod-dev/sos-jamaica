// Usa um handler de submit para todos os formulários com id "formCadastro"
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('formCadastro');
  if (form) {
    form.addEventListener('submit', enviarFormulario);
  }
});

// Função que trata o evento de submit do formulário
function enviarFormulario(event) {
  event.preventDefault();
  var form = event.target;

  // Captura os valores digitados pelo usuário a partir do próprio formulário
  var nome = (form.querySelector('#nome') || {}).value || '';
  var email = (form.querySelector('#email') || {}).value || '';
  var tipo = (form.querySelector('#tipo') || {}).value || '';

  nome = nome.trim();
  email = email.trim();

  // Verifica se todos os campos foram preenchidos
  if (nome === '' || email === '') {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  // Exibe uma mensagem de agradecimento personalizada
  alert('Obrigado, ' + nome + '! Seu cadastro como ' + tipo.toLowerCase() + ' foi recebido com sucesso.');

  // Limpa o formulário depois do envio
  form.reset();
}
