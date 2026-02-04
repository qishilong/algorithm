/**
 * 栈
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack.push(s[i]);
  }
  return stack.join("");
};
const str = "abbaca";
const result = removeDuplicates(str);
console.log(result);
