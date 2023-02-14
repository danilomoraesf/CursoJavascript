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

