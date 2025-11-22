const operator = ['+', '-', '*', '/']
let x, y;

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

