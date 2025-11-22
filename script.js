let operator, x, y;

let operate = (operator, x, y) => {
    let add = (x, y) => Number(x) + Number(y);
    let subtract = (x, y) => Number(x) - Number(y);
    let multiply = (x, y) => Number(x) * Number(y);
    let divide = (x, y) => Number(x) / Number(y);

    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
};

const inputScreen = document.querySelector("#input-screen");
const orderScreen = document.querySelector('#order-screen');
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const enterButton = document.querySelector('#enter-button');
const clearButton = document.querySelector('#clear-button');

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        inputScreen.textContent += button.textContent;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        orderScreen.textContent = inputScreen.textContent + ' ' + button.textContent;
        x = inputScreen.textContent;
        operator = button.textContent; 
        inputScreen.textContent = '';
    });
});

enterButton.addEventListener("click", () => {
    y = inputScreen.textContent;
    orderScreen.textContent = orderScreen.textContent + ' ' + inputScreen.textContent;
    inputScreen.textContent = operate(operator, x, y);
});

clearButton.addEventListener("click", () => {
    inputScreen.textContent = '';
    orderScreen.textContent = '';
});
