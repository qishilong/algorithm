/**
 * 1. 利用栈
 * 先进后出
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s || typeof s !== "string") {
    return false;
  }

  const stack = [],
    length = s.length;

  for (let i = 0; i < length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
