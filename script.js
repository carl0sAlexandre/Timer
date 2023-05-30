const retomar = document.querySelector(".botao_retomar")
const pausar = document.querySelector(".botao_pausar")

let min = 1
let totalSegundos = min * 60
let seg = totalSegundos

function temporizador(minutos,segundos) {

    const exibirMinutos = minutos < 10 ? "0" + minutos : minutos;
    const exibirSegundos = segundos < 10 ? "0" + segundos : segundos;
    
    const minutos1 = document.querySelector(".minutos")
    const segundos1 = document.querySelector(".segundos")

    minutos1.innerHTML = exibirMinutos
    segundos1.innerHTML = exibirSegundos
}

const exibirTempo = setInterval( function tempo(){

    if(seg <= 0){
        temporizador(0,0)
        return
    }

    const contagemMinutos = parseInt(seg / 60) 
    const contagemSegundos = parseInt(seg % 60)
    temporizador (contagemMinutos,contagemSegundos)
    seg -- 
    
}, 1000);

pausar.addEventListener("click", function(){
    clearInterval(exibirTempo)
})


retomar.addEventListener("click", function(){

    const exibirTempo2 = setInterval(function tempo(){
        if(seg <= 0){
            temporizador(0,0)
            return
        }
    
        const contagemMinutos = parseInt(seg / 60) 
        const contagemSegundos = parseInt(seg % 60)
        temporizador (contagemMinutos,contagemSegundos)
        seg --
    
        
        
    }, 1000)

    pausar.addEventListener("click", function(){
        clearInterval(exibirTempo2)
    })
})

