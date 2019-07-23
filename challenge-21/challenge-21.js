((win, doc) => {
'use strict';
/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/

let $buttonStart = doc.querySelector('[data-js="start"]');
let $buttonStop = doc.querySelector('[data-js="stop"]');
let $buttonReset = doc.querySelector('[data-js="reset"]');
let $inputTimer = doc.querySelector('[data-js="inputTimer"]');
let timer;

function startTimer() {
    $inputTimer.value++;
    timer = setTimeout(startTimer, 1000);
}

$buttonStart.addEventListener('click', startTimer, false);

$buttonReset.addEventListener('click', () => {
    $inputTimer.value = 0;
}, false)

$buttonStop.addEventListener('click', () => {
    clearTimeout(timer);
}, false)

})(window, document);