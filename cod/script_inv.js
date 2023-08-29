
function reverseString(form) {
    // Passo 1. Use o método split() para retornar um novo array
    var splitString = eval(form.campo1.value.split("")); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Passo 2. Use o método reverse() para inverter o array recém-criado
    var reverseArray = eval(splitString.reverse()); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Passo 3. Use o método join() para unir todos os elementos do array em uma string
    var joinArray = eval(reverseArray.join("")); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    // Passo 4. Retorne a string invertida
    window.alert('o resultado e: ' + joinArray)
}