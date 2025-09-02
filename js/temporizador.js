let tempoRestante = 15;
const elementoContador = document.getElementById('contador');
function atualizarContador() {
    tempoRestante--;
    elementoContador.textContent = tempoRestante;
    if (tempoRestante <= 0) {
        clearInterval(temporizador);
        window.open('../index.html', '_blank');
        window.close();
    }
}

const temporizador = setInterval(atualizarContador, 1000)