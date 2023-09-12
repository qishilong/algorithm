/**
 * 交换
 * @param {*} n1
 * @param {*} n2
 */

// 方法一
// 适用于大多数类型
const swap = (n1, n2) => {
	const temp = n1;
	n1 = n2;
	n2 = temp;
};

// 方法二
// 适用于整数
const swap1 = (n1, n2) => {
	n1 = n1 + n2;
	n2 = n1 - n2;
	n1 = n1 - n2;
};

// 适用于整数
const swap2 = (n1, n2) => {
	n1 = n1 ^ n2;
	n2 = n1 ^ n2;
	n1 = n1 ^ n2;
};
