/**
 * 1. 暴力
 * leetcode 超时
 * @param {number} n
 * @return {number}
 */
// var monotoneIncreasingDigits = function (n) {
//   if (n < 10) {
//     return n
//   }
//   if (n === 10) {
//     return 9
//   }

//   if (n > 10 && n <= 12) {
//     return 11
//   }

//   // 判断一个数字的各位位数是否递增
//   const fn = (num) => {
//     const numStr = num.toString()
//     for (let i = 1, length = numStr.length; i < length; i++) {
//       if (numStr[i] < numStr[i - 1]) {
//         return false
//       }
//     }
//     return true
//   }

//   let result = undefined

//   // 从大到小遍历
//   for (let i = n; i >= 0; i--) {
//     if (fn(i)) {
//       result = i
//       break
//     }
//   }

//   if (result === undefined) {
//     throw new Error()
//   }

//   return result
// }

/**
 * 2. 贪心
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  if (n < 10) {
    return n
  }
  if (n === 10) {
    return 9
  }

  if (n > 10 && n <= 12) {
    return 11
  }

  // 需要转换为数组，字符串无法在确定的某一下标直接修改值
  const nArr = n
      .toString()
      .split("")
      .map((item) => parseInt(item)),
    length = nArr.length
  // flag 用来标记从哪里开始赋值 9
  // 设置为这个默认值，未来防止第二个 for 循环在 flag 没有赋值的情况下执行
  let flag = length

  for (let i = length - 1; i > 0; i--) {
    if (nArr[i] < nArr[i - 1]) {
      flag = i
      nArr[i - 1]--
    }
  }

  for (let i = flag; i < length; i++) {
    nArr[i] = 9
  }

  return Number(nArr.join(""))
}
