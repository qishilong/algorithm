/**
 * 哈希表
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (let i = 0, len = s.length; i < len; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for (let j = 0, len = t.length; j < len; j++) {
    if (map.has(t[j])) {
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      map.set(t[j], 1);
    }
  }
  const result = [];
  map.forEach((val) => {
    if (val !== 0) {
      result.push(val);
    }
  });
  return result.length > 0 ? false : true;
};
