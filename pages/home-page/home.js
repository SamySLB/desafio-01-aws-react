
window.addEventListener('load',function mostrarCadastro(){
   var localsto = localStorage.getItem('listaUser' );
    document.body.querySelector("#dadosSucesso").innerHTML = `${localsto}` ;
  
    
})

