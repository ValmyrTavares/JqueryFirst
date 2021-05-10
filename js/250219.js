var campo = $('#campo-digitacao')
var tempoInicial = $('.contador-tempo').text()
console.log(campo)

$(function(){
    contadorFrasePrincipal()
    marcadoresDigitados()
    inicializacronometro()
})

function contadorFrasePrincipal(){
     frasePrincipal = $('.texto').text()
    contadorLetras = frasePrincipal.length;
    $(".contador-letras").text(contadorLetras)
    conteudo = frasePrincipal.split(" ").length
    $(".contador-palavras").text(conteudo)
}

function marcadoresDigitados(){
    campo.on("input",function(){
        conteudo = campo.val()
        numCaracteresDigitados = conteudo.length
        $(".letras-digitadas").text(numCaracteresDigitados)
        numPalavrasDigitados = conteudo.split(" ").length
        $(".palavras-digitadas").text(numPalavrasDigitados  )
    })
}

function inicializacronometro(){
    var tempoRestante = tempoInicial;
    campo.one('focus', function(){
        stop = setInterval(()=>{
            tempoRestante --
            $(".contador-tempo").text(tempoRestante)
            if (tempoRestante == 0){
                clearInterval(stop)

            }
        },1000)
    })
}

