let corpoDoSite = window.document.body

// alinhamento de texto
corpoDoSite.style.textAlign = 'center'

// criando eventos

function clicar() {
    // quando clicar aparecerar um alerta avisando que vc clicou

    window.alert('voce clicou')
}


// feito direto no js com as opcoes na div feito por min
function clicar() {
    // quando clicar vai mudar o conteudo definido para clicou!

    let click = window.document.getElementById('click')
    click.innerText = 'clicou'
    click.style.background = 'black'
}  

function segurar() {
  // quando clicar e segurar vai mudar o conteudo definido para segurou!

  let segurar = window.document.getElementById("click");
  segurar.innerText = "Segurou";
  segurar.style.background = 'blue'

}  

function entrar() {
  // quando colocar o mause dentro da div vai mudar o conteudo definido para entrou!

  let entrar = window.document.getElementById("click");
  entrar.innerText = "entrou";
  entrar.style.background = 'aqua'
}  

function saiu() {
  // quando sair da div vai mudar o conteudo definido para saiu!

  let saiu = window.document.getElementById("click");
  saiu.innerText = "saiu";
  saiu.style.background = "#f478bf";

}  
