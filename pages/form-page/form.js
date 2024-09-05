const botaoPass = document.getElementById("button1-forms");

let nome = document.querySelector('#nome')
let labelNome = document.querySelector("#labelName")

let email = document.querySelector('#email')
let labelEmail= document.querySelector("#labelEmail")

 let senha = document.querySelector('#senha')
 let labelSenha= document.querySelector("#labelSenha")

 let senha1 = document.querySelector('#senha1')
let labeSenha1 = document.querySelector("#labeSenha1")

//passagem de tela
function PassPage(){
    window.location.replace('http://127.0.0.1:5500/pages/logIn-page/log.html')
}

//confirmação de caracteres
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', "color:red", ' font-family:sans-serif')
        labelNome.innerHTML = '<strong>Name * insira no minimo 3 caracteres </strong> '
    }else{
        labelNome.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
           labelNome.innerHTML = 'Name'
    }
})

email.addEventListener('keyup', ()=>{
    if( email.value.length <= 11 ){
        labelEmail.setAttribute('style', "color:red", ' font-family:sans-serif')
        labelEmail.innerHTML = '<strong>E-mail * insira no minimo 12 caracteres </strong> '
    }else{
        labelEmail.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
        labelEmail.innerHTML = 'E-mail'
    }
})

senha.addEventListener('keyup', ()=>{
    if( senha.value.length <= 7 ){
        labelSenha.setAttribute('style', "color:red", ' font-family:sans-serif')
        labelSenha.innerHTML = '<strong> Password * insira no minimo 8 caracteres </strong> '
    }else{
        labelSenha.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
        labelSenha.innerHTML = ' Password'
    }
})

senha1.addEventListener('keyup', ()=>{
    if( senha1.value != senha.value ){
        labeSenha1.setAttribute('style', "color:red", ' font-family:sans-serif')
        labeSenha1.innerHTML = '<strong> senha incorreta </strong> '
    }else{
        labeSenha1.setAttribute('style', 'color:#000000', ' font-family:sans-serif')
        labeSenha1.innerHTML = 'Confirm Password'
    }
})



function cadastrar(){
    
}


