document.addEventListener('DOMContentLoaded', function() {
    const botaoAcoes = document.getElementById('continuar');
    botaoAcoes.addEventListener('click', function() {
        const enderecoBitcoin = document.getElementById('enderecos').value;
        const valorEmBitcoin = '0.00000001';
        if (enderecoBitcoin) {
            const uriBitcoin = `bitcoin:${endereçodepagamento}?amount=${0.00000001}`;
            window.location.href = uriBitcoin;

        } else {
            alert('Por favor, digite um endereço Bitcoin válido.');
        }
        window.open('https://www.youtube.com/', '_blank');
        window.location.href = 'html/respaw.html';
    });
});
