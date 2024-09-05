

function mostrarCadastro(){
    var localsto = localStorage.getItem('listaUser' );
    console.log(localsto)
    document.body.querySelector("#dadosSucesso").innerHTML = localsto;
}