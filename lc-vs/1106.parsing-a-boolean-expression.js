/*
 * @lc app=leetcode.cn id=1106 lang=javascript
 * @lcpr version=30204
 *
 * [1106] 解析布尔表达式
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * ! 取反
 * & 都为真才为真
 * | 只要有一个为真即为真
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  if (!expression || typeof expression !== "string" || expression.length === 0) {
    return;
  }

  const stack = [];
  const length = expression.length;
  for (let i = 0; i < length; i++) {
    const c = expression[i];
    if (c === ",") {
      continue;
    } else if (c !== ")") {
      stack.push(c);
    } else {
      let t = 0,
        f = 0;
      while (stack[stack.length - 1] !== "(") {
        const v = stack.pop();
        if (v === "t") {
          t++;
        } else {
          f++;
        }
      }
      stack.pop();
      const op = stack.pop();
      switch (op) {
        case "!":
          stack.push(f === 1 ? "t" : "f");
          break;
        case "&":
          stack.push(f === 0 ? "t" : "f");
          break;
        case "|":
          stack.push(t > 0 ? "t" : "f");
          break;
        default:
          break;
      }
    }
  }

  return stack.pop() === "t";
};

// @lc code=end

/*
// @lcpr case=start
// "&(|(f))"\n
// @lcpr case=end

// @lcpr case=start
// "|(f,f,f,t)"\n
// @lcpr case=end

// @lcpr case=start
// "!(&(f,t))"\n
// @lcpr case=end

 */
