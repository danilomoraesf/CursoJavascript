// função que não retorna
function soma(array_numeros){
var rs = 0;
for (var i = 0 ; i < array_numeros.length ; i++){
    rs += array_numeros[i];
}
console.log(rs);
}

function maior(array_numeros){
var m = array_numeros[0];
for (var i = 1 ; i < array_numeros.length ; i++){
    if(array_numeros[i] > m){
        m = array_numeros[i];
    }
}
console.log(m)
}

function menor(array_numeros){
    var m = array_numeros[0];
    for (var i = 1 ; i < array_numeros.length ; i++){
        if(array_numeros[i] > m){
            m = array_numeros[i];
        }
    }
    console.log(m);
}

// funções com retorno
function mensagem(nome){
    return `Olá Sr. ${nome}`
}

const paletaCores = function(linha, coluna){

    var tabela = "<table>"

    for(var lin = 0 ; lin < linha ; lin++){
    tabela+="<tr>";
    for(var col = 0 ; col < coluna ; col++){
            var red = Math.round(1 + Math.random() *254);
            var green = Math.round(1 + Math.random() *254);
            var blue = Math.round(1 + Math.random() *254);
            tabela += `<td onclick = mudar('rgb(${red},${green},${blue})') style ='background-color:rgb(${red},${green},${blue})'>__</td>`
    }
    tabela += "</tr>"
}
return tabela
}

function mudar(cor){                                                                            
   console.log(cor)
    window.document.body.style.backgroundColor = cor;
}