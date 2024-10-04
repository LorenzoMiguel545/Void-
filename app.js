let ListaDeNúmeros = []
let LimiteNumeral = 10;
let = NúmeroSecreto = GeradorNúmero ();
 let tentativa = 1;

function exibirTextoNaTela (tag, texto) {
   let campo = document.querySelector(tag);
campo.innerHTML = texto;
console.log (texto);
}
function exibirMensagemInicial () {
   exibirTextoNaTela ("h1", 'Hora do Desafio!')
   exibirTextoNaTela ("p", 'Escolha um número entre um e dez.')
}
exibirMensagemInicial()
RestartAutomático()

function verificarChute() {
   let chute = document.querySelector  ('input').valueAsNumber
   console.log('O botão foi clicado!');
   let PalavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
   let MensagemTentativa = `Você acertou!! O número era ${NúmeroSecreto} em ${tentativa} tentativas`;
    if ( chute == NúmeroSecreto) {
      exibirTextoNaTela ('h1', 'Você acertou!! O número era ' + NúmeroSecreto);
      exibirTextoNaTela ('p', `${MensagemTentativa}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
      } else { 
         if (chute > NúmeroSecreto) 
            exibirTextoNaTela ('p', 'Você errou, o número secreto é menor do que ' + chute);
         if (chute < NúmeroSecreto)
            exibirTextoNaTela ('p', ' Você errou, o número secreto é maior do que ' + chute);
         tentativa++;}
      limparCampo() 
      }
         
   
    
      

      function limparCampo () {
         chute = document.querySelector ('input');
         chute.value = '';}
  
function GeradorNúmero () { 
  let NúmeroEscolhido =  parseInt(Math.random() * LimiteNumeral + 1);
   let quantidadeDeNúmeros = ListaDeNúmeros.length
   if (quantidadeDeNúmeros == LimiteNumeral) {
      ListaDeNúmeros = []
   }

  if (ListaDeNúmeros.includes (NúmeroEscolhido)){
   return GeradorNúmero()
  } else {
   ListaDeNúmeros.push (NúmeroEscolhido);
   console.log (ListaDeNúmeros);
   return NúmeroEscolhido
   
 }
 
} 



function GeradorNúmeroAVANÇADO() {
   return parseInt(Math.random() * 100 + 1);
}
function Restart() {
   NúmeroSecreto = GeradorNúmero();
   limparCampo();
   tentativa = 1;
   exibirMensagemInicial()
   document.getElementById('reiniciar').setAttribute('disabled',true)
}

