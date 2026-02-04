/**
 * 双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || !nums.length) {
    return nums;
  }
  nums.sort((a, b) => a - b);
  const result = [],
    len = nums.length;
  for (let i = 0; i < len; i++) {
    let left = i + 1,
      right = len - 1,
      iNum = nums[i];
    // 数组此时已经排过序，如果第一个数大于0，直接返回 result
    if (iNum > 0) {
      return result;
    }

    // 去重
    if (iNum === nums[i - 1]) {
      continue;
    }
    while (left < right) {
      const leftNum = nums[left],
        rightNum = nums[right],
        threeNum = leftNum + rightNum + iNum;
      if (threeNum < 0) {
        left++;
      } else if (threeNum > 0) {
        right--;
      } else {
        result.push([leftNum, rightNum, iNum]);
        // 去重
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        right--;
      }
    }
  }
  return result;
};

const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result);
