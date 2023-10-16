const arr = [1, 2, 3, 43, 14, 53, 21, 4532, 52, 14, 53, 14, 53, 2, 52, 452];

/**
 * 快速排序
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 */
const quickSort = (arr, left, right) => {
	let _left = left;
	let _right = right;
	// 待排序的元素至少有两种情况
	if (_left <= _right) {
		const temp = arr[_left]; // 待排序的第一个元素作为基准元素
		while (_left !== _right) {
			// 从左右两边交替扫描，直到 _left === _right
			//从右往左扫描，找到第一个比基准元素小的元素
			while (_left < _right && arr[_right] >= temp) {
				_right--;
			}
			//找到这种元素arr[_right]后与arr[_left]交换
			arr[_left] = arr[_right];
			//从左往右扫描，找到第一个比基准元素大的元素
			while (_left < _right && arr[_left] <= temp) {
				_left++;
			}
			//找到这种元素arr[_left]后，与arr[_right]交换
			arr[_right] = arr[_left];
		}
		//基准元素归位
		arr[_right] = temp;
		//对基准元素左边的元素进行递归排序
		quickSort(arr, left, _left - 1);
		//对基准元素右边的进行递归排序
		quickSort(arr, _right + 1, right);
	}
	return arr;
};
const result = quickSort(arr, 0, arr.length - 1);
console.log(result);
