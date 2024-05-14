function confirmar(){
    var larg = window.document.getElementById('largtxt')
    var alt = window.document.getElementById('alttxt')
    var dem = window.document.getElementById('dem')
    var l = Number(larg.value)
    var a = Number(alt.value)
    dem.innerHTML = ('')

    if(l < 0 || a < 0){
        window.alert(`Por favor, digite valores positivos!`)
    }else{
    var area = l*a
    var tinta = area/2


    dem.innerHTML = `A largura informada é ${l} m<br>`
    dem.innerHTML += `A altura informada é ${a}m<br>`
    dem.innerHTML += `A área calculada é ${area}m<br>`
    dem.innerHTML += `A tinta necessária para o serviço é ${tinta} Litros<br>`
    }
   
}