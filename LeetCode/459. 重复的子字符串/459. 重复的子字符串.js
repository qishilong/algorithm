/**
 * 1. 移动匹配
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function (s) {
//   if (!s || typeof s !== "string") {
//     return false;
//   }
//   let t = s + s;
//   t = t.substring(1);
//   t = t.substring(0, t.length - 1);
//   if (t.indexOf(s) !== -1) {
//     return true;
//   }
//   return false;
// };

/**
 * 2. 暴力遍历
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function (s) {
//   const len = s.length;
//   for (let i = 0; i * 2 <= len; i++) {
//     if (len % i === 0) {
//       let result = true;
//       for (let j = i; j < len; j++) {
//         if (s[j] !== s[j - i]) {
//           result = false;
//           break;
//         }
//       }
//       if (result) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

/**
 * 3. KMP 算法（前缀表统一不减一）
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (!s || s.length === 0) {
    return false;
  }
  const getNext = (s) => {
    const next = [];
    let j = 0;
    next.push(j);

    for (let i = 1, len = s.length; i < len; i++) {
      while (j > 0 && s[j] !== s[i]) {
        j = next[j - 1];
      }
      if (s[i] === s[j]) {
        j++;
      }
      next.push(j);
    }
    return next;
  };

  const next = getNext(s);

  if (next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0) {
    return true;
  }

  return false;
};

const s = "abab";
const result = repeatedSubstringPattern(s);
console.log(result);
