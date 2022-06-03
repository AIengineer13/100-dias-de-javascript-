 function mostrarNome(){

    var  nome = document.getElementById("nome").value; 
    document.getElementById("apresentar").textContent = " agora funcionou " + nome;  

 }  



 var mostrar = document.getElementById("mostrar"); 
 mostrar.addEventListener("click",mostrarNome);