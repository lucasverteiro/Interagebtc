let tempoRestante = 15;
const elementoContador = document.getElementById('contador');
function atualizarContador() {
    tempoRestante--;
    elementoContador.textContent = tempoRestante;
    if (tempoRestante <= 0) {
        clearInterval(temporizador);
        window.location.href = '../index.html';
    }
}

const temporizador = setInterval(atualizarContador, 1000)