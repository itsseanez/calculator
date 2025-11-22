let add = (x, y) => {
    return Number(x) + Number(y);
};

let subtract = (x, y) => {
    return Number(x) - Number(y);
};

let multiply = (x, y) => {
    return Number(x) * Number(y);
};

let divide = (x, y) => {
    return Number(x) / Number(y);
};

let operate = (operator, x, y) => {
    switch(operator) {
        case '+':
            add(x, y);
            break;
        case '-':
            subtract(x,y);
            break;
        case '*':
            multiply(x, y);
            break;
        case '/':
            divide(x,y);
            break;
    }
};