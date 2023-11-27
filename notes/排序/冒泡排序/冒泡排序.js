/**
 * 冒泡排序
 * 双重循环
 * @param {*} array
 */
// const bubbleSort = (array) => {
// 	const length = array.length;
// 	for (let i = 1; i < length; i++) {
// 		for (let j = 0; j < length - i; j++) {
// 			if (array[j] > array[j + 1]) {
// 				swap(array, j, j + 1);
// 			}
// 		}
// 	}
// 	return array;
// };

// 优化1
// 如果数组本来就是有序的，[1,2,3,4]，可以在内部循环中引入访问标志位，这里的标志位是为了记录：在一次外循环中，若满足比较条件则进行交换，并更改标志位。如果在一次外循环中标志位没有动过，说明原本该子数组是有序的，无序交换，那么下轮循环不需要进行。
// const bubbleSort = (array) => {
// 	const length = array.length;
// 	for (let i = 1; i < length; i++) {
// 		let flag = true;
// 		for (let j = 0; j < length - i; j++) {
// 			if (array[j] > array[j + 1]) {
// 				swap(array, j, j + 1);
// 				flag = false;
// 			}
// 		}
// 		if (flag) {
// 			break;
// 		}
// 	}
// 	return array;
// };

// 优化2
// 每次排序结束时，最后一个元素总是最大的，所以，可以设置一个临时变量记录叫的位置，在内部循环结束后，将最后一个交换元素的位置赋值给k，这样可节省下一轮内部循环时，从位置k到 n-i 的比较交换“开销”
// const bubbleSort = (array) => {
// 	let length = array.length,
// 		k = length - 1,
// 		pos = 0;
// 	for (let i = 1; i < length; i++) {
// 		let flag = true;
// 		for (let j = 0; j < k; j++) {
// 			if (array[j] > array[j + 1]) {
// 				swap(array, j, j + 1);
// 				flag = false;
// 				pos = j;
// 			}
// 		}
// 		if (flag) {
// 			break;
// 		}
// 		k = pos; // 重写内部循环的最后边界
// 	}
// 	return array;
// };

// 鸡尾酒排序
// 双端排序
const doubleBubbleSort = (array) => {
	let left = 0,
		right = array.length - 1,
		index = left, // 临时变量
		i;
	// 判断数组中是否有多个元素
	while (left < right) {
		let sort = false;
		for (i = left; i < right; i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1);
				index = i; // 记录当前索引
				sort = true;
			}
		}
		right = index; // 记录最后一个交换的位置
		// 小的放前面
		for (i = right; i > left; i--) {
			if (array[i] < array[i - 1]) {
				swap(array, i, i - 1);
				index = i;
				sort = true;
			}
		}
		// 记录最后一个交换的位置
		left = index;
		if (!sort) {
			break;
		}
	}
	return array;
};

// 交换
const swap = (arr, x, y) => {
	const temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

const arr = [1, 3, 6, 7, 2, 13, 5, 2, 1, 2, 1, 7, 9];
const result = doubleBubbleSort(arr);
console.log(result);
