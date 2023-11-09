const nome = document.getElementById('nome');
const botao = document.getElementById('calcular');

function calcularImc() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let faixa = "Normal";

    if (isNaN(altura) || isNaN(peso)) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
    } else {
        let imc = (peso / (altura ** 2)).toFixed(2);
        if (!isNaN(imc)) {
            if (imc < 18.5) {
                faixa = "Abaixo do Peso Normal.";
            } else if (imc >= 18.5 && imc <= 24.9) {
                faixa = "Normal.";
            } else if (imc >= 25 && imc <= 29.9) {
                faixa = "Sobrepeso.";
            } else if (imc >= 30 && imc <= 34.9) {
                faixa = "Obesidade Classe I.";
            } else if (imc >= 35 && imc <= 39.9) {
                faixa = "Obesidade Classe II.";
            } else if (imc >= 40) {
                faixa = "Obesidade Classe III Procure um médico!";
            }
            document.getElementById('resultado').textContent = `Seu IMC é ${imc} e você é considerado ${faixa}`;
        } 
    }
    return;
}

botao.addEventListener("click", calcularImc);