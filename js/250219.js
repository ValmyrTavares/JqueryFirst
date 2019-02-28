var campo = $("#campo-digitacao");
tempoInicial = $(".contador-tempo").text();

$(function(){
    contadoresFrasePrincipal();
    MarcadoresDigitados();
    inicializaCronometro();
    marcadoresDeBorda();
    $(".botao-reinicia").click(reiniciaJogo);
   
})
   

function contadoresFrasePrincipal(){
    frasePrincipal = $(".texto").text();
    contadorLetras = frasePrincipal.length;
    $(".contador-letras").text(contadorLetras)
    conteudo = frasePrincipal.split(" ").length;
    $(".contador-palavras").text(conteudo);
}

function MarcadoresDigitados(){

    
    campo.on("input",function(){
       conteudo = campo.val();
       numPalavras = conteudo.split(" ").length -1;
        $(".palavras-digitadas").text(numPalavras)
        numCaracteres = conteudo.length;
        $(".letras-digitadas").text(numCaracteres)
    
    })
}      

function inicializaCronometro(){
   var tempoRestante = tempoInicial
    campo.one("focus", function(){
        stop = setInterval(function(){
            tempoRestante--
            $(".contador-tempo").text(tempoRestante);
            if(tempoRestante<1){
                clearInterval(stop);
                finalizaJogo();
            }
        },1000)
    })
    
}

function finalizaJogo(){
    campo.attr("disabled",true);
    tempoRestante = tempoInicial
    inserePlacar();
    
}


function reiniciaJogo(){
    
    $(".palavras-digitadas").text(0);
    $(".letras-digitadas").text(0);
    campo.val(" ");
    campo.attr("disabled",false);
    $(".contador-tempo").text(tempoInicial);
    inicializaCronometro();
}

   
function marcadoresDeBorda(){

    campo.on("input",function(){
           textoDigitado = $("#campo-digitacao").val();
           frasePrincipal = $(".texto").text()
           comparavel = frasePrincipal.substr(0,textoDigitado.length );
           
           
           if(comparavel==textoDigitado){
               campo.removeClass("borda-vermelha")
               campo.addClass("borda-verde")
           }else{
               campo.removeClass("corda-verde")
               campo.addClass("borda-vermelha")
           }
    
       })         
}
               
               

function inserePlacar(){
    corpoTabela = $(".tabela").find("tbody");

    var usuario = "Marco Aurélio";
    var palavras = $(".palavras-digitadas").text();
    var linha = novaLinha(usuario, palavras);

    linha.find(".botao-remover").click(removeLinha)
    corpoTabela.append(linha);
   

}

function removeLinha(event){
    
    event.preventDefault();
    $(this).parent().parent().remove();
}
   



function novaLinha(usuario,palavras){

    var linha = $("<tr>");
   
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
    
}


// PROBLEMA 1 FALTA POR O BOTAÕ REMOVE
// SE VC LIMPAR A TEXTAREA E DIGITAR DEPOIS ELE FICA LOKO