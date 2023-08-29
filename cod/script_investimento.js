
function mensagem_montante(form) {
    var area = calcula_montante(form);
    window.alert('o resultado e: ' + area)
}


function calcula_montante(form) {
    var montante = eval(form.capital.value) * (eval(1 + form.juros.value) ** eval(form.tempo.value))
    return montante;
}



