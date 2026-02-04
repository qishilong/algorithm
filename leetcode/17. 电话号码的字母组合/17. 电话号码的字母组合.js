/**
 * 1. 不把回溯过程放递归函数里
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//   const length = digits.length;

//   if (length === 0) {
//     return [];
//   }

//   const letterArr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

//   const result = [], // 存放结果
//     path = []; // 可能项

//   const backtracking = (digits, index) => {
//     if (index === length) {
//       result.push(path.join(""));
//       return;
//     }

//     if (digits[index] === "1") {
//       // 处理输入包括'1'的情况
//       result.push(" ");
//       return;
//     } else if (digits[index] === "*") {
//       // 处理输入包括'*'的情况
//       result.push("*");
//       return;
//     } else if (digits[index] === "#") {
//       // 处理输入包括'#'的情况
//       result.push("#");
//       return;
//     } else {
//       const letter = letterArr[digits[index]]; // 取数字对应的字符集

//       for (let i = 0; i < letter.length; i++) {
//         path.push(letter[i]); // 处理
//         backtracking(digits, index + 1); // 递归，注意 index + 1，下一层要处理下一个数字
//         path.pop(); // 回溯
//       }
//     }
//   };

//   backtracking(digits, 0);

//   return result;
// };

/**
 * 2. 把回溯过程放递归函数里
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const length = digits.length;

  if (length === 0) {
    return [];
  }

  const letterArr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  const result = []; // 存放结果

  // 注意参数不同
  const backtracking = (digits, index, s) => {
    if (index === length) {
      result.push(s);
      return;
    }

    if (digits[index] === "1") {
      // 处理输入包括'1'的情况
      result.push(" ");
      return;
    } else if (digits[index] === "*") {
      // 处理输入包括'*'的情况
      result.push("*");
      return;
    } else if (digits[index] === "#") {
      // 处理输入包括'#'的情况
      result.push("#");
      return;
    } else {
      const letter = letterArr[digits[index]]; // 取数字对应的字符集

      for (let i = 0; i < letter.length; i++) {
        backtracking(digits, index + 1, s + letter[i]); // 注意这里的不同
      }
    }
  };

  backtracking(digits, 0, "");

  return result;
};
