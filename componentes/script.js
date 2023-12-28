async function obterMensagemAleatoria() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        const idElemento = document.getElementById('id');
        const mensagemElemento = document.getElementById('advice');

        idElemento.textContent = `Advice #${data.slip.id}`;
        mensagemElemento.textContent = data.slip.advice;
    } catch (error) {
        console.error('Erro ao obter mensagens:', error);
    }
}

document.getElementById('botao').addEventListener('click', obterMensagemAleatoria);

obterMensagemAleatoria();