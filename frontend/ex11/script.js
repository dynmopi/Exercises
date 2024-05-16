function confirmar(){
    
    var atxt = window.document.getElementById('atxt')
    var btxt = window.document.getElementById('btxt')
    var ctxt = window.document.getElementById('ctxt')
    var dem = window.document.getElementById('dem')

    var a = Number(atxt.value)
    var b = Number(btxt.value)
    var c = Number(ctxt.value)
    
    var delta = b**2 - 4*a*c
    var x1 = 0
    var x2 = 0
    

    if (delta<0){
        window.alert(`Não existem raízes reais!`)
        dem.innerHTML = ''
    } else if(delta == 0){

        window.alert(`Temos raízes iguais`)
        var x1 = -b/2*a

        x1arr = x1.toFixed(2)

        dem.innerHTML = `A raíz dessa equação é <article id="especial">${x1arr}</article><br>`
        dem.innerHTML += `Valores: A = ${a} B = ${b} C = ${c}` 

    } else{
        window.alert(`Temos duas raízes diferentes`)
        var x1 = (-b - (Math.sqrt(delta)))/(2*a)
        var x2 = (-b + (Math.sqrt(delta)))/(2*a)
        x1arr = x1.toFixed(2)
        x2arr = x2.toFixed(2)
        deltaarr = delta.toFixed(2)

        dem.innerHTML = `As raízes dessa função é: <article id="especial">x¹ = ${x1arr}</article><article id="especial">x² = ${x2arr}</article><br>`
        dem.innerHTML += `O valor do discriminante é: <article id="especial">Δ = ${deltaarr}</article><br>`
        dem.innerHTML += `Valores: <ar id ="especial">A = ${a} B = ${b} C = ${c}</ar>`
    }

}