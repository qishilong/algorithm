function evalRPN(tokens: string[]): number {
    if (tokens === null || tokens.length === 0) return 0;
    const stack: number[] = [];
    for (const i of tokens) {
        if (i === '+' || i === '-' || i === '*' || i === '/') {
            let afterValue = stack.pop();
            let beforeValue = stack.pop();
            stack.push(calcFn(beforeValue!, afterValue!, i));
        } else {
            stack.push(Number(i));
        }
    }
    return stack[stack.length - 1];
};

const calcFn = (a: number, b: number, token: string): number => {
    switch (token) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return Math.trunc(a / b);
        default:
            return 0;
    }
};

let a = ["4", "13", "5", "/", "+"];
// let a = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
const result = evalRPN(a);
console.log(result);