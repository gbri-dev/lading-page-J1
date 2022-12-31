/*Podemos escrever de forma abreviada aqui dentro usando apenas
   * o cifrão no lugar da palavra jQuery
   * Também é recomentado usar para evitar que outras bibliotecas que usam
   * simbolo de cifra entre em conflito com o jQuery */
jQuery(function ($) {
  // Essa é a forma segura de chamar o jQuery
  //Seletores simples
  $('h4') //tag
  $('.Titulo') //Classe
  $('#nome') // Id

  //seletores compostos
  $('h4, h6') //Pega Todos os h4 e h6
  $('div h4') //Pega somente o h4 que estiver dentro de uma div

  //Além do seletores podemos instanciar variaveis com javascript normalmente
  let myLogo = $('.Titulo')

  // e agora podemos usar algumas funções nessa variável
  // Pegar somente o 1 elemento ou o primeiro local que aparece a myLogo
  console.log(myLogo.first())
  console.log("As variáveis estão protegidas com let")
  //Para alterar o primeiro h4 
  $('h4').first().text('Novo título')

  $('div').last().removeClass('informa')

  $('a').text('Seletores')
})