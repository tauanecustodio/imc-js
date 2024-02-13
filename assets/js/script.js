const buttonCalcular = document.getElementById('calcular');
const buttonLimpar = document.getElementById('limpar');
const buttonvoltar = document.getElementById('buttonVoltar');

function adicionarCoresETexto(status, texto) {
    const textoResultado = document.querySelector('#resultado');

    document.getElementById('valor-imc').classList.add(status);
    document.getElementById('resultado').classList.add(status);
    textoResultado.innerText = texto;
}

function esconderOuMostrar() {
    document.getElementById('content-section').classList.toggle('hidden')
    document.getElementById('section-resultado').classList.toggle('hidden');
}

buttonCalcular.addEventListener('click', function(event) {
    event.preventDefault();
    
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const valorImc = document.querySelector('#valor-imc');
    
    if (!peso || !altura) return;

    let imc = (peso / altura ** 2).toFixed(2);
    
    valorImc.innerText = imc.replace('.', ',');

    if (imc < 18.5) {
        adicionarCoresETexto('low', 'Abaixo do peso');}
    else if (imc >= 18.5 && imc < 24.9) {
        adicionarCoresETexto('good', 'Peso normal');}
    else if (imc >= 25 && imc < 29.9) {
        adicionarCoresETexto('low', 'Excesso de peso');}
    else if (imc >= 30 && imc < 34.9) {
        adicionarCoresETexto('high', 'Obesidade classe I');}
    else if (imc >= 35 && imc < 39.9) {
        adicionarCoresETexto('high', 'Obesidade classe II');}
    else if (imc > 40) {
        adicionarCoresETexto('high', 'Obesidade classe III');}

    esconderOuMostrar();
})

buttonLimpar.addEventListener('click', function() {
    peso.value = "";
    altura.value = "";
});

buttonvoltar.addEventListener('click', function() {
    esconderOuMostrar();
    document.getElementById('valor-imc').classList = '';
    document.getElementById('resultado').classList = '';
})

// assistir minuto 36 e adicionar função que verifica os caracteres digitados
