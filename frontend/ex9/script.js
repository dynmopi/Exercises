function confirmar(){
    var dem = window.document.querySelector('div#dem');
    var num = window.document.getElementById('input')
    var n = Number(num.value);

    dem.innerHTML = ('')
    var dolar = n/5.13
    var format = n.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var dolararr = dolar.toFixed(2)

    if(n < 0){
        window.alert(`[ERRO] Digite valores positivos`)
    }else{
        dem.innerHTML = `Você tem atualmente ${format}, podendo comprar ${dolararr}$`
    }

    
}