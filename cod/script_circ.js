function mensagem(form) {
    window.alert('o resultado e: ' + calculaPerimetro(form))
}

function calculaPerimetro(form) {
    return eval(form.campo1.value) * 3.14 * 2;
}


function mens2(form) {
    var area = calculaArea(form);
    window.alert('o resultado e: ' + area)
}


function calculaArea(form) {
    return eval(form.campo1.value) * (form.campo1.value) * 3.14;
}
