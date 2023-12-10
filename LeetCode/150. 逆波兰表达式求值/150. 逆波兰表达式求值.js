/**
 * 栈
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  const stack = [];
  for (let i = 0, len = tokens.length; i < len; i++) {
    const item = tokens[i];
    if (item === "+" || item === "-" || item === "*" || item === "/") {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(calcFn(left, right, item));
    } else {
      stack.push(Number(item));
    }
  }
  console.log(stack);

  return stack.pop();
};

// 计算方法
const calcFn = (left, right, sign) => {
  switch (sign) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return Math.trunc(left / right);
    default:
      return 0;
  }
};
const tokens = ["4", "13", "5", "/", "+"];
const result = evalRPN(tokens);
console.log(result);
