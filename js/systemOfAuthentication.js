
var Email = document.getElementById("emailLogin");
var Senha = document.getElementById("senhaLogin");
var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");

//butões
var Cadastrar = document.getElementById("cadastrar");
var Login = document.getElementById("butãoLogin");



//Criar conta de Email e Senha
if(Cadastrar!=null){
Cadastrar.addEventListener('click', function () {
    if (Senha.value==ConfirmacaodeSenha.value) {
    firebase
    .auth()
    .createUserWithEmailAndPassword(Email.value, Senha.value)
    .then(function() {
        alert("A conta foi cadastrada com sucesso!");
        Email.value='';
        Senha.value='';
        ConfirmacaodeSenha.value='';
    
    })
    .catch(function (error) {
        // Handle Errors here.
        console.error(error.code);
        console.error(error.message);
        alert("Falha ao cadastrar, faltam dados a serem preenchidos!");
        // ...
      });
    }
    else{
        alert("Senhas incompatíveis!");
    }
});
}

//Autenticar com E-mail e Senha
if(Login!=null){
Login.addEventListener('click', function () {
    
    firebase
    .auth()
    .signInWithEmailAndPassword(Email.value, Senha.value)
    .then(function(result) {
        console.log(result)
        alert("Logado com sucesso");
        Email.value='';
        Senha.value='';
        setTimeout(function() {
            window.location.href = "logado.html";
        }, 1000);
         
      
    
    })
    .catch(function (error) {
        console.error(error.code);
        console.error(error.message);
        alert("Falha ao logar. O email não existe ou a senha foi digitada incorretamente!");
});


});


}

    
    //Função para Deslogar da conta 
    function sair(){
  
        firebase.auth().signOut().then(function() {
        console.log('Logout');
        setTimeout(function() {
            location.reload(); 
            }, 1000);
        
      }, function(error) {
        console.error( error );
      });
    }