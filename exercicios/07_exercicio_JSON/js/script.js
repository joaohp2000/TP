var perguntaAtual = 0;
var rodada=0;
function nextQuestion() {

    
    document.getElementById('rodada').innerHTML = "Rodada " + (rodada+1) + "/10";
    document.getElementById('pontos').innerHTML = "Pontuação " + (pontuacao) + "/10";
    
    //---------------------------------------------

    //Numero aleatorio para setar a pergunta de forma a nao repetir
    var aleatorio;
    do {
        aleatorio = Math.floor((Math.random() * 11)); //fazer verificacao de qual ja foi
    } while (presidentes[aleatorio] === undefined);

   
    perguntaAtual = aleatorio;

  
    document.getElementById('displayText').innerHTML = "<img class=" + "borda" + " src=" + presidentes[perguntaAtual].link + " height=" + "275px >";
    document.getElementById('res1').innerHTML = presidentes[perguntaAtual].res1;
    document.getElementById('res2').innerHTML = presidentes[perguntaAtual].res2;
    document.getElementById('res3').innerHTML = presidentes[perguntaAtual].res3;
    document.getElementById('res4').innerHTML = presidentes[perguntaAtual].res4;
    
}

var pontuacao = 0;
function reiniciar(){
    window.location.href = "index.html"
}
function escolha(id) {
   
   
    var resposta = presidentes[perguntaAtual].resposta; 
    delete presidentes[perguntaAtual];
    if (resposta == id) {
        
        document.getElementById('pontos').innerHTML = "Pontuação " + (pontuacao) + "/10";
        document.getElementById(id).className="btn btn-success btn-block text-light";
        setTimeout(() => { verifica(id,resposta); }, 700);
        pontuacao++;
    }
    else{
        document.getElementById(id).className="btn btn-danger btn-block text-light";
        document.getElementById(resposta).className="btn btn-success btn-block text-light";
        setTimeout(() => { verifica(id,resposta); }, 700);
    }
}

function verifica(id,id2){
    document.getElementById(id2).className="btn btn-dark btn-block text-light";
    document.getElementById(id).className="btn btn-dark btn-block text-light";
    if(rodada<9){
        rodada++;
        perguntaAtual++;
        nextQuestion();
        
    }
    else{
        document.getElementById("jogo").remove();
        document.getElementById('corpo').innerHTML = '<div><h1 style="text-align: center">Pontuação ' + (pontuacao) + '/10</h1></div id="reiniciar"><div style="display: flex; justify-content: center;"><img src="imagens/reiniciar.png" width="70" height="70"  onclick=reiniciar()></div><h3 style="text-align: center">Reiniciar jogo</h3>';
        pontuacao=0;
        rodada=0;
        perguntaAtual=0;
        
    }
}



