
let segundos = 15;
const temporizadorElemento = document.getElementById('temporizador')
function atualizarTemporizador() {
    temporizadorElemento.textContent = segundos;
    segundos--;
    if (segundos < 0) {
        window.history.back();
    } else {
        setTimeout(atualizarTemporizador,1000)
    }
}

atualizarTemporizador();

function clicar(){
    var eml = window.document.getElementById('email')
    if (eml) {
        console.open("https://lucasverteiro.github.io/Interagebtc")
    } else {
        
    }
}

var end = window.document.getElementById('endereço')
eml.addEventListener('click', clicar)
