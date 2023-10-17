const arr = [1, 2, 42, 12, 4, 321, 4, 2, 4, 32, 5, 3, 5, 3, 2, 1, 43, 2, 13, 5, 53, 3, 3];

function mergeSort(array) {
	function sort(array, begin, end) {
		if (begin !== end) {
			let mid = begin + ((end - begin) >> 1);
			sort(array, begin, mid);
			sort(array, mid + 1, end);
			const temp = mergeArrayByIndex(array, begin, mid, mid + 1, end);
			for (let i = 0, length = temp.length; i < length; i++) {
				array[begin + i] = temp[i];
			}
		}
	}

	// 合并两个数组
	function mergeArrayByIndex(arr, begin, end, begin1, end1) {
		const resultArr = [];
		let indexA = begin,
			indexB = begin1,
			indexMerge = 0;
		while (indexA <= end && indexB <= end1) {
			resultArr[indexMerge++] = arr[indexA] < arr[indexB] ? arr[indexA++] : arr[indexB++];
		}
		while (indexA <= end) {
			resultArr[indexMerge++] = arr[indexA++];
		}
		while (indexB <= end1) {
			resultArr[indexMerge++] = arr[indexB++];
		}
		return resultArr;
	}

	sort(array, 0, array.length - 1);
	return array;
}

const result = mergeSort(arr);
console.log(result);

const mergeSortFn = (arr, left, right) => {
	if (left >= right) {
		return;
	}
	const mid = (left + right) >> 1;
	mergeSortFn(arr, left, mid);
	mergeSortFn(arr, mid + 1, right);
	merge(arr, left, mid, right);
	return arr;
};

const merge = (arr, left, mid, right) => {
	const temp = new Array(right - left + 1); // 临时数组
	let i = left,
		j = mid + 1;

	// 合并两个有序数组
	for (let k = 0, length = temp.length; k < length; k++) {
		if (j > right || (i <= mid && arr[i] <= arr[j])) {
			temp[k] = arr[i++];
		} else {
			temp[k] = arr[j++];
		}
	}

	// 拷回原数组
	for (let n = 0, len = temp.length; n < len; n++) {
		arr[left + n] = temp[n];
	}
};

const resultFn = mergeSortFn(arr, 0, arr.length - 1);
console.log(resultFn);
