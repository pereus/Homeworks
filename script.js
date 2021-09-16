
let mathOperation;
let firstNumber;
let secondNumber;
let result;
let history = [];
let historyReverse = [];
do {

    mathOperation = +prompt(`Select an operation you want to do:
    for "Sum" put 1;
    for "Diff" put 2;
    for "Mult" put 3;
    for "Div" put 4;
    for "Pow" put 5;
    for "Sin" put 6;
    for "Cos" put 7;`);


if(mathOperation > 7 || mathOperation < 1 || mathOperation !== mathOperation) {
    continue;
}

function notNanOperand (promptDesc) {
    let result;
    do {
        result = +prompt(promptDesc)
    } while (result !== result);
    return result;
};


firstNumber = notNanOperand (mathOperation < 6 && mathOperation > 0 ? 'Please, enter your first number' : 'Please, enter your number');


if (mathOperation < 6) {
    secondNumber = notNanOperand('Please, enter your second number');
};


function sum (firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}

function diff (firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;
    return result;
}

function mult (firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;
    return result;
}

function div (firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    return result;
}

function pow (firstNumber, secondNumber) {
    let result = Math.pow(firstNumber, secondNumber);
    return result;
}

function sin (firstNumber) {
    let result = Math.sin(firstNumber);
    return result;
}

function cos (firstNumber) {
    let result = Math.cos(firstNumber);
    return result;
}

switch (mathOperation) {
    case 1:
       result = sum(firstNumber, secondNumber);
    break;
    case 2: 
        result = diff(firstNumber, secondNumber);
    break;
    case 3:
        result = mult(firstNumber, secondNumber);
    break;
    case 4:
        result = div(firstNumber, secondNumber);
    break;
    case 5:
        result = pow(firstNumber, secondNumber);
    break;
    case 6:
        result = sin(firstNumber);
    break;
    case 7:
        result = cos(firstNumber);
    break;
    default: alert('Try again');
        break;
};

let operName;
if (mathOperation === 1) {
    operName = 'sum';
} else if (mathOperation === 2) {
    operName = 'diff';
} else if (mathOperation === 3) {
    operName = 'mult';
} else if(mathOperation === 4) {
    operName = 'div';
} else if(mathOperation === 5) {
    operName = 'pow';
} else if(mathOperation === 6) {
    operName = 'sin';
} else {
    operName = 'cos';
};

function resultMessage(operName, result) {
    alert(`Operation ${operName} finished with result ${result}.`)
};
resultMessage(operName, result);

history.push(result);
historyReverse = history;
console.table(historyReverse.reverse(result));

} while (confirm('Do You want to repeat?'));

