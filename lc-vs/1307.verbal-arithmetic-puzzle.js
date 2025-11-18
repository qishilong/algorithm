/*
 * @lc app=leetcode.cn id=1307 lang=javascript
 * @lcpr version=30204
 *
 * [1307] 口算难题
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 判断给定的单词加法谜题（如 SEND + MORE = MONEY）是否有解。
 * 每个字母代表一个唯一的数字（0-9），且首位不能为0（除非单词长度为1）。
 *
 * @param {string[]} words - 加数列表（如 ["SEND", "MORE"]）
 * @param {string} result - 和（如 "MONEY"）
 * @return {boolean} - 是否存在合法的数字映射使得等式成立
 */
var isSolvable = function (words, result) {
  // charToDigit: 字符到数字的映射表，-1表示未分配
  const charToDigit = {};

  // isLeadingZero: 标记字符是否为单词/结果的首位（且单词长度>1），1表示不能为0
  const isLeadingZero = {};

  // digitUsed: 数字是否已被使用（0-9），用于确保唯一映射
  const digitUsed = new Array(10).fill(false);

  // carryArray: 进位数组，carryArray[i]表示第i位产生的进位
  const carryArray = new Array(10).fill(0);

  // ========== 初始化映射关系 ==========
  for (const word of words) {
    // 如果任意加数的长度超过结果长度，则不可能成立
    if (word.length > result.length) {
      return false;
    }

    // 遍历当前单词的每个字符，初始化映射
    for (const currentChar of word) {
      charToDigit[currentChar] = -1;

      // 确保isLeadingZero有初始值（至少0）
      if (isLeadingZero[currentChar] === undefined) {
        isLeadingZero[currentChar] = 0;
      } else {
        // 保持最大值（避免覆盖）
        isLeadingZero[currentChar] = Math.max(isLeadingZero[currentChar], 0);
      }
    }

    // 如果单词长度大于1，其首字母不能为0
    if (word.length > 1) {
      isLeadingZero[word[0]] = 1; // 标记为首位（禁止为0）
    }
  }

  // 处理结果字符串中的每个字符
  for (const currentChar of result) {
    charToDigit[currentChar] = -1;

    if (isLeadingZero[currentChar] === undefined) {
      isLeadingZero[currentChar] = 0;
    } else {
      isLeadingZero[currentChar] = Math.max(isLeadingZero[currentChar], 0);
    }
  }

  // 如果结果长度大于1，其首字母也不能为0
  if (result.length > 1) {
    isLeadingZero[result[0]] = 1;
  }

  // ========== 深度优先搜索（DFS）+ 回溯 ==========
  /**
   * 递归函数：尝试为第currentPosition位（从右往左，0-indexed）分配数字
   *
   * @param {number} currentPosition - 当前处理的位数（0=个位，1=十位...）
   * @param {number} currentWordIndex - 当前正在处理words中的第currentWordIndex个单词
   * @param {number} totalPositions - 需要处理的总位数（等于result.length）
   * @returns {boolean} - 是否能找到合法的数字分配
   */
  function dfs(currentPosition, currentWordIndex, totalPositions) {
    // ✅ 基础情况：所有位都已处理完毕
    if (currentPosition === totalPositions) {
      // 必须没有剩余进位，才算成功
      return carryArray[currentPosition] === 0;
    }

    // 🧩 阶段一：为当前位（currentPosition）中words[currentWordIndex]的对应字母分配数字
    if (currentWordIndex < words.length) {
      const wordLength = words[currentWordIndex].length;
      const charIndex = wordLength - currentPosition - 1; // 当前单词从右往左第currentPosition位的字符索引

      // 情况1：当前单词在currentPosition位没有字符（长度不够），或该字符已分配数字 → 跳过
      if (wordLength <= currentPosition || charToDigit[words[currentWordIndex][charIndex]] !== -1) {
        return dfs(currentPosition, currentWordIndex + 1, totalPositions);
      }

      // 情况2：该字符未分配，尝试为其分配一个合法数字
      const currentChar = words[currentWordIndex][charIndex];
      const startDigit = isLeadingZero[currentChar]; // 若是首位，则从1开始；否则从0开始

      for (let digit = startDigit; digit < 10; digit++) {
        if (!digitUsed[digit]) {
          // 尝试分配
          digitUsed[digit] = true;
          charToDigit[currentChar] = digit;

          // 递归处理下一个单词（同一currentPosition位）
          if (dfs(currentPosition, currentWordIndex + 1, totalPositions)) {
            return true; // 找到解，直接返回
          }

          // 回溯：撤销分配
          digitUsed[digit] = false;
          charToDigit[currentChar] = -1;
        }
      }

      // 所有可能数字都试过，无解
      return false;
    }

    // 🧮 阶段二：当前currentPosition位所有加数的字母都已分配，计算该位总和
    else {
      // 计算当前位的总和（包括来自低位的进位carryArray[currentPosition]）
      let totalSum = carryArray[currentPosition];

      // 遍历所有加数单词，累加当前位的数字
      for (const word of words) {
        // 过滤掉word单词长度为0的情况
        if (word.length > currentPosition) {
          const charAtPosition = word[word.length - currentPosition - 1];
          totalSum += charToDigit[charAtPosition];
        }
      }

      // 计算新的进位和当前位应得的数字
      carryArray[currentPosition + 1] = Math.floor(totalSum / 10); // 进位到下一位
      const currentDigit = totalSum % 10; // 当前位的结果数字

      // 获取result在currentPosition位的字符
      const resultChar = result[result.length - currentPosition - 1];

      // 情况A：该字符已经被分配了数字
      if (charToDigit[resultChar] === currentDigit) {
        // 分配一致，继续处理下一位（currentPosition+1），重新从words[0]开始（currentWordIndex=0）
        return dfs(currentPosition + 1, 0, totalPositions);
      }
      // 情况B：该字符尚未分配，且currentDigit可用，且不违反前导零规则
      else if (
        charToDigit[resultChar] === -1 && // 未分配
        !digitUsed[currentDigit] && // 数字未被使用
        !(isLeadingZero[resultChar] === 1 && currentDigit === 0) // 首位不能为0
      ) {
        // 尝试分配
        digitUsed[currentDigit] = true;
        charToDigit[resultChar] = currentDigit;

        // 递归处理下一位
        const foundSolution = dfs(currentPosition + 1, 0, totalPositions);

        // 回溯：撤销分配
        digitUsed[currentDigit] = false;
        charToDigit[resultChar] = -1;

        return foundSolution;
      }
      // 情况C：无法匹配（已分配但不符 / 数字冲突 / 前导零违规）
      else {
        return false;
      }
    }
  }

  // 从第0位（个位）、第0个单词开始搜索，总位数为result.length
  return dfs(0, 0, result.length);
};
// @lc code=end

/*
// @lcpr case=start
// ["SEND","MORE"]\n"MONEY"\n
// @lcpr case=end

// @lcpr case=start
// ["SIX","SEVEN","SEVEN"]\n"TWENTY"\n
// @lcpr case=end

// @lcpr case=start
// ["THIS","IS","TOO"]\n"FUNNY"\n
// @lcpr case=end

// @lcpr case=start
// ["LEET","CODE"]\n"POINT"\n
// @lcpr case=end

 */
