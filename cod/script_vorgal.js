

function mostra_quant_vorgal(form) {
    var area = countVorgal(form);
    window.alert('o resultado e: ' + area)
}
function countVorgal(form) {
    
    var c = form.campo1.value.match(/[aeiou]/gi);
    if (c === null) {
        return 0
    }
    else {
        return c.length
    }

}


