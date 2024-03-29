// variaveis
const buttonCalcular = document.getElementById('calcular');
const buttonLimpar = document.getElementById('limpar');
const buttonvoltar = document.getElementById('buttonVoltar');
const valorImc = document.querySelector('#valor-imc');
const textoResultado = document.querySelector('#resultado');

// functions
function adicionarCoresETexto(status, texto) {
    document.getElementById('valor-imc').classList.add(status);
    document.getElementById('resultado').classList.add(status);
    textoResultado.innerText = texto;
}

function esconderOuMostrar() {
    document.getElementById('content-section').classList.toggle('hidden');
    document.getElementById('section-resultado').classList.toggle('hidden');
}

function validarDigitos(text) {
    return text.replace(/[^0-9,.]/g, "");
}

function calcularImc(peso, altura) {
    peso = parseFloat(peso.replace(',', '.'));
    altura = parseFloat(altura.replace(',', '.'));
    if (!peso || !altura) return;
    let imc = (peso / (altura * altura)).toFixed(2);
    return parseFloat(imc);
};

// actions

document.getElementById('peso').addEventListener('input', function(e) {
    this.value = validarDigitos(this.value);
});

document.getElementById('altura').addEventListener('input', function(e) {
    this.value = validarDigitos(this.value);
});

buttonCalcular.addEventListener('click', function(event) {
    event.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = calcularImc(peso, altura);
    valorImc.innerText = imc.toString().replace('.', ',');

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
    valorImc.classList = '';
    textoResultado.classList = '';
    esconderOuMostrar();
});