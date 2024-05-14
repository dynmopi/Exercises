function confirmar(){
    var num1 = window.document.getElementById('num1');
    var num2 = window.document.getElementById('num2');
    var dem = window.document.querySelector('div#dem')

    var a = Number(num1.value)
    var b = Number(num2.value)
    var s = a + b
    
    dem.innerHTML = ''
    if (num1.value.length == 0 || num2.value.length == 0 ){
        alert('[ERRO] Certifique as caixas novamente!')
    }else{
        dem.innerHTML = `A soma entre ${num1.value} e ${num2.value} é ${s}`
    }

}