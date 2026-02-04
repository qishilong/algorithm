/**
 * 1. 滑动窗口
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s || !t || typeof s !== "string" || typeof t !== "string" || s.length < t.length) {
    return "";
  }
  if (s === t) {
    return s;
  }

  if (s.includes(t)) {
    return t;
  }

  const slide = new Map(), // 利用 Map 记录要找的子串
    window = new Map(), // 利用 Map 记录要找的子串
    sLength = s.length,
    tLength = t.length;

  let left = 0, // 窗口最左边的位置
    right = 0, // 窗口最右边的位置
    slideLength = Infinity, // 窗口的长度
    start = 0, // 记录符合情况的最小子串的起始位置
    valid = 0; // 当前滑动窗口中的字符串涵盖 t 字符串中字符的个数

  for (let i = 0; i < tLength; i++) {
    const curStr = t[i];
    if (slide.has(curStr)) {
      slide.set(curStr, slide.get(curStr) + 1);
    } else {
      slide.set(curStr, 1);
    }
  }

  while (right < sLength) {
    const curStr = s[right];
    right++;

    // 更新窗口的右边的位置，不断向右滑动
    if (slide.has(curStr)) {
      if (window.has(curStr)) {
        window.set(curStr, window.get(curStr) + 1);
      } else {
        window.set(curStr, 1);
      }

      if (window.get(curStr) === slide.get(curStr)) {
        valid++;
      }
    }

    // 只有当当前滑动窗口中的字符串涵盖 t 字符串中所有字符才进入这一步判断，进一步匹配最小子串
    while (valid === slide.size) {
      // 更新最小的窗口长度，保证符合情况的子串长度是最小的
      if (right - left < slideLength) {
        start = left;
        slideLength = right - left;
      }
      let delStr = s[left];
      left++;

      // 更新窗口的起始位置，左边位置不断向右滑动
      if (slide.has(delStr)) {
        if (window.get(delStr) === slide.get(delStr)) {
          valid--;
        }
        window.set(delStr, window.get(delStr) - 1);
      }
    }
  }
  // 返回找到的最小子串，如果 slideLength 一直是 Infinity，说明没有在 s 字符串中找到涵盖 t 所有字符的子串
  return slideLength === Infinity ? "" : s.slice(start, start + slideLength);
};
