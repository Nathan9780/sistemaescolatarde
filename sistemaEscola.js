let prompt = require('prompt-sync')();
let alunos = [];
let opcao;

do{

    opcao = prompt('1 - Cadastrar aluno\n'
         + '2 - Excluir aluno\n' 
         + '3 - Rélatorio aluno\n' 
         + '4 - Sair Sistema\n')

switch(opcao){
    case '1' : 
    let nomeAluno  = prompt('Digite o nome do aluno: ');
    if (nomeAluno !== null && nomeAluno.trim() !== '')
        alunos.push(nomeAluno.trim());
    

    break;
    case '2' :

console.log(alunos.length)

    break;
    case '3' : 
    let info = ('alunos cadastrados:\n')
    if (alunos.length > 0){
        for (let i=0; i<alunos.length; i++)

        {
          info += "-" + alunos[i] + "\n";
           

        } 
    }else{
        info = 'Nenhum aluno cadatrado'


    }
    console.log(info);
    
    break;
    default: ;
}
    
}while(opcao != 4)