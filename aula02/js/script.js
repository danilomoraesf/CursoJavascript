// Arquivo de script para a função olá

function ola(){
    alert(`Olá Mundo!`)
}

/* 
Dentro da página HTML terá um botão com ID chamado bntClick.
Ao clicar neste botão será chamada a função ola;
Que executa uma mensagem alert.
*/
// document.getElementById(`btnClick`).onclick = ola;

// Declaração de variáveis

var nome;
var numero1, numero2;
var resultado;

nome = ``;
numero1 = 0;
numero2 = 0;
resultado = 0;

numero1 = prompt("Digite um valor");
numero2 = prompt("Digite outro valor");
resultado = numero1 * numero2;
console.log(`A múltiplicação entre ${numero1} e ${numero2} é igual a ${resultado}`);

console.log(`A múltiplicação entre %d e %d é %d`, numero1, numero2, resultado);