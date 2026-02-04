/**
 * 滑动窗口
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const window = new Map();
  let right = 0,
    left = 0,
    res = 0;

  while (right < s.length) {
    const cur = s[right];
    right++;
    if (window.has(cur)) {
      window.set(cur, window.get(cur) + 1);
    } else {
      window.set(cur, 1);
    }
    // 判断左侧窗口是否需要收缩
    while (window.get(cur) > 1) {
      const del = s[left];
      left++;
      // 对窗口内的数据进行一系列的更新
      window.set(del, window.get(del) - 1);
    }
    res = Math.max(res, right - left);
  }
  return res;
};

const s = "pwwkew";
const result = lengthOfLongestSubstring(s);
console.log(result);
