const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    });
});

equalsButton.addEventListener('click', () => {
    if (firstOperand !== '' && currentInput !== '' && operator !== '') {
        const secondOperand = currentInput;
        let result;

        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }

        display.value = result;
        currentInput = result.toString();
        firstOperand = '';
        operator = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    firstOperand = '';
    operator = '';
    display.value = '';
});
