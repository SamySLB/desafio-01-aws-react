window.addEventListener('load', function mostrarCadastro() {
    // Obtém a lista de usuários do localStorage
    let listaUser = localStorage.getItem('listaUser');
    
    const dadosSucesso = document.querySelector("#dadosSucesso");

    if (listaUser) {
        // Converte a string JSON para um array de objetos
        let usuarios = JSON.parse(listaUser);

        // Verifica se é uma lista válida e contém usuários
        if (Array.isArray(usuarios) && usuarios.length > 0) {
            let html = '';

            usuarios.forEach((usuario, index) => {
                const nome = usuario.nomeCadastro || 'Nome não encontrado';
                const email = usuario.emailCadastro || 'E-mail não encontrado';
                const senha = usuario.senhaCad || 'Senha não encontrada';

                // Adiciona os dados de cada usuário ao HTML
                html += `
                    <div>
                        <h3 style="color:#00000">Usuário ${index + 1}</h3>
                        <h2 style="color:gray"><strong>Nome:</strong> ${nome}</h2>
                        <h2 style="color:gray"><strong>E-mail:</strong> ${email}</h2>
                         <h2 style="color:gray"><strong>Senha:</strong> ${senha}</h2>
                    </div>
                    <hr>
                `;
            });

            // Exibe todos os usuários cadastrados
            dadosSucesso.innerHTML = html;

        } else {
            // Caso não haja usuários cadastrados
            dadosSucesso.innerHTML = `<p>Nenhum usuário cadastrado.</p>`;
        }

    } else {
        // Caso não haja dados no localStorage
        dadosSucesso.innerHTML = `<p>Nenhum dado encontrado.</p>`;
    }
});


///nesta parte foi utilizada ajuda de uma ia para achar a solução de como transformar em uma array
