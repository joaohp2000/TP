function limpar() {
    if (confirm("Deseja apagar o formulario?") == true) {
        document.cadastro.reset();
    }
}

function enviarDados() {
    if (valida() == true){
        document.cadastro.submit();
        alert("Seus dados foram enviados com Sucesso");
    }
}

function valida() {
    var valido = true;
//valida o nome
    if(document.cadastro.nome.value.length<4){
        document.cadastro.nome.value = "";
        alert("O nome deve conter mais de 3 letras"); 
        valido = false;
    }else{
        document.cadastro.nome.value = document.cadastro.nome.value.toUpperCase();
    }
    
//valido o estado civil

    if(document.cadastro.estado_civil.value==""){
        document.getElementById("invalido").innerHTML = "Selecione um estado civil valido!";
        valido = false
    }else{
        document.getElementById("invalido").innerHTML = "";
    }
    
///objetivo minuscula
    document.cadastro.objetivo.value = document.cadastro.objetivo.value.toLowerCase();

// Telefone ou Email
    
    if(document.cadastro.telefone.value == "" && document.cadastro.email.value == ""){
        alert("Necessario informar telefone e/ou email");
        valido = false;
    }
    
//linguas

    if(document.cadastro.ingles.value == "" || document.cadastro.espanhol.value == "" ){
        alert("Necessario selecionar um nivel para os idiomas");
        valido = false;
    }
   
//linguagem de programalçao
if (document.getElementById("LP1").checked == false &&
    document.getElementById("LP2").checked == false &&
    document.getElementById("LP3").checked == false &&
    document.getElementById("LP4").checked == false &&
    document.getElementById("LP5").checked == false &&
    document.getElementById("LP6").checked == false &&
    document.getElementById("LP7").checked == false) {
   
    if (confirm("Você nao escolheu nenhuma linguagem, dejesa prosseguir mesmo assim?") == false){
        valido = false; 
    }
}
  
    return valido;
}
