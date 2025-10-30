/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 * @lcpr version=30204
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  if (!weights || !Array.isArray(weights) || weights.length === 0) {
    return 0;
  }

  if (days <= 0) {
    return 0;
  }

  const sum = weights.reduce((a, b) => a + b, 0);

  if (days === 1) {
    return sum;
  }

  // 确定二分查找左右边界
  let left = Math.max(...weights),
    right = sum;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    //  need 为需要运送的天数
    // curWeight 为当前这一天已经运送的包裹重量之和
    let need = 1,
      curWeight = 0;
    for (const weight of weights) {
      if (curWeight + weight > mid) {
        need++;
        curWeight = 0;
      }
      curWeight += weight;
    }

    if (need <= days) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,10]\n5\n
// @lcpr case=end

// @lcpr case=start
// [3,2,2,4,1,4]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,1]\n4\n
// @lcpr case=end

 */
