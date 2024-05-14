function confirmar(){
    var nome = window.document.querySelector("input#inpname");
    var sal = window.document.getElementById("inpnum");
    var dem = window.document.getElementById("dem");
    
    dem.innerHTML = ''
    if (nome.value.length == 0){
        window.alert('Digite o nome do funcionário')
    } else if (sal.value.length == 0){
        window.alert('Digite o valor do dinheiro')
    } else if (sal.value < 0){
        window.alert('[ERRO] Valor negativo não suportado')
    } else if (Number(sal.value) == 0){
        dem.innerHTML = `O funcionario ${String(nome.value)} não recebe salário`
    } else{
        dem.innerHTML = `O funcionario ${String(nome.value)} tem um salário de ${(sal.value)} R$`
    }
    
    
}