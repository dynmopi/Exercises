function confirmar(){
    var dem = window.document.getElementById('dem')
    var num = window.document.getElementById('input')
    var n = Number(num.value)


    if (n<0){
        //transformações para modulo
        var p = n - n - n //modulo de um numero
        window.alert(`Considerando o ${n} para ${p}`)
        window.alert(`[ATENÇÃO] Não existe distância negativa!`)
        var km = p/1000
        var hm = p/100
        var dam = p/10
        var dm = p*10
        var cm = p*100
        var mm = p*1000
        dem.innerHTML = `A distância de ${p}m em módulo corresponde a:<br>`
        dem.innerHTML += `${km}Km<br>`
        dem.innerHTML += `${hm}Hm<br>`
        dem.innerHTML += `${dam}Dam<br>`
        dem.innerHTML += `${dm}Dm<br>`
        dem.innerHTML += `${cm}Cm<br>`
        dem.innerHTML += `${mm}Mm<br>`   
    }else{
    //transformações
    var km = n/1000
    var hm = n/100
    var dam = n/10
    var dm = n*10
    var cm = n*100
    var mm = n*1000


    dem.innerHTML = `A distância de ${n}m corresponde a:<br>`
    dem.innerHTML += `${km}Km<br>`
    dem.innerHTML += `${hm}Hm<br>`
    dem.innerHTML += `${dam}Dam<br>`
    dem.innerHTML += `${dm}Dm<br>`
    dem.innerHTML += `${cm}Cm<br>`
    dem.innerHTML += `${mm}Mm<br>`   
    } 
}




/* Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm*/