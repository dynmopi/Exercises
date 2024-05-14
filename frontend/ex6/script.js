function confirmar(){
    var num = window.document.getElementById('input');
    var dem = window.document.querySelector('div#dem');
    var a = Number(num.value);

    dem.innerHTML = ''
    if (num.value.length == 0){
        alert('Considerando o valor 0')
        var a = 0
    }


    if (a % 1 == 0){
        var sucessor = a + 1
        var antecessor = a - 1  
    
        dem.innerHTML = `O sucessor de ${a} é ${sucessor}`
        dem.innerHTML += `<br> O antecessor de ${a} e ${antecessor}`
    } else{
        alert(`[ERRO] Não existe sucessor ou antecessor de números decimais!`)
    }

}