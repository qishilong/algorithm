var removeDuplicates = function (nums) {
	let n = 0;
	const length = nums.length;
	for (let i = 0; i < length; i++) {
		if (i === 0 || nums[i] !== nums[i - 1]) {
			nums[n] = nums[i];
			n++;
		}
	}
	return n;
};

// 输入 nums: [1,1,2]
// 输出 2

// 输入 nums: [1,2,2,3]
// 输出 3
