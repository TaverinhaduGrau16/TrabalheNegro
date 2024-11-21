// definindo cor e fonte padrão
document.getElementById("divLeft").style.backgroundColor = "yellow";
document.getElementById("myBody").style.fontFamily = "Arial";



// clique do botão da esquerda
function clickButtonLeft(){
    if (document.getElementById("divLeft").style.backgroundColor == "yellow") {
        document.getElementById("divLeft").style.backgroundColor = "blue";
        document.getElementById("divRight").style.backgroundColor = "yellow";
    } else {
        document.getElementById("divLeft").style.backgroundColor = "yellow";
        document.getElementById("divRight").style.backgroundColor = "blue";
    }
}



// clique do botão da direita
function clickButtonRight(){
    if (document.getElementById("myBody").style.fontFamily == "cursive") {
        document.getElementById("myBody").style.fontFamily = "Arial"
    } else {
        document.getElementById("myBody").style.fontFamily = "cursive"
    }
}



// ao carregar a página
window.onload = function(e) {
    console.log("Carreguei toda página!");
 };



// ao fechar a página
window.onbeforeunload = function(e) {
    return "Tem a certeza que quer fechar a janela?";
 };