function troca(){
var imagem = document.getElementById("foto").src;

console.log(imagem);

//Vamos pegar a quantidade de caracteres da variável imagem com o comando length;
console.log(imagem.length);

//Vamos utilizar o comando substring para obter um trecho de texto do caminho do nome do arquivo;
console.log(imagem.substring(imagem.length - 13, imagem.length))

var rsimg = imagem.substring(imagem.length - 13, imagem.length)

rsimg = rsimg == "img/foto1.jpg" ? "img/foto2.jpg" : "img/foto1.jpg";

document.getElementById("foto").src = rsimg;
console.log(rsimg);
}
// No caso acima podemos fazer com vários eventos (além do onclick, onmouseover, onmouseout etc)

function infoData(){
    //Faremos uma instância da classe Date(). Esta classe possui muitas funções, tais como: getHours, getDate, getMouth etc
    const tempo = new Date();
    var datacompleta = tempo.toLocaleDateString();
    var diames = tempo.getDate();
    var diasemana = tempo.getDay();
    var mes = tempo.getMonth();
    var hora = tempo.getHours();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();


    // Desvio de fluxo múltiplo com switch case

    var dias = "";
    switch(diasemana){
        case 0:
            dias ="domingo";
        break;
        case 1:
            dias ="segunda-feira";
        break;
        case 2:
            dias ="terça-feira";
        break;
        case 3:
            dias ="quarta-feira";
        break;
        case 4:
            dias ="quinta-feira";
        break;
        case 5:
            dias ="sexta-feira";
        break;
        case 6:
            dias ="sábado-feira";   
        break;
        default: alert("Esse dia da semana não existe");
    }
    

switch(mes){
    case 0:
        m ="janeiro";
    break;
    case 1:
        m ="fevereiro";
    break;
    case 2:
        m ="março";
    break;
    case 3:
        m ="abril";
    break;
    case 4:
        m ="maio";
    break;
    case 5:
        m ="junho";
    break;
    case 6:
        m ="julho";
    break;
    case 7:
        m ="agosto";
    break;
    case 8:
        m ="setembro";
    break;
    case 9:
        m ="outubro";
    break;
    case 10:
        m ="novembro";
    break;
    case 11:
        m ="dezembro";
    break;
}

    console.log("hoje é %d de %s O dia da semana é %s", diames, m, dias);
    console.log(datacompleta);
}