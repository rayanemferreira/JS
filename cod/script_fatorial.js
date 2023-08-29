
function mensagem_fatorial(form) {
    var area = calcula_fatorial(form);
    window.alert('o fatorial e: ' + area)
}


function calcula_fatorial(form) {
    var result = eval(form.campo1.value)

    if (eval(form.campo1.value) === 0 || eval(form.campo1.value) === 1)
        return 1;
    while (eval(form.campo1.value) > 1) {
        form.campo1.value--;
        result = result * eval(form.campo1.value);

    }


    return result;


}

