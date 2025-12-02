/*
 * @lc app=leetcode.cn id=67 lang=javascript
 * @lcpr version=30204
 *
 * [67] 二进制求和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 两数相加
 * @param {string} a 加数
 * @param {string} b 加数
 * @param {number} numberSystem 几进制
 * @returns {string}
 */
const addTwoNumbers = (a, b, numberSystem) => {
  if ((!a && !b) || typeof a !== "string" || typeof b !== "string" || (!a.trim() && !b.trim())) {
    return;
  }

  a = a.trim();
  b = b.trim();

  if (a.length === 1 && a[0] === "0" && b.length === 1 && b[0] === "0") {
    return "0";
  }

  if (!a && b) {
    return b;
  }

  if (a && !b) {
    return a;
  }

  const maxLength = Math.max(a.length, b.length);
  const aLength = a.length,
    bLength = b.length;
  let offset = 0;
  const resArr = new Array(maxLength).fill(0);

  if (aLength !== bLength) {
    if (aLength < bLength) {
      a = a.padStart(maxLength, "0");
    } else {
      b = b.padStart(maxLength, "0");
    }
  }

  for (let i = maxLength - 1; i >= 0; i--) {
    const valA = Number(a[i]);
    const valB = Number(b[i]);
    const res = valA + valB + offset;

    if (res >= numberSystem) {
      offset = Math.floor(res / numberSystem);
      if (i === 0) {
        resArr[i] = offset + "" + (res % numberSystem);
      } else {
        resArr[i] = res % numberSystem;
      }
    } else {
      resArr[i] = res;
      offset = 0;
    }
  }

  return resArr.join("");
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return addTwoNumbers(a, b, 2);
};

const a = "11",
  b = "1";

addBinary(a, b);
// @lc code=end
/*
// @lcpr case=start
// "11"\n"1"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */
