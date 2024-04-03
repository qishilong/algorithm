/**
 * 1. 直接在原数组上记录进行去重
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsetsWithDup = function (nums) {
//   if (!nums || nums.length === 0) {
//     return [];
//   }

//   const result = [],
//     path = [];

//   const length = nums.length;

//   nums = nums.sort((a, b) => a - b); // 去重需要排序

//   const backtracking = (nums, startIndex) => {
//     result.push([...path]);
//     for (let i = startIndex; i < length; i++) {
//       // 注意这里使用的 i > startIndex，要对同一树层使用过的元素进行跳过
//       if (i > startIndex && nums[i] === nums[i - 1]) {
//         continue;
//       }
//       path.push(nums[i]);
//       backtracking(nums, i + 1);
//       path.pop();
//     }
//   };

//   backtracking(nums, 0);

//   return result;
// };

/**
 * 2. 利用 used 数组进行去重
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsetsWithDup = function (nums) {
//   if (!nums || nums.length === 0) {
//     return [];
//   }

//   const length = nums.length;

//   const result = [],
//     path = [],
//     used = new Array(length).fill(false);

//   nums = nums.sort((a, b) => a - b); // 去重需要排序

//   const backtracking = (nums, startIndex, used) => {
//     result.push([...path]);
//     for (let i = startIndex; i < length; i++) {
//       // used[i - 1] === true，说明同一树枝nums[i - 1]使用过
//       // used[i - 1] === false，说明同一树层nums[i - 1]使用过
//       // 需要对同一树层使用过的元素进行跳过
//       if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
//         continue;
//       }
//       used[i] = true;
//       path.push(nums[i]);
//       backtracking(nums, i + 1, used);
//       used[i] = false;
//       path.pop();
//     }
//   };

//   backtracking(nums, 0, used);

//   return result;
// };

/**
 * 3. 利用set去重
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (!nums || nums.length === 0) {
    return [];
  }

  const length = nums.length;

  const result = [],
    path = [];

  nums = nums.sort((a, b) => a - b); // 去重需要排序

  const backtracking = (nums, startIndex) => {
    const set = new Set(); // 在同一树层判断元素是否使用过
    result.push([...path]);
    for (let i = startIndex; i < length; i++) {
      if (set.has(nums[i])) {
        continue;
      }
      set.add(nums[i]);
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };

  backtracking(nums, 0);

  return result;
};
