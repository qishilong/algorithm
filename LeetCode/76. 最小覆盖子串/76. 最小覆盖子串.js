/**
 * 滑动窗口
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = new Map(),
    window = new Map();
  for (let i = 0, len = t.length; i < len; i++) {
    if (need.has(t[i])) {
      need.set(t[i], need.get(t[i]) + 1);
    } else {
      need.set(t[i], 1);
    }
  }
  let left = 0,
    right = 0,
    valid = 0;
  let start = 0,
    len = Infinity;
  while (right < s.length) {
    const c = s[right];
    right++;
    if (need.has(c)) {
      if (window.has(c)) {
        window.set(c, window.get(c) + 1);
      } else {
        window.set(c, 1);
      }
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (valid === need.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      const d = s[left];
      left++;
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return len === Infinity ? "" : s.slice(start, start + len);
};

const s = "abc",
  t = "b";

const result = minWindow(s, t);
console.log(result);
