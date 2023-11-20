// 前缀和
function maxSubArray(nums: number[]): number {
    // 前缀和 S[i]-S[j] 最大
    const length = nums.length;
    const sums = new Array(length + 1).fill(0);
    for (let i = 1; i <= length; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }
    let max = -Infinity,    // 题目 nums[i] 的取值范围是 -10000 <= nums[i] <= 10000
        pre_min = sums[0];
    for (let i = 1; i <= length; i++) {
        max = Math.max(max, sums[i] - pre_min);
        pre_min = Math.min(sums[i], pre_min);
    }
    return max;
};

// 贪心
// 只要“和”是正的，就不断向右扩展，一旦“和”小于0，就立即舍弃，重新将sum赋值为0
// function maxSubArray(nums: number[]): number {
//     let max = -Infinity, sum = 0;
//     const length = nums.length;
//     for(let i = 0;i<length;i++){
//         sum += nums[i];
//         max = Math.max(max, sum);
//         if(sum < 0){
//             sum = 0;
//         }
//     }
//     return max;
// };