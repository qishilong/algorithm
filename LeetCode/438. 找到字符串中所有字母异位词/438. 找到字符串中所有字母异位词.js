/**
 * 滑动窗口
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const need = new Map();
  const window = new Map();
  for (let i = 0, len = p.length; i < len; i++) {
    if (need.has(p[i])) {
      need.set(p[i], need.get(p[i]) + 1);
    } else {
      need.set(p[i], 1);
    }
  }
  let left = 0,
    right = 0,
    start = 0,
    valid = 0,
    res = [];
  while (right < s.length) {
    let cur = s[right];
    right++;
    if (need.has(cur)) {
      if (window.has(cur)) {
        window.set(cur, window.get(cur) + 1);
      } else {
        window.set(cur, 1);
      }
      if (window.get(cur) === need.get(cur)) {
        valid++;
      }
    }
    while (right - left >= p.length) {
      if (valid === need.size) {
        res.push(left);
      }
      const del = s[left];
      left++;
      // 对窗口中的数据进行一系列的更新
      if (need.has(del)) {
        if (window.get(del) === need.get(del)) {
          valid--;
        }
        window.set(del, window.get(del) - 1);
      }
    }
  }
  return res;
};
const s = "cbaebabacd",
  p = "abc";
// const s = "abab",
//   p = "ab";
const result = findAnagrams(s, p);
console.log(result);
