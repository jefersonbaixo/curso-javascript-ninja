((win, doc) => {
    /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

    let display = doc.getElementById('calculator');

    let clear = doc.getElementById('clear');

    let number0 = doc.getElementById('number0');
    let number1 = doc.getElementById('number1');
    let number2 = doc.getElementById('number2');
    let number3 = doc.getElementById('number3');
    let number4 = doc.getElementById('number4');
    let number5 = doc.getElementById('number5');
    let number6 = doc.getElementById('number6');
    let number7 = doc.getElementById('number7');
    let number8 = doc.getElementById('number8');
    let number9 = doc.getElementById('number9');

    let sum = doc.getElementById('sum');
    let subtraction = doc.getElementById('subtraction');
    let division = doc.getElementById('division');
    let multiplication = doc.getElementById('multiplication');
    let equals = doc.getElementById('equals');

    number0.addEventListener("click", () => { typeNumber(number0) }, false);
    number1.addEventListener("click", () => { typeNumber(number1) }, false);
    number2.addEventListener("click", () => { typeNumber(number2) }, false);
    number3.addEventListener("click", () => { typeNumber(number3) }, false);
    number4.addEventListener("click", () => { typeNumber(number4) }, false);
    number5.addEventListener("click", () => { typeNumber(number5) }, false);
    number6.addEventListener("click", () => { typeNumber(number6) }, false);
    number7.addEventListener("click", () => { typeNumber(number7) }, false);
    number8.addEventListener("click", () => { typeNumber(number8) }, false);
    number9.addEventListener("click", () => { typeNumber(number9) }, false);

    sum.addEventListener("click", () => { verifyIfAlreadyHasOperation('+') }, false);
    subtraction.addEventListener("click", () => { verifyIfAlreadyHasOperation('-') }, false);
    division.addEventListener("click", () => { verifyIfAlreadyHasOperation('/') }, false);
    multiplication.addEventListener("click", () => { verifyIfAlreadyHasOperation('x') }, false);
    equals.addEventListener("click", () => { result() }, false);

    clear.addEventListener("click", () => { display.value = 0 }, false);

    function result() {

        let numbers = display.value.match(/(\d+)/g);

        if (!numbers[1]) {
            display.value = display.value.slice(0, display.value.length - 1);
        } else {

            let operator = display.value.match(/[x\/\-\+]/g);

            switch (operator[0]) {
                case "+":
                    display.value = parseInt(numbers[0]) + parseInt(numbers[1]);
                    break;
                case '-':
                    display.value = parseInt(numbers[0]) - parseInt(numbers[1]);
                    break;
                case 'x':
                    display.value = parseInt(numbers[0]) * parseInt(numbers[1]);
                    break;
                case '/':
                    display.value = parseInt(numbers[0]) / parseInt(numbers[1]);
                    break;

                default:
                    break;
            }
        }

    }

    function typeNumber(number) {
        if (display.value == '0') display.value = number.value;
        else {
            display.value += number.value;
        }
    }

    function verifyIfAlreadyHasOperation(operator) {

        if (display.value.match(/(\d+\D\d+)/g)) {
            result();
        }
        //Não deixa colocar mais de um operador no final.
        if (display.value.match(/(\d+\D+)/g)) {
            display.value = display.value.slice(0, display.value.length - 1);
        }
        display.value += operator;
    }


})(window, document)