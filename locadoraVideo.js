let prompt = require('prompt-sync')();
let senhaCorreta = "video"; 
let tentativasSenha = 0; 


while (tentativasSenha < 3) {
  let senhaDigitada = prompt("Digite a senha para acessar o sistema: ");

  if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta! Acesso concedido.");
    break; 
  } else {
    tentativasSenha++; 
    
    console.log(
      "Senha incorreta. Tentativas restantes: " + (3 - tentativasSenha)
    );
  }
}


if (tentativasSenha === 3) {
  console.log("Acesso não autorizado. Você excedeu o número de tentativas.");
  process.exit(); 
}
console.log('Login realizado com sucesso!\n');

let cliente = [];
let filmes = [];
let catologoF = {}
let genero
let opcao;

//----->Funções<-----\\

function cadastroCliente(){
    let nomeCliente  = prompt('Digite o nome do cliente: ');
    if (nomeCliente && nomeCliente.trim() !== ''){
        cliente.push(( nome = nomeCliente.trim(), filmes = null));
    console.log('Cliente cadastrado com sucesso!')
    }else{
        console.log('nome inválido.')
    }
}
function excluirCliente(){
let nomeExcluirCliente = prompt("Digite o nome do cliente a ser excluido: ")
    let indexCliente = -1;
    for (let i = 0; i < cliente.length; i++){
        if (cliente[i].nome === nomeExcluirCliente){
            indexCliente = i;
        break;
    }
}
if (indexCliente !== -1) {
    cliente.splice(indexCliente, 1);
    console.log('Cliente excluido com sucesso!')
}else{
    console.log('Cliente não encontrado.');
}
}
function cadastrarFilme(){
    let novoFilme = []
    novoFilme = prompt('Digite o nome do novo Filme: ');

    if (novoFilme && novoFilme.trim() !== ''){
       filmes.push(novoFilme.trim());
    console.log('Filme cadastrado com sucesso!')
    }else{
        console.log('erro')
    }

    
    
}
function excluirFilme(){
     let nomeExcluirFilme = prompt("Digite o nome do Filme a ser excluido: ")
    let indexFilme = -1;
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].nome === nomeExcluirFilme){
            indexFilme = i;
        break;
    }
}
if (indexFilme !== -1) {
    filmes.splice(indexFilme, 1);
    console.log('Filme excluido com sucesso!')
}else{
    console.log('Filme não encontrado.');
}
}

function visualizar(){
      let info = "\N Clientes Cadastrados:\n";
    if (cliente.length > 0) {
        let filmes;
        if (cliente[i].filmes) {
            filmes = cliente[1].filmes;
        }else{
            filmes = "Não adicionado";
            
        }
        
        console.log( "- " + cliente[1].nome + " (Filme alugado: " + filmes )

    }else{
        console.log( "Nenhum cliente cadastrado.\n");
    }
     console.log('filmes cadastrados:\n')
if (filmes.length > 0) {
for (let i = 0; i < filmes.length; i++){
    console.log("- " + filmes[i]);
}
}else{
    console.log("Nenhum filme cadastrado.\n")
}
}
function lincarClienteFilmes(){
if (cliente.length === 0 || filmes.length === 0) {
    console.log("É necessário ter clientes e filmes cadastrados")
    }
    let nomeListaPagamen = prompt("Digite o nome do Cliente para a lista")
    let cliente = null;
    for (let i = 0; i < cliente.length; i++){ 
        if (cliente[i].nome === nomeListaPagamen) {
            cliente = cliente[i];
            break;
        }
    }
}
