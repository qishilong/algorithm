/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30204
 *
 * [20] 有效的括号
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 栈
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s || typeof s !== "string" || !s.trim() || s.length === 1) {
    return false;
  }

  const stack = [];
  const length = s.length;

  for (let i = 0; i < length; i++) {
    const char = s[i];
    if (char === "(") {
      stack.push(")");
    } else if (char === "[") {
      stack.push("]");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
// @lc code=end

/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

// @lcpr case=start
// "([)]"\n
// @lcpr case=end

 */
