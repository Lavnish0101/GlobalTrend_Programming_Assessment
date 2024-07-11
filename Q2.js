function evaluateExpression(expression) {
    expression = expression.replace(/\s/g, '');

    let currentNumber = 0;
    let result = 0;
    let sign = 1;

    for(let i = 0; i < expression.length; i++){
        const char = expression.charAt(i);

        if (!isNaN(parseInt(char))) {
            currentNumber = currentNumber * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * currentNumber;
            currentNumber = 0;
            sign = 1;
        } else if (char === '-') {
            result += sign * currentNumber;
            currentNumber = 0;
            sign = -1;
        }
    }

    result += sign * currentNumber;

    return result;
}

const expression1 = "12+32-13+74";
console.log(evaluateExpression(expression1));

const expression2 = "50-33+22";
console.log(evaluateExpression(expression2));
