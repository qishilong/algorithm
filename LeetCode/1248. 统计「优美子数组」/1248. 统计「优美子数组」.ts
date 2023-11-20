function numberOfSubarrays(nums: number[], k: number): number {
    nums.unshift(0);
    const numsLength = nums.length;

    const s = new Array(numsLength).fill(0);
    for (let i = 1; i < numsLength; i++) {
        s[i] = s[i - 1] + nums[i] % 2;
    }

    const countArr = new Array(numsLength).fill(0);
    for (let i = 0; i < numsLength; i++) {
        countArr[s[i]] += 1;
    }

    let count = 0;
    for (let i = 1; i < numsLength; i++) {
        if (s[i] - k >= 0) {
            count += countArr[s[i] - k];
        }
    }

    return count;
};

// const result = numberOfSubarrays([1, 1, 2, 1, 1], 3);
// console.log(result)

/*
    示例 1：
    输入：nums = [1,1,2,1,1], k = 3
    输出：2
    解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。

    示例 2：
    输入：nums = [2,4,6], k = 1
    输出：0
    解释：数列中不包含任何奇数，所以不存在优美子数组。

    示例 3：
    输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
    输出：16
*/