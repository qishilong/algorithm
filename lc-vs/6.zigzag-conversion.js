/*
 * @lc app=leetcode.cn id=6 lang=javascript
 * @lcpr version=30204
 *
 * [6] Z 字形变换
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 二维矩阵模拟
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//   if (!s || typeof s !== "string" || !numRows || typeof numRows !== "number") {
//     return;
//   }

//   if (!s.trim()) {
//     return s;
//   }

//   const sLength = s.length;

//   if (numRows === 1 || numRows >= sLength) {
//     return s;
//   }

//   // Z 字形变换一周期所需的字符数
//   const oneCycle = numRows + numRows - 2;

//   // 每个周期占用矩阵上多少列
//   const oneCycleCol = numRows - 2 + 1;

//   // 总列数
//   const col = Math.ceil((sLength / oneCycle) * oneCycleCol);

//   const matrix = new Array(numRows).fill(0).map(() => new Array(col).fill(0));

//   for (let i = 0, x = 0, y = 0; i < sLength; i++) {
//     const val = s[i];
//     matrix[x][y] = val;
//     // i 满足 i % oneCycle < oneCycleCol
//     if (i % oneCycle < oneCycleCol) {
//       // 向下移动
//       ++x;
//     } else {
//       // 向右上移动
//       --x;
//       ++y;
//     }
//   }

//   const resultArr = [];

//   for (const row of matrix) {
//     for (const unit of row) {
//       if (unit !== 0) {
//         resultArr.push(unit);
//       }
//     }
//   }

//   return resultArr.join("");
// };

/**
 * 2. 压缩矩阵空间
 * 注意到每次往矩阵的某一行添加字符时，都会添加到该行上一个字符的右侧，且最后组成答案时只会用到每行的非空字符。因此我们可以将矩阵的每行初始化为一个空列表，每次向某一行添加字符时，添加到该行的列表末尾即可。
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//   if (!s || typeof s !== "string" || !numRows || typeof numRows !== "number") {
//     return;
//   }

//   if (!s.trim()) {
//     return s;
//   }

//   const sLength = s.length;

//   if (numRows === 1 || numRows >= sLength) {
//     return s;
//   }

//   const oneCycle = numRows + numRows - 2;

//   const oneCycleCol = numRows - 2 + 1;

//   const matrix = new Array(numRows).fill(0).map((_) => []);

//   for (let i = 0, x = 0; i < sLength; i++) {
//     const val = s[i];
//     matrix[x].push(val);
//     if (i % oneCycle < oneCycleCol) {
//       ++x;
//     } else {
//       --x;
//     }
//   }

//   const resultArr = [];

//   for (const val of matrix) {
//     resultArr.push(val.join(""));
//   }

//   return resultArr.join("");
// };

/**
 * 3. 二维矩阵模拟
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//   if (typeof s !== "string" || !s.trim() || !numRows) {
//     return;
//   }

//   if (numRows === 1) {
//     return s;
//   }

//   const length = s.length;

//   // Z 字形一个周期所需要的字符
//   const oneCycleStr = numRows + numRows - 2;

//   // Z 字形一个周期所需多少列
//   const oneCycleCol = numRows - 2 + 1;

//   // 总共有多少列
//   const cols = Math.ceil((length / oneCycleStr) * oneCycleCol);

//   const matrix = new Array(numRows).fill(0).map(() => new Array(cols).fill(0));

//   for (let i = 0, x = 0, y = 0; i < length; i++) {
//     const char = s[i];
//     matrix[x][y] = char;

//     // 当 i 满足 i % oneCycleStr < oneCycleCol
//     if (i % oneCycleStr < oneCycleCol) {
//       // 向下移动
//       ++x;
//     } else {
//       // 向右上移动
//       --x;
//       ++y;
//     }
//   }

//   const res = [];

//   for (const row of matrix) {
//     for (const unit of row) {
//       if (unit !== 0) {
//         res.push(unit);
//       }
//     }
//   }

//   return res.join("");
// };

/**
 * 4. 压缩矩阵空间
 * 注意到每次往矩阵的某一行添加字符时，都会添加到该行上一个字符的右侧，且最后组成答案时只会用到每行的非空字符。因此我们可以将矩阵的每行初始化为一个空列表，每次向某一行添加字符时，添加到该行的列表末尾即可。
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (typeof s !== "string" || !s.trim() || !numRows) {
    return;
  }

  if (numRows === 1) {
    return s;
  }

  const length = s.length;

  // Z 字形一个周期所需要的字符
  const oneCycleStr = numRows + numRows - 2;

  // Z 字形一个周期所需多少列
  const oneCycleCol = numRows - 2 + 1;

  const matrix = new Array(numRows).fill(0).map(() => []);

  for (let i = 0, x = 0, y = 0; i < length; i++) {
    const char = s[i];
    matrix[x].push(char);
    // 当 i 满足 i % oneCycleStr < oneCycleCol
    if (i % oneCycleStr < oneCycleCol) {
      // 向下移动
      ++x;
    } else {
      // 向右上移动
      --x;
    }
  }

  const res = [];

  for (const row of matrix) {
    res.push(row.join(""));
  }

  return res.join("");
};

const s = "PAYPALISHIRING",
  numRows = 4;
const res = convert(s, numRows);
console.log(res);
// @lc code=end

/*
// @lcpr case=start
// "PAYPALISHIRING"\n3\n
// @lcpr case=end

// @lcpr case=start
// "PAYPALISHIRING"\n4\n
// @lcpr case=end

// @lcpr case=start
// "A"\n1\n
// @lcpr case=end

 */
