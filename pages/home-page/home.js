
window.addEventListener('load',function mostrarCadastro(){
  const localsto = (localStorage.getItem('listaUser'));
    ///document.body.querySelector("#dadosSucesso").innerHTML = localsto;


if (localsto) {
    // Converte a string JSON para objeto
    const usuario = JSON.parse(localsto);
    
    // Verifica se as propriedades existem
    const nome = usuario.nomeCadastro || 'Nome não encontrado';
    const email = usuario.emailCadastro || 'E-mail não encontrado';
    const senha = usuario.senhaCad || 'Senha não encontrada';
    
    
    document.body.querySelector("#dadosSucesso").innerHTML = `
        <p>Nome: ${nome}</p>
        <p>E-mail: ${email}</p>
        <p>Senha: ${senha}</p>
    `;
} else {
  
    document.body.querySelector("#dadosSucesso").innerHTML = `<p>Nenhum dado encontrado.</p>`;
}
});