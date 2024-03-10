function verificarPassword() {
    const valorSelect1 = parseInt(document.getElementById('select1').value);
    const valorSelect2 = parseInt(document.getElementById('select2').value);
    const valorSelect3 = parseInt(document.getElementById('select3').value);
    const resultadoParrafo = document.getElementById('resultado');

    if (valorSelect1 === 9 && valorSelect2 === 1 && valorSelect3 === 1) {
        resultadoParrafo.textContent = 'Password 1 es correcto.';
    } else if (valorSelect1 === 7 && valorSelect2 === 1 && valorSelect3 === 4) {
        resultadoParrafo.textContent = 'Password 2 es correcto.';
    } else {
        resultadoParrafo.textContent = 'Password incorrecto.';
    }
}