window.addEventListener('load', function mostrarCadastro() {
  
    let listaUser = localStorage.getItem('listaUser');
    
    const dadosSucesso = document.querySelector("#dadosSucesso");

    if (listaUser) {
       
        let usuarios = JSON.parse(listaUser);

      
        if (Array.isArray(usuarios) && usuarios.length > 0) {
            let html = '';

            usuarios.forEach((usuario, index) => {
                const nome = usuario.nomeCadastro || 'Nome não encontrado';
                const email = usuario.emailCadastro || 'E-mail não encontrado';
                const senha = usuario.senhaCad || 'Senha não encontrada';

            
                html += `
                    <div>
                         <h3>Usuário Cadastrado com Sucesso!</h3>
                        <h3 style="color:#00000">Usuário ${index + 1}</h3>
                        <h2 style="color:gray"><strong>Nome:</strong> ${nome}</h2>
                        <h2 style="color:gray"><strong>E-mail:</strong> ${email}</h2>
                         <h2 style="color:gray"><strong>Senha:</strong> ${senha}</h2>
                    </div>
                    <hr>
                `;
            });

            dadosSucesso.innerHTML = html;

        } 

    } 
});


