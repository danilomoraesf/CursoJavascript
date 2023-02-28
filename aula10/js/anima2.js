fundo.onclick = ()=>{
    fundo.style.backgroundColor = "rgba(0,0,0,0.5)"
    tela.style.top = "0px"
}

document.querySelector("#fechar").onclick = ()=>{
    fundo.style.backgroundColor = "rgba(0,0,0,0)"
    tela.style.top = "-600px"
}

fechar.onclick = ()=>{
    console.log("fechou")
    fundo.style.backgroundColor = "rgba(0,0,0,0)"
    tela.style.top = "-600px"
}

console.log(window.screen.width)