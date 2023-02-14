window.document.body.onload = function() {
    // vamos chamar a função "soma" com a
    //passagem de números de um array
var numeros = [10, 30, 5, 8, 20];
soma(numeros);

//var valores = prompt("Digite números separados por vírgula");

/*
O comando split aplicado a variavel valores é capaz de quebrar os números digitados
pelo usuário onde há vírgula e assim gerar um array com estes números
*/
// var n = valores.split(",");
// console.log(n)
// var np = [];
// for(var i = 0; i < n.length; i++) {
//     np.push(parseInt(n[i]));
// }
// console.log(np)
// maior(np)
// menor(np)

const inputNome = document.createElement("input");
inputNome.setAttribute("placeholder", "Digite seu nome");
inputNome.onblur = function(){
    inputNome.value = mensagem(inputNome.value)
    console.log(mensagem(inputNome.value))
    window.document.title = mensagem(inputNome.value)
}
window.document.body.appendChild(inputNome);

// var ano = prompt("Digite um ano")
// inputNome.value = anobissexto(ano);
//console.log(Math.round(1 + Math.random() *254))
window.document.body.innerHTML = paletaCores(10, 20)
};

//funções anonimas
const msg = function(nome){
return `Olá sr(a). ${nome}`
};


const anobissexto = function(ano){
    if (ano % 4 == 0){
        return "Ano bissexto"
    } else {
        return "Ano não bissexto"
    }
}

const paletaCores = function(linha, coluna){

    var tabela = "<table>"

    for(var lin = 0 ; lin < linha ; lin++){
    tabela+="<tr>";
    for(var col = 0 ; col < coluna ; col++){
            var red = Math.round(1 + Math.random() *254);
            var green = Math.round(1 + Math.random() *254);
            var blue = Math.round(1 + Math.random() *254);
            tabela += `<td style ='background-color:rgb(${red}, ${green}, ${blue})'>__</td>)`
    }
    tabela += "</tr>"
}
return tabela
}