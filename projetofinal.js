
//Projeto Desafio final
/*Infelizmente não tive tempo suficiente para fazer todo o projeto em tempo hábil :-(
Foi o que pude fazer hoje 28/11/2021 até as 22h. De qualquer forma o curso foi muito produtivo. Obrigado!*/

class Curso{
constructor(id, titulo, descrição, imagem, professor, lista){
this._id = id;
this._titulo = titulo;
this._descrição = descrição;
this._imagem = imagem;
this._professor = professor;
this._lista = lista;
this._date = Date();
}
//Definindo o Getters
get id () {
return this._id;
}
get titulo () {
return this._titulo;
}
get descrição () {
return this._descrição;
}
get imagem () {
return this._imagem;
}
get professor () {
return this._professor;
}
get lista () {
return this._lista;
}
get dataCriação () {
return this._date;
}

get exibirCurso(){
let exbirCurso = [this._id,this._titulo,this._descrição,this._imagem,this._professor,this._lista, this._date]

exbirCurso.forEach(function(item){
console.log(`${item}`);
})
}

//Definindo os Setters
set id (id){
this._id = id;
}
set titulo (titulo){
this._titulo = titulo;
}
set descrição (descrição){
this._descrição = descrição;
}
set imagem (imagem){
this._imagem = imagem;
}
set professor (professor){
this._professor = professor;
}
set lista (lista){
this._lista = lista;
}
set dataCriação (date){
this._date = date;
}

}

var Cursos= [];
//console.log(Cursos[1])
function criaCurso() {

alert('Vamos adicionar um curso: ');

let id = prompt('Favor inserir ID: ');
let titulo = prompt('Favor inserir titulo: ');
let descrição = prompt('Favor inserir descrição: ');
let imagem = prompt('Favor inserir caminho da imagem: ');
let professor = prompt('Favor inserir o nome do professor: ');
let lista = prompt('Favor inserir a lista de aulas: ');

let novoCurso = new Curso(id, titulo, descrição, imagem, professor, lista);

/*let novoCurso = new Curso('3', 'titulo', 'descrição', 'imagem', 'professor', 'lista');
let novoCurso2 = new Curso('5', 'titulo5', 'descrição5', 'imagem5', 'professor5', 'lista5');*/

Cursos.push(novoCurso);
//Cursos.push(novoCurso2);
return Cursos;
}

function listaCursos(){

return Cursos.forEach(function (item) {
  console.log(item.exibirCurso);
})

}

function atualizarCurso(){
let id = prompt('Favor informe o ID do Curso a ser atualizado: ')
let atl = Cursos.indexOf(Cursos.find(ids  = (el,i, Cursos) => el.id === id));
let prop = prompt('Favor informe o novo ID do Curso a ser atualizado: ');
console.log(atl);
//console.log(prop);
Cursos[atl].id = prop.toString();
prop = prompt('Favor informe o novo titulo do Curso a ser atualizado: ');
Cursos[atl].titulo = prop;
prop = prompt('Favor informe a nova Descricao do Curso a ser atualizado: ');
Cursos[atl].descrição = prop;
prop = prompt('Favor informe o novo caminho para a imagem do Curso a ser atualizado: ');
Cursos[atl].imagem = prop;
prop = prompt('Favor informe o novo professor do Curso a ser atualizado: ');
Cursos[atl].professor = prop;
prop = prompt('Favor informe o novo link para a lista de aulas do Curso a ser atualizado: ');
Cursos[atl].lista = prop;
}


function deletarCurso(){

let id = prompt('Favor informe o ID do Curso a ser deletado: ')
let del = Cursos.indexOf(Cursos.find(ids  = (el,i, Cursos) => el.id === id));

Cursos.splice(del, 1);
return console.log('Curso deletado com sucesso');
}

var sair = '';
while (sair != 'sair'){
let escolha = prompt ('Qual operação você deseja efetuar na aplicação Cursos? Criar, Listar, Atualizar ou Deletar. Escolha "Sair" para finalizar. Escreva abaixo: ');

console.log(escolha);

switch(escolha){
case 'Criar':
criaCurso();
console.log('Curso criado com sucesso!');
break;
case 'Listar':
listaCursos();
break;
case 'Atualizar':
atualizarCurso();
break;
case 'Deletar':
deletarCurso();
break;
default: 
alert('Você não escolheu uma opção válida.')
}
sair = escolha;
}
//criaCurso();
//listaCursos();
//Cursos[1].titulo = "ola mundo";
//atualizarCurso();
//listaCursos();
//deletarCurso();
//Cursos.pop();

//console.log(Cursos[1].titulo);

/*Cursos.forEach(function (item) {
  console.log(item.exibirCurso);
})*/

//let testeCurso2 = new Curso(2,'meuTitulo2','MinhaDescriçã//o2', 'minhaimagem2', 'meuprofessor2', 'minha lista2', 23//-03-85)

//console.log(testeCurso2.ExibirCurso)

 b = JSON.stringify(Cursos);
 sessionStorage.setItem('chave', b);
 var c = JSON.parse(sessionStorage.getItem('chave'));
 //console.info(c);
 listaCursos();