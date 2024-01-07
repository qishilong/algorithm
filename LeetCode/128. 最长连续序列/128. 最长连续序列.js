// /**
//  * 1. 哈希表 Set
//  * O(n) 时间复杂度
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   if (!nums || nums.length === 0) {
//     return 0;
//   }
//   if (nums.length === 1) {
//     return 1;
//   }
//   const set = new Set(nums);
//   let longest = 0;
//   for (const val of set) {
//     // 只有当当前元素是一个序列的起点时才开始查找
//     if (!set.has(val - 1)) {
//       let curNum = val;
//       let curLongest = 1;

//       // 继续查找递增的连续序列
//       while (set.has(curNum + 1)) {
//         curLongest++;
//         curNum++;
//       }

//       // 更新最长连续序列的长度
//       longest = Math.max(longest, curLongest);
//     }
//   }

//   return longest;
// };

/**
 * 2. 先排序后遍历
 * 时间复杂度 O(nlogn)
 * @param {*} nums
 */
var longestConsecutive = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let longest = 1,
    curLongest = 1;
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        curLongest++;
      } else {
        curLongest = 1;
      }
      longest = Math.max(longest, curLongest);
    }
  }

  return longest;
};

const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result);
