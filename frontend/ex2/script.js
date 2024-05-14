function confirmar(){
    var nome = window.document.getElementById("input");
    var dem = window.document.querySelector("div#dem")

    dem.innerHTML = `Bem vindo(a): ${nome.value}`
}