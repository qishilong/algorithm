/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [],
    path = []; // 放已经回文的子串

  const length = s.length;

  const backtracking = (s, startIndex) => {
    // 如果起始位置已经大于 s 的长度，说明已经找到了一组分割方案了
    if (startIndex >= length) {
      result.push([...path]);
      return;
    }

    for (let i = startIndex; i < length; i++) {
      // 是回文串
      if (isPalindrome(s, startIndex, i)) {
        // 获取 [startIndex, i] 在 s 中的子串
        const str = s.substring(startIndex, i + 1);
        path.push(str);
      } else {
        continue; // 不是回文，跳过
      }

      backtracking(s, i + 1); // 寻找 i + 1 为起始位置的子串
      path.pop(); // 回溯过程，弹出本次已经添加的子串
    }
  };

  // 判断是否是回文串
  const isPalindrome = (s, start, end) => {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  };

  backtracking(s, 0);

  return result;
};
