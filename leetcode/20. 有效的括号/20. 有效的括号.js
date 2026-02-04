/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    const cur = s[i];
    if (cur === "(") {
      stack.push(")");
    } else if (cur === "{") {
      stack.push("}");
    } else if (cur === "[") {
      stack.push("]");
    } else if (cur === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
const s = "()";
const result = isValid(s);
console.log(result);
