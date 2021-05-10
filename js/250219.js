var campo = $('#campo-digitacao').text()
var tempoInicial = $('.contador-tempo').text()

$(function(){
    contadorFrasePrincipal()
})

function contadorFrasePrincipal(){
     frasePrincipal = $('.texto').text()
    contadorLetras = frasePrincipal.length;
    $(".contador-letras").text(contadorLetras)
    conteudo = frasePrincipal.split(" ").length
    $(".contador-palavras").text(conteudo)
}

