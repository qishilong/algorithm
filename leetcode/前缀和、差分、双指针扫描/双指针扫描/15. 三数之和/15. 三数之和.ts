function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    const result: number[][] = [];
    for (let i = 0; i < length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        twoSum(nums, i + 1, -nums[i]).forEach(item => {
            console.log(item);
            result.push([nums[i], ...item]);
        });
    }
    return result;
};


function twoSum(numbers: number[], start: number, target: number): number[][] {
    const length = numbers.length;
    let j = length - 1;
    const arr: number[][] = [];
    console.log(numbers, start, target);
    for (let i = start; i < length; i++) {
        if (i > start && numbers[i] === numbers[i - 1]) {
            continue;
        }
        while (i < j && numbers[i] + numbers[j] > target) {
            j--;
        }
        if (i < j && numbers[i] + numbers[j] === target) {
            arr.push([numbers[i], numbers[j]]);
        }
    }
    return arr;
};

const nums = [3, 0, -2, -1, 1, 2];
console.log(threeSum(nums));