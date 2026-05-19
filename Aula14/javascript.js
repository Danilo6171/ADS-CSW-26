function calcularIdade(){
    const anoDigitado = document.getElementById('inputAno').value;

    const anoAtual = new Date().getFullYear();

    const idade = anoAtual - anoDigitado;
    document.getElementById('resultado').innerHTML = `A sua idade é: ${idade} anos.`;
}