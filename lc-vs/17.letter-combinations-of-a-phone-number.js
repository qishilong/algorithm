/*
 * @lc app=leetcode.cn id=17 lang=javascript
 * @lcpr version=30204
 *
 * [17] 电话号码的字母组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 回溯
 * 不考虑 "*"/"#" 边界情况
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || typeof digits !== "string" || !digits.trim()) {
    return [];
  }

  if (digits.indexOf("1") !== -1) {
    digits = digits.replace("1", "");
  }

  if (digits.indexOf("*") !== -1) {
    digits = digits.replace("*", "");
  }

  if (digits.indexOf("*") !== -1) {
    digits = digits.replace("*", "");
  }

  if (!digits) {
    return [];
  }

  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const length = digits.length;
  const result = [],
    pathArr = [];

  const backtracking = (index) => {
    if (index === length) {
      result.push(pathArr.join(""));
      return;
    }
    for (const char of map.get(digits[index])) {
      pathArr.push(char);
      backtracking(index + 1);
      pathArr.pop();
    }
  };

  backtracking(0);

  return result;
};

/**
 * 2. 回溯
 * 考虑 "*"/"#" 边界情况
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || typeof digits !== "string" || !digits.trim()) {
    return [];
  }

  if (digits.indexOf("1") !== -1) {
    digits = digits.replace("1", "");
  }

  if (!digits) {
    return [];
  }

  const buttonArr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const pathArr = [];
  const result = [];
  const length = digits.length;

  const backtracking = (index) => {
    if (index === length) {
      result.push(pathArr.join(""));
      return;
    }

    const char = digits[index];

    if (char === "1") {
      pathArr.push(" ");
    } else if (char === "*") {
      pathArr.push("*");
    } else if (char === "#") {
      pathArr.push("#");
    } else {
      const buttonStr = buttonArr[char];
      const buttonStrLength = buttonStr.length;

      for (let i = 0; i < buttonStrLength; i++) {
        pathArr.push(buttonStr[i]);
        backtracking(index + 1);
        pathArr.pop();
      }
    }
  };

  backtracking(0);

  return result;
};

// const digits = "23";
// letterCombinations(digits);
// @lc code=end

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
