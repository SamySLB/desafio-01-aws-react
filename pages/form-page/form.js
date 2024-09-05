const botaoPass = document.getElementById("button1-forms");

let nome = document.querySelector('#nome')
let labelNome = document.querySelector("#labelName")
 validNome = false

let email = document.querySelector('#email')
let labelEmail= document.querySelector("#labelEmail")
validEmail = false

 let senha = document.querySelector('#senha')
 let labelSenha= document.querySelector("#labelSenha")
 validSenha = false

 let senha1 = document.querySelector('#senha1')
let labeSenha1 = document.querySelector("#labeSenha1")
validSenha1 = false


//passagem de tela
function PassPage(){
    window.location.replace('http://127.0.0.1:5500/pages/logIn-page/log.html')
}

//confirmação de caracteres
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', "color:red", ' font-family:sans-serif')
        labelNome.innerHTML = '<strong>Name * insira no minimo 3 caracteres </strong> '
        validNome= false
    }else{
        labelNome.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
           labelNome.innerHTML = 'Name'
           validNome= true
    }
})

email.addEventListener('keyup', ()=>{
    if( email.value.length <= 11 ){
        labelEmail.setAttribute('style', "color:red", ' font-family:sans-serif')
        labelEmail.innerHTML = '<strong>E-mail * insira no minimo 12 caracteres </strong> '
        validEmail = false
    }else{
        labelEmail.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
        labelEmail.innerHTML = 'E-mail'
        validEmail = true
    }
})

senha.addEventListener('keyup', ()=>{
    if( senha.value.length <= 7 ){
        labelSenha.setAttribute('style', "color:red", ' font-family:sans-serif')
        labelSenha.innerHTML = '<strong> Password * insira no minimo 8 caracteres </strong> '
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
        labelSenha.innerHTML = ' Password'
        validSenha = true
    }
})

senha1.addEventListener('keyup', ()=>{
    if( senha1.value != senha.value ){
        labeSenha1.setAttribute('style', "color:red", ' font-family:sans-serif')
        labeSenha1.innerHTML = '<strong> senha incorreta </strong> '
        validSenha1 = false
    }else{
        labeSenha1.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
        labeSenha1.innerHTML = 'Confirm Password'
        validSenha1 = true
    }
})



function cadastrar(){
    if(validNome && validEmail && validSenha && validSenha1){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCadastro: nome.value,
                emailCadastro: email.value,
                senhaCad: senha.value
              
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        alert('usuário cadastrado')

        window.location.replace('http://127.0.0.1:5500/pages/home-page/home.html')
    }
    else{
        alert("cadastro não efetuado!")
    }
}


