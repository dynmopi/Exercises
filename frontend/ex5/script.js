function confirmar(){
    var num1 = window.document.getElementById('num1');
    var num2 = window.document.getElementById('num2');
    var dem = window.document.getElementById('dem');

    var a = Number(num1.value);
    var b = Number(num2.value);
    var media = (a + b)/2
 
    dem.innerHTML = `A media entre ${a} e o ${b} é de ${media}`
}