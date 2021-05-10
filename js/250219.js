
// É ASSIM QUE PEGA UM ELEMNTO DENTRO DO DOM COM O O CONTEÚDO DE TEXTO
const teste = $(".texto").text();
// Aqui é só com o elememto
const testeSemTexto = $(".texto")

// OUTPUT
console.log(teste)
console.log(testeSemTexto)
var nome = "VALMYR"


// COLOCANDO EVENTOS NOS ELEMENTOS com parametro
$(".botao-reinicia").click(()=>{
    testandoevento(nome)
})

$(".contador-palavras").mouseenter(testandojquery)  

function testandojquery(){
    
    console.log("teste outro")
}
function testandoevento(x){
    console.log(x)
}