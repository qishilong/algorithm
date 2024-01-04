/**
 * 哈希表 Set
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }
  const set = new Set(nums);
  let longest = 0;
  for (const val of set) {
    // 只有当当前元素是一个序列的起点时才开始查找
    if (!set.has(val - 1)) {
      let curNum = val;
      let curLongest = 1;

      // 继续查找递增的连续序列
      while (set.has(curNum + 1)) {
        curLongest++;
        curNum++;
      }

      // 更新最长连续序列的长度
      longest = Math.max(longest, curLongest);
    }
  }

  return longest;
};
