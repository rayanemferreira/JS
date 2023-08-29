

function mostra_quant_vorgal(form) {
    var area = countVorgal(form);
    window.alert('o resultado e: ' + area)
}
function countVorgal(form) {
    var cont = 0
    for (var i = 0; i < form.palavra.value.length; i++) {
        if (form.palavra.value === form.letra.value) {
            cont++
        }
    }
    return cont;
}

