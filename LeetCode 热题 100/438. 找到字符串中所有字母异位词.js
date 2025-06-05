/**
 * 1. 暴力解法
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function (s, p) {
//   if (
//     !s ||
//     typeof s !== "string" ||
//     !p ||
//     typeof p !== "string" ||
//     s.length === 0 ||
//     p.length === 0 ||
//     s.length < p.length
//   ) {
//     return [];
//   }

//   if (s === p) {
//     return [0];
//   }

//   const res = [],
//     sLength = s.length,
//     pLength = p.length;
//   let fast = pLength - 1;

//   const strSort = s =>
//     s
//       .split("")
//       .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
//       .join();

//   const pStrSort = strSort(p);

//   for (let i = 0; i < sLength; i++) {
//     const curStr = s.slice(i, i + fast);
//     if (strSort(curStr) === pStrSort) {
//       res.push(i);
//     }
//     if (i + fast === sLength) {
//       break;
//     }
//   }

//   return res;
// };

/**
 * 2. 滑动窗口
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (
    !s ||
    typeof s !== "string" ||
    !p ||
    typeof p !== "string" ||
    s.length === 0 ||
    p.length === 0 ||
    s.length < p.length
  ) {
    return [];
  }

  if (s === p) {
    return [0];
  }

  const res = [],
    sLength = s.length,
    pLength = p.length,
    slide = new Map(),
    window = new Map();

  let left = 0,
    right = 0,
    valid = 0;

  for (let i = 0; i < pLength; i++) {
    const curStr = p[i];
    if (slide.has(curStr)) {
      slide.set(curStr, slide.get(curStr) + 1);
    } else {
      slide.set(curStr, 1);
    }
  }

  while (right < sLength) {
    const curStr = s[right];
    right++; // 立即加1，当前右指针指向下一个数
    if (slide.has(curStr)) {
      if (window.has(curStr)) {
        window.set(curStr, window.get(curStr) + 1);
      } else {
        window.set(curStr, 1);
      }
      if (slide.get(curStr) === window.get(curStr)) {
        valid++;
      }
    }

    while (right - left >= pLength) {
      if (valid === slide.size) {
        res.push(left);
      }

      const del = s[left];
      left++;
      if (slide.has(del)) {
        if (slide.get(del) === window.get(del)) {
          valid--; // 更新依赖数据
        }
        // 更新窗口数据
        window.set(del, window.get(del) - 1);
      }
    }
  }

  return res;
};
