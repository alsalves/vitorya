//var apelido = window.prompt("Digite como quer ser chamada!")
apelido = "Victorya"

var data = new Date()
var hora = data.getHours()

if (hora >= 0 && hora <= 4) {
    // BOA MADRUGADA!
    nome.innerHTML = `Boa madrugada, ${apelido}!` 
} else if (hora >= 5 && hora <= 11) {
    // BOM DIA!
    nome.innerHTML = `Bom dia, ${apelido}!` 
} else if (hora >= 12 && hora <= 17) {
    // BOM DIA!
    nome.innerHTML = `Boa tarde, ${apelido}!` 
} else {
    nome.innerHTML = `Boa noite, ${apelido}!` 
}

//VERIFICAÇÃO DE SENHA
function verificar() { 
    var senha = Number.parseInt(window.document.getElementById("senha").value)
    if (senha == 22022023) {
        window.location.href = 'logado.html';
    } else {
        window.alert("Senha Incorreta! Tente novamente")
    }
}

function dica(){
    window.alert("A senha é a data que nos conhecemos! (ex: 05112021)")
}


document.getElementById("senha").addEventListener("keydown", function(event) {
    // Verifique se a tecla espaço foi pressionada
    if (event.key === "Enter") {
        // Se a tecla espaço foi pressionada, chame a função de verificação
        verificar();
        // Previna o comportamento padrão da tecla espaço
        event.preventDefault();
    }
});


var frases = [
    "Você é a parte mais linda da minha história.",
    "Se eu sei o que é o amor, é por sua causa.",
    "Você ilumina meus dias.",
    "A medida do amor é amar sem medida.",
    "Tão bom morrer de amor! E continuar vivendo...",
    "O amor é um mistério sem fim, já que não há nada que o explique.",
    "A persistência é o caminho do êxito.",
    "Era como se dissesse, sem dizer, “eu sei que já faz tempo, mas ainda amo você”.",
    "Todo mundo espera alguma coisa de um sábado à noite. Eu espero você.",
    "E se não der certo? A gente vai tentando até acertar.",
    "O que sinto hoje, veio de você e será eternamente por você!",
    "A gente briga, a gente se ama, a gente vai e a gente volta. A gente é da gente e da gente ninguém tira.",
    "Você me ama ao cubo, eu te amo ao quadrado. Não posso dar menos do que você merece!",
    "O que a alma ama fica eterno. Te amo com a alma. Te almo!"    
];

function exibirFraseAleatoria() {
    var indiceAleatorio = Math.floor(Math.random() * frases.length);
    var fraseAleatoria = frases[indiceAleatorio];
    document.getElementById("frase").innerHTML = fraseAleatoria;
}
