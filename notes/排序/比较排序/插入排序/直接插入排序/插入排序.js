const arr = [1, 2, 3, 1, 4, 3, 13, 43, 4, 13, 133, 43, 13, 44, 34, 53, 3, 1, 4, 2];

// const insertSort = (arr) => {
// 	let length = arr.length;
// 	for (let i = 1; i < length; i++) {
// 		let target = arr[i];
// 		let j;
// 		for (j = i - 1; j >= 0; j--) {
// 			// 1. 查找，在有序区找到目标元素
// 			if (target > arr[j]) {
// 				break;
// 			}
// 		}
// 		if (j !== i - 1) {
// 			// 将比 target 大的元素都后移一位
// 			for (let k = i - 1; k > j; k--) {
// 				// 2. 挪坑：挪到位置，留出坑位
// 				arr[k + 1] = arr[k];
// 			}
// 			arr[j + 1] = target;
// 		}
// 	}
// 	return arr;
// };

// console.log(insertSort(arr));

// 优化后
const insertSort = (arr) => {
	const length = arr.length;
	for (let i = 1; i < length; i++) {
		const target = arr[i];
		let j;
		// 合并两个内部循环
		for (j = i - 1; j >= 0 && arr[j] > target; j--) {
			// 挪出坑位
			arr[j + 1] = arr[j];
		}
		// 放入坑位
		arr[j + 1] = target;
	}
	return arr;
};
// console.log(insertSort(arr));

// 使用 while 代替
const insertSort2 = (arr) => {
	const length = arr.length;
	for (let i = 1; i < length; i++) {
		// [i, n-1] 是无序区
		let j = i - 1;
		const target = arr[i];
		while (j >= 0 && arr[j] > target) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = target;
	}
	return arr;
};

// console.log(insertSort2(arr));
