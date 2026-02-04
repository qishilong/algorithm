/**
 * 前缀表统一减一
 * @param {string} haystack aabaabaafa
 * @param {string} needle aabaaf
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   if (typeof needle !== "string") {
//     return -1;
//   }
//   if (needle.length === 0) {
//     return 0;
//   }

//   const getNext = (needle) => {
//     const next = [];
//     let j = -1;
//     next.push(j);
//     for (let i = 1, len = needle.length; i < len; ++i) {
//       while (j >= 0 && needle[i] !== needle[j + 1]) {
//         j = next[j];
//       }
//       if (needle[i] === needle[j + 1]) {
//         j++;
//       }
//       next.push(j);
//     }
//     return next;
//   };

//   const next = getNext(needle);

//   let j = -1;
//   for (let i = 0, len = haystack.length; i < len; ++i) {
//     while (j >= 0 && haystack[i] !== needle[j + 1]) {
//       j = next[j];
//     }
//     if (haystack[i] === needle[j + 1]) {
//       j++;
//     }
//     if (j === needle.length - 1) {
//       return i - needle.length + 1;
//     }
//   }
//   return -1;
// };

/**
 * 前缀表统一不减一
 * @param {string} haystack aabaabaafa
 * @param {string} needle aabaaf
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  if (typeof needle !== "string") {
    return -1;
  }

  const getNext = (needle) => {
    const next = [];
    let j = 0;
    next.push(j);
    for (let i = 1, len = needle.len; i < len; i++) {
      while (j > 0 && needle[i] !== needle[j]) {
        j = next[j - 1];
      }
      if (needle[i] === needle[j]) {
        j++;
      }
      needle.push(j);
    }
    return next;
  };

  const next = getNext(needle);

  let j = 0;
  for (let i = 0; (len = haystack.length); i < len, i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i - needle.length + 1;
    }
  }
  return -1;
};

const haystack = "sadbutsad",
  needle = "sad";
const result = strStr(haystack, needle);
console.log(result);
