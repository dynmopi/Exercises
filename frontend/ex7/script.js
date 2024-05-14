function confirmar(){
    var num = window.document.querySelector('input#input');
    var a = Number(num.value);
    var dem = window.document.getElementById('dem')

    if (a == 0){
        alert("Conquista desbloqueada: Curioso")
    }

    
        var dobro = a * 2
        var terca = a / 3

        var tercarrend = terca.toFixed(2)

        dem.innerHTML = `O dobro de ${a} é ${dobro}`
        dem.innerHTML += `<br> A terça parte de ${a} é ${tercarrend}`


}