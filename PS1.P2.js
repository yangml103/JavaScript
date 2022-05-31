
const getOperator = operator => {
    switch (operator) {
        case '+':
            return (left, right) => left + right;
            break;

        case '-':
            return (left, right) => left - right;
            break;

        case '*':
            return (left, right) => left * right;
            break;

        case '/':
            return (left, right) => left / right;
            break;

        case '^':
            return (left, right) => left ** right;
            break;


    }
}

const parseHelperFunc = inp => {
    let pattern = /[\/%*+-/^]+/g;
    let items = inp.replace(pattern, " ").split(" ")
    let parsed = inp.match(pattern)
    let operator = parsed[0]
    let result = getOperator(operator)
    let leftValue, rightValue;
    [leftValue, rightValue] = items
    return result(parseInt(leftValue,10),parseInt(rightValue,10))
}
//let test = getOperator("+")
//console.log(test(1,4))
console.log(parseHelperFunc("4+5"))
console.log(parseHelperFunc("5*7"))
console.log(parseHelperFunc("6-1"))
console.log(parseHelperFunc("9/2"))
console.log(parseHelperFunc("2^8"))
console.log(parseHelperFunc("12/8"))
console.log(parseHelperFunc("12*19"))




