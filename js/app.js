let qntGamesAlugados = 1
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return')) {
        confirm('Tem certeza que quer devolver o jogo?')
    }

    if (botao.classList.contains('dashboard__item__button--return')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        qntGamesAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        qntGamesAlugados++;
    }
    console.log(`Quantidade de Games Alugados: ${qntGamesAlugados}`);
}