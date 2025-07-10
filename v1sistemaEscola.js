let prompt = require('prompt-sync')();
let alunos = [];
let cursos = [];
let opcao;

do{

    opcao = prompt('1 - Cadastrar aluno\n'
         + '2 - Excluir aluno\n' 
         + '3 - cadastrar curso\n' 
         + '4 - Excluir curso\n' 
         + '5 - visualizar Informações\n' 
         + '6 - Matricular aluno em curso\n'
         + '7 - Sair\n\n' 
         + 'Escolha uma opção:\n')

switch(opcao){

    case '1' : 
    let nomeAluno  = prompt('Digite o nome do aluno: ');
    if (nomeAluno && nomeAluno.trim() !== ''){
        alunos.push(( nome = nomeAluno.trim(), curso = null));
    console.log('aluno cadastrado com sucesso!')
    }else{
        console.log('nome inválido.')
    }

    break;

    case '2' :

    let nomeExcluirAluno = prompt("Digite o nome do aluno a ser excluido: ")
    let indexAluno = -1;
    for (let i = 0; i < alunos.length; i++){
        if (alunos[i].nome === nomeExcluirAluno){
            indexAluno = i;
        break;
    }
}
if (indexAluno !== -1) {
    alunos.splice(indexAluno, 1);
    console.log('Aluno excluido com sucesso!')
}else{
    console.log('Aluno não encontrado.');
}
 break;

    case '3' : 

  let nomeCurso  = prompt('Digite o nome do curso: ');
    if (nomeCurso && nomeCurso.trim() !== ''){
       cursos.push(nomeCurso.trim());
    console.log('curso cadastrado com sucesso!')
    }else{
        console.log('nome inválido.')
    }

    
    break;

     case '4' : 

     let nomeExcluirCurso = prompt("Digite o nome do curso a ser excluido: ")
    let indexCurso = -1;
    for (let i = 0; i < curso.length; i++){
        if (curso[i].nome === nomeExcluircurso){
            indexCurso = i;
        break;
    }
}
if (indexCurso !== -1) {
    curso.splice(indexCurso, 1);
    console.log('Curso excluido com sucesso!')
}else{
    console.log('Curso não encontrado.');
}
 break;

      case '5' : 

    let info = "\N Alunos Cadastrados:\n";
    if (alunos.length > 0) {
        for (let i = 0 ; i < alunos.length; i++){
            info += " - " + alunos[i] + "\n"
        }
        
    }else{
        info += "Nenhum aluno cadastrado.\n";
    }
    info += 'cursos cadastrados:\n'
if (cursos.length > 0) {
for (let i = 0; i < cursos.length; i++){
    info += " - " + cursos[i] + "\n";
}
}else{
    info += "Nenhum curso cadastrado.\n"
}
      break;

      case '6':


       case '7' : 

       console.log("Saindo do sistema...")
      
       break; 
    default: 
    console.log("Opção inválida. Tente novamente.");

}
    
}while(opcao != 7)