let nome = prompt("Digite seu nome?")

let idade = Number (prompt("Qqual sua idade?"))

idade = Number(idade)

let presenca = confirm("Confirme sua presença")

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof presenca)

console.log("Estudante", nome, "tem", idade, "anos. Presença:", presenca)
// no console.log acima, utilizamos uma forma muito simples para combinar textos com variáveis para fazer a impressão no Console, no entanto ela fica sujeita a erros, espaços indevidos, não é produtiva pois precisamos colocar as aspas duplas em cada palavra ou frase, tendo no meio as variáveis. Já no modelo abaixo, utilizamos o método chamado de "Template String", que gera o mesmo resultado do log acima, mas é bem mais prático, refinado, e não deixa margem para espaços indevidos e neste método podemos evitar as aspas duplas em excesso, bem como aquele monte de vírgulas.
// Ainda sobre o método "Templte String", abrimos e fechamos ele com o sinal de crase, sempre ao lado do número 1 do teclado americano.
// Outro detalhe importante, caso haja um dado tipo Number ou Boolean, no método "Template String" tudo vira dado String. Podemos perceber isso no Console, onde no exemplo acima a idade e o dado boolean True estão na cor azul, já no log abaixo as letras estão todas cinzas. 
console.log(`Estudante ${nome} tem ${idade} anos. Presença: ${presenca}`);

console.log("nome:", typeof nome, ", idade:", typeof idade, ", presença:", typeof presenca)
console.log(`nome: ${typeof nome} / idade: ${typeof idade} / presença: ${typeof presenca}`);
// aqui nos dois logs acima, mais uma comparação entre utilizar e não utilizar o "Template String".


// Outra parte do exercício
const nomeObjeto = prompt("Digite o nome do objeto que a professora pediu pra levar amanhã?")

let tamanho = Number (prompt("Qual é o tamanho deste objeto?"))

let levarParaAula = confirm("Você vai levar este objeto na aula de amanhã?")

console.log("nomeObjeto:", typeof nomeObjeto, ", tamanho:", typeof tamanho, ", levarParaAula:", typeof levarParaAula)

console.log("É verdade que precisamos levar uma", nomeObjeto, "de", tamanho, "cm na aula de amanhã? Resposta:", levarParaAula)
console.log(`É verdade que precisamos levar uma ${nomeObjeto} de ${tamanho} cm na aula de amanhã? Resposta: ${levarParaAula}`);
// aqui nos dois logs acima, mais uma comparação entre utilizar e não utilizar o "Template String".


