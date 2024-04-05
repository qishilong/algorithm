/**
 * 1. 利用 Set 判断同一层一个数是否使用过
 * @param {number[]} nums
 * @return {number[][]}
 */
// var findSubsequences = function (nums) {
//   if (!nums || nums.length <= 1) {
//     return [];
//   }

//   const length = nums.length;

//   const result = [],
//     path = [];

//   const backtracking = (nums, startIndex) => {
//     if (path.length > 1) {
//       result.push([...path]);
//       // 这里不需要返回，因为要取树上所有的节点
//     }

//     const set = new Set(); // 使用 Set 对本层元素去重

//     for (let i = startIndex; i < length; i++) {
//       if ((path.length > 0 && nums[i] < path[path.length - 1]) || set.has(nums[i])) {
//         continue;
//       }

//       set.add(nums[i]); // 记录这个元素在本层已经使用过了，本层后面就不能再用了
//       path.push(nums[i]);
//       backtracking(nums, i + 1);
//       path.pop();
//     }
//   };

//   backtracking(nums, 0);

//   return result;
// };

/**
 * 2. 利用数组判断同一层一个数是否使用过
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  if (!nums || nums.length <= 1) {
    return [];
  }

  const length = nums.length;

  const result = [],
    path = [];

  const backtracking = (nums, startIndex) => {
    if (path.length > 1) {
      result.push([...path]);
      // 这里不需要返回，因为要取树上所有的节点
    }

    const used = new Array(201).fill(0); // 利用数组判断同一层一个元素是否使用过，题目中已经说明 -100 <= nums[i] <= 100

    for (let i = startIndex; i < length; i++) {
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || used[nums[i] + 100] === 1) {
        continue;
      }

      used[nums[i] + 100] = 1; // 记录这个元素在本层已经使用过了，本层后面就不能再用了
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };

  backtracking(nums, 0);

  return result;
};
