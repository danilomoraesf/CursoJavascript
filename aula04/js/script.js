// Comparação entre variável e array, como obter dados de uma variável e um array.

var nome = "Pedro,Paulo"

console.log(nome);
// exibir apenas o Paulo
console.log(nome.substring(6,11));

const nomes = [
    "Pedro",
    "Paulo"
]
// criando arrays para nomes

console.log(nomes);
console.log(nomes[1]);
// imprimindo apenas 1 item do array

//vamos adicionar mais nomes ao array
//usaremos o comando push

nomes.push("Roberto");
console.log(nomes);

// para exibir o último nome:
console.log(nomes[nomes.length-1])
console.log(nomes.length) // isso aqui é pra saber quantos elementos tem

//adicionar mais nomes
nomes.push("Vanessa");
console.log(nomes)

console.log("-----------");
// vamos criar 2 objetos de produto de informática
prod1 = {
nome:"Mouse",
marca: "Microsoft",
preco: 150.00
};

prod2 = {
nome: "Teclado",
marca: "Microsoft",
preco: 180.00
};

const produtos = [
    prod1, prod2
]

console.log(produtos)
console.log(produtos[0])
console.log(produtos[0].marca) // Nesse caso pega apenas uma propriedade dentro da Array

console.log(prod1)

console.log("-----------");

var clientes = [
    {
        nome: "Danilo",
        idade: 27,
        cidade: "SP"
    },
    {
        nome: "Sabrina",
        idade: 26,
        cidade: "SSA"
    }
 
]

console.log(clientes)
// vamos adicionar um novo cliente (objeto)
clientes.push({
    nome: "Guilherme",
    idade: 28,
    cidade: "SP"
})

// exibir os produtos nas divs no navegador

var pnome = produtos[0].nome;
var pmarca = produtos[0].marca;
var ppreco = produtos[0].preco;

// document.getElementById("produto1").innerHTML = pnome;
// document.getElementById("produto1").innerHTML += pmarca;
// document.getElementById("produto1").innerHTML += ppreco;


// criando constante para exibir os dados do produto na div
const saida = "<h2>"+pnome+"</h2><p class='m'>"+pmarca+"</p><p class='p'>"+ppreco+"</p>";
document.getElementById("produto1").innerHTML = saida;

const saida2 = `<h2>${produtos[1].nome}</h2>
<p class='m'>${produtos[1].marca}</p>
<p class='p'> ${produtos[1].preco}</p>`

document.getElementById("produto2").innerHTML = saida2