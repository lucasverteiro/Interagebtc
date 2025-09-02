document.addEventListener('DOMContentLoaded', function() {
    const botaoAcoes = document.getElementById('continuar');
    botaoAcoes.addEventListener('click', function() {
        window.open('https://www.youtube.com/', '_blank');
        window.location.href = '../html/respaw.html';
    });
});
