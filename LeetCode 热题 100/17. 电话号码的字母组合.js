/**
 * 1. 回溯
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || typeof digits != "string" || digits.length === 0) {
    return [];
  }

  const length = digits.length,
    buttonArr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
    result = [],
    path = [];

  const backtracking = (digits, index) => {
    if (index === length) {
      result.push(path.join(""));
      return;
    }

    if (digits[index] === "1") {
      result.push(" ");
      return;
    } else if (digits[index] === "*") {
      result.push("*");
      return;
    } else if (digits[index] === "#") {
      result.push("#");
      return;
    } else {
      const button = buttonArr[digits[index]],
        buttonLength = button.length;
      for (let i = 0; i < buttonLength; i++) {
        path.push(button[i]);
        backtracking(digits, index + 1);
        path.pop();
      }
    }
  };

  backtracking(digits, 0);

  return result;
};
