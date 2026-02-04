/**
 * 滑动窗口
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const need = new Map(),
    window = new Map();
  for (let i = 0, len = s1.length; i < len; i++) {
    if (need.has(s1[i])) {
      need.set(s1[i], need.get(s1[i]) + 1);
    } else {
      need.set(s1[i], 1);
    }
  }
  let left = 0,
    right = 0,
    valid = 0;
  while (right < s2.length) {
    const cur = s2[right];
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
    while (right - left >= s1.length) {
      if (valid === need.size) {
        return true;
      }
      const del = s2[left];
      left++;
      if (need.has(del)) {
        if (window.get(del) === need.get(del)) {
          valid--;
        }
        window.set(del, window.get(del) - 1);
      }
    }
  }
  return false;
};
