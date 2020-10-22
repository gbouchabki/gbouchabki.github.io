'use strict'

const logar = document.getElementById('btn-acessar')
const recuperarSenha = document.getElementById('recuperar-senha')
const cadastroUsuario = document.getElementById('cadastrar')

function login() {
  var valido = 0;
  var usuario = document.getElementsByName('username')[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName('password')[0].value;
  senha = senha.toLowerCase();

  if (usuario == "admin" && senha == "admin") {
    window.location = "home.html";
    valido = 1;
  }
  if (valido == 0) {
    alert("Dados incorretos, tente novamente");

  }
}

logar.addEventListener('click', login)
recuperarSenha.addEventListener('click', exibirSenha)
cadastroUsuario.addEventListener('click', exibirSenha)

function exibirSenha(){
  alert('Usuário: admin  |   Senha: admin')
}
