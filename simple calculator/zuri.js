
// The operator input
const calculator = prompt('Which Operation will you like to perform (  +, -, * or / ): ');

// The operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// Using if...else if... else
if (calculator == '+') {
    result = number1 + number2;
}
else if (calculator == '-') {
    result = number1 - number2;
}
else if (calculator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// The result
alert(`${number1} ${calculator} ${number2} = ${result}`);
alert('Thank you for using the calculator');