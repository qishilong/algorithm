/*
 * @lc app=leetcode.cn id=30 lang=javascript
 * @lcpr version=30204
 *
 * [30] 串联所有单词的子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 暴力解法
 * 回溯法获取所有单词的组合，遍历字符串 s，查找所有组合出现的位置
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// var findSubstring = function (s, words) {
//   if (!s || typeof s !== "string" || !s.trim() || !words || !Array.isArray(words)) {
//     return;
//   }

//   if (
//     words.length === 0 ||
//     words[0].length > s.length ||
//     words[0].length * words.length > s.length
//   ) {
//     return [];
//   }

//   /**
//    * 获取字符串数组的所有组合
//    * @param {string[]} words
//    * @returns {string[]}
//    */
//   const getAllWordCombination = words => {
//     const length = words.length;
//     const result = [],
//       path = [];

//     const used = new Array(length).fill(false);

//     /**
//      * 回溯
//      * @param {string[]} path
//      * @param {number} index
//      */
//     const backtracking = path => {
//       if (path.length === length) {
//         result.push(path.join(""));
//       }

//       for (let i = 0; i < length; i++) {
//         if (i > 0 && words[i] === words[i - 1] && used[i - 1] === false) {
//           continue;
//         }

//         if (!used[i]) {
//           path.push(words[i]);
//           used[i] = true;
//           backtracking(path);
//           path.pop();
//           used[i] = false;
//         }
//       }
//     };

//     backtracking(path);

//     return result;
//   };

//   const resultPath = [...new Set(getAllWordCombination(words.sort((a, b) => a - b)))];

//   const result = [];
//   const length = s.length;

//   resultPath.forEach(item => {
//     if (s.includes(item)) {
//       for (let i = 0; i < length; i++) {
//         if (s[i] === item[0] && s.slice(i, i + item.length) === item) {
//           result.push(i);
//         }
//       }
//     }
//   });

//   return result;
// };

/**
 * 2. 滑动窗口
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || typeof s !== "string" || !s.trim() || !words || !Array.isArray(words)) {
    return;
  }

  if (
    words.length === 0 ||
    words[0].length > s.length ||
    words[0].length * words.length > s.length
  ) {
    return [];
  }

  const result = [];

  const wordLength = words[0].length,
    totalWordsLength = wordLength * words.length,
    sLength = s.length;

  /**
   * 滑动思想：滑动窗口大小固定为 wordSize * wordNum，每一次滑动去掉一个前面的单词，增加一个后面的单词，并判断是否满足题意，满足则将起始下标加入答案中
   * i 代表滑动的起始位置，i 只需从 0 ~ wordSize-1 开始即可，因为如果 i 从 wordSize 开始，其实就相当于从 0 开始滑动了一次的结果；如果从 wordSize+1 开始，相当于从 1 开始滑动了一次，以此类推，后续都会有重复判断，因此只需从 0 ~ wordSize-1 开始即可。
   */
  for (let i = 0; i < wordLength && i + totalWordsLength <= sLength; i++) {
    let left = i, // 初始化滑动窗口左边界
      right = i + totalWordsLength; // 右边界（开区间）

    const wordMap = new Map(); // 保存当前窗口与 words 中单词的次数差值

    // 初始化滑动窗口内单词计数
    for (let j = left; j < right; j += wordLength) {
      const word = s.slice(j, j + wordLength);
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    // 减去 words 里出现的次数
    for (const word of words) {
      wordMap.set(word, (wordMap.get(word) || 0) - 1);
      if (wordMap.get(word) === 0) {
        wordMap.delete(word);
      }
    }

    // 判断初始状态是否满足
    if (wordMap.size === 0) {
      result.push(left);
    }

    // 继续滑动（只要还能完整加入一个单词）
    while (right + wordLength <= sLength) {
      // 滑动一次：删除左边单词，加入右边单词
      const deleteWord = s.slice(left, left + wordLength);
      const joinWord = s.slice(right, right + wordLength);

      // 删除左边单词
      wordMap.set(deleteWord, (wordMap.get(deleteWord) || 0) - 1);
      if (wordMap.get(deleteWord) === 0) {
        wordMap.delete(deleteWord);
      }

      // 加入右边单词
      wordMap.set(joinWord, (wordMap.get(joinWord) || 0) + 1);
      if (wordMap.get(joinWord) === 0) {
        wordMap.delete(joinWord);
      }

      // 更新边界
      left += wordLength;
      right += wordLength;

      // 判断新窗口是否满足
      if (wordMap.size === 0) {
        result.push(left);
      }
    }
  }

  return result;
};

// const s = "a",
//   words = ["a"];

// const res = findSubstring(s, words);
// console.log(res);

// @lc code=end

/*
// @lcpr case=start
// "barfoothefoobarman"\n["foo","bar"]\n
// @lcpr case=end

// @lcpr case=start
// "wordgoodgoodgoodbestword"\n["word","good","best","word"]\n
// @lcpr case=end

// @lcpr case=start
// "barfoofoobarthefoobarman"\n["bar","foo","the"]\n
// @lcpr case=end

 */
