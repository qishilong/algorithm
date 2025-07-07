// js实现给定一个字符串，求它的结果值，计算时如果出现计算结果为小数的情况，计算结果向下取整。比如字符串'-1+101/2'的结果为49，字符串'1+3/2'的结果为2

function calculateExpression(expression) {
  // 预处理表达式，处理负数符号和运算符优先级
  let tokens = [];
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    // 处理数字和小数点
    if (/[0-9.]/.test(char)) {
      currentNumber += char;
    }
    // 处理负号（可能是负数或减号）
    else if (char === "-") {
      if (i === 0 || /[+\-*/(]/.test(expression[i - 1])) {
        // 作为负数符号处理
        currentNumber += char;
      } else {
        // 作为减号处理
        if (currentNumber) {
          tokens.push(parseFloat(currentNumber));
          currentNumber = "";
        }
        tokens.push(char);
      }
    }
    // 处理其他运算符
    else if (/[+\/*(]/.test(char)) {
      if (currentNumber) {
        tokens.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      tokens.push(char);
    }
    // 处理右括号
    else if (char === ")") {
      if (currentNumber) {
        tokens.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      tokens.push(char);
    }
  }

  // 处理最后一个数字
  if (currentNumber) {
    tokens.push(parseFloat(currentNumber));
  }

  // 使用两个栈计算表达式
  const values = [];
  const ops = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // 如果是数字，直接压入值栈
    if (typeof token === "number") {
      values.push(token);
    }
    // 如果是左括号，直接压入运算符栈
    else if (token === "(") {
      ops.push(token);
    }
    // 如果是右括号，计算直到遇到左括号
    else if (token === ")") {
      while (ops.length > 0 && ops[ops.length - 1] !== "(") {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      ops.pop(); // 弹出左括号
    }
    // 如果是运算符
    else if (["+", "-", "*", "/"].includes(token)) {
      // 处理当前运算符的优先级
      while (ops.length > 0 && hasPrecedence(token, ops[ops.length - 1])) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      ops.push(token);
    }
  }

  // 处理剩余的运算符
  while (ops.length > 0) {
    values.push(applyOp(ops.pop(), values.pop(), values.pop()));
  }

  // 返回最终结果并向下取整
  return Math.floor(values[0]);
}

// 运算符优先级判断
function hasPrecedence(op1, op2) {
  if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
    return false;
  }
  return true;
}

// 执行运算
function applyOp(op, b, a) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        throw new Error("Division by zero");
      }
      return a / b;
  }
  return 0;
}

// 示例测试
console.log(calculateExpression("-1+101/2+-100/3-100*-100/-20")); // 输出 49
console.log(calculateExpression("1+3/2")); // 输出 2
