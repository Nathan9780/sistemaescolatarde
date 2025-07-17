let prompt = require('prompt-sync')();

let senhaCorreta = "video"; 
let tentativasSenha = 0; 

// ======== sistema de senhas ========
while (tentativasSenha < 3) {
  let senhaDigitada = prompt("Digite a senha para acessar o sistema: ");

  if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta! Acesso concedido.\n");
    break;
  } else {
    tentativasSenha++; 
    console.log("Senha incorreta. Tentativas restantes: " + (3 - tentativasSenha));
  }
}

if (tentativasSenha === 3) {
  console.log("Acesso não autorizado. Você excedeu o número de tentativas.");
  process.exit(); 
}


let cliente = [];
let filmes = [];
let opcao;

// ======== Funções ========

function cadastroCliente() {
  let nomeCliente = prompt('Digite o nome do cliente: ');
  if (nomeCliente && nomeCliente.trim() !== '') {
    cliente.push({ nome: nomeCliente.trim(), filmes: null });
    console.log('Cliente cadastrado com sucesso!');
  } else {
    console.log('Nome inválido.');
  }
}

function excluirCliente() {
  let nomeExcluirCliente = prompt("Digite o nome do cliente a ser excluído: ");
  let indexCliente = -1;

  for (let i = 0; i < cliente.length; i++) {
    if (cliente[i].nome === nomeExcluirCliente) {
      indexCliente = i;
      break;
    }
  }

  if (indexCliente !== -1) {
    cliente.splice(indexCliente, 1);
    console.log('Cliente excluído com sucesso!');
  } else {
    console.log('Cliente não encontrado.');
  }
}

function cadastrarFilme() {
  let novoFilme = prompt('Digite o nome do novo filme: ');
  if (novoFilme && novoFilme.trim() !== '') {
    filmes.push(novoFilme.trim());
    console.log('Filme cadastrado com sucesso!');
  } else {
    console.log('Nome do filme inválido.');
  }
}

function excluirFilme() {
  let nomeExcluirFilme = prompt("Digite o nome do filme a ser excluído: ");
  let indexFilme = -1;

  for (let i = 0; i < filmes.length; i++) {
    if (filmes[i] === nomeExcluirFilme) {
      indexFilme = i;
      break;
    }
  }

  if (indexFilme !== -1) {
    filmes.splice(indexFilme, 1);
    console.log('Filme excluído com sucesso!');
  } else {
    console.log('Filme não encontrado.');
  }
}

function visualizar() {
  console.log("\nClientes Cadastrados:");
  if (cliente.length > 0) {
    for (let i = 0; i < cliente.length; i++) {
      let filmesAlugados = cliente[i].filmes || "Não adicionado";
      console.log("- " + cliente[i].nome + " (Filme alugado: " + filmesAlugados + ")");
    }
  } else {
    console.log("Nenhum cliente cadastrado.");
  }

  console.log('\nFilmes Cadastrados:');
  if (filmes.length > 0) {
    for (let i = 0; i < filmes.length; i++) {
      console.log("- " + filmes[i]);
    }
  } else {
    console.log("Nenhum filme cadastrado.");
  }
}

function lincarClienteFilmes() {
  if (cliente.length === 0 || filmes.length === 0) {
    console.log("É necessário ter clientes e filmes cadastrados.");
    return;
  }

  let nomeCliente = prompt("Digite o nome do cliente para vincular o filme: ");
  let clienteEncontrado = null;

  for (let i = 0; i < cliente.length; i++) {
    if (cliente[i].nome === nomeCliente) {
      clienteEncontrado = cliente[i];
      break;
    }
  }

  if (!clienteEncontrado) {
    console.log("Cliente não encontrado.");
    return;
  }

  console.log("Filmes disponíveis:");
  for (let i = 0; i < filmes.length; i++) {
    console.log(i + " - " + filmes[i]);
  }

  let indexFilme = parseInt(prompt("Digite o número do filme a ser alugado: "));
  if (!isNaN(indexFilme) && indexFilme >= 0 && indexFilme < filmes.length) {
    clienteEncontrado.filmes = filmes[indexFilme];
    console.log("Filme vinculado ao cliente com sucesso.");
  } else {
    console.log("Índice do filme inválido.");
  }
}

// ======== Menu ========
do {
  console.log("\nMenu:");
  console.log("1 - Cadastrar cliente");
  console.log("2 - Excluir cliente");
  console.log("3 - Cadastrar filme");
  console.log("4 - Excluir filme");
  console.log("5 - Visualizar dados");
  console.log("6 - Lincar cliente com filme");
  console.log("0 - Sair");

  opcao = prompt("Digite a opção desejada: ");

  switch(opcao){
    case '1':
      cadastroCliente();
      break;
    case '2':
      excluirCliente();
      break;
    case '3':
      cadastrarFilme();
      break;
    case '4':
      excluirFilme();
      break;
    case '5':
      visualizar();
      break;
    case '6':
      lincarClienteFilmes();
      break;
    case '0':
      console.log("Saindo do sistema...");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }

} while (opcao !== '0');
