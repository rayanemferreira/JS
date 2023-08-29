function contagem(){
    let saida = document. getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    let cont = 0 
    while(cont<=num){
        saida.innerHTML += `${cont} <br>`
    
        cont ++

    }
}