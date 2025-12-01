/*
 * @lc app=leetcode.cn id=43 lang=javascript
 * @lcpr version=30204
 *
 * [43] 字符串相乘
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 模拟竖式乘法
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function (num1, num2) {
//   if (!num1 || !num2 || typeof num1 !== "string" || typeof num2 !== "string") return;

//   if ((num1.length === 1 && num1[0] === "0") || (num2.length === 1 && num2[0] === "0")) {
//     return "0";
//   }

//   const num1Length = num1.length;

//   let res = 0,
//     payload = 1;

//   /**
//    * 两数相加
//    * @param {string} str1
//    * @param {string} str2
//    * @param {number} length
//    */
//   const addFn = (str1, str2) => {
//     if (!str1) {
//       return str2;
//     }
//     if (!str2) {
//       return str1;
//     }

//     let offset = 0,
//       j = 0;

//     const maxLength = Math.max(str1.length, str2.length);

//     if (str1.length !== str2.length) {
//       if (str1.length < maxLength) {
//         str1 = str1.padStart(maxLength, "0");
//       } else {
//         str2 = str2.padStart(maxLength, "0");
//       }
//     }

//     resStr = new Array(maxLength).fill(0);

//     for (let i = maxLength - 1; i >= 0; i--) {
//       let num1 = Number(str1[i]),
//         num2 = Number(str2[i]);
//       let res = 0;

//       if (offset > 0) {
//         num1 += offset;
//         offset = 0;
//       }
//       res = num1 + num2;

//       if (res >= 10) {
//         if (i === 0) {
//           resStr[j] = res;
//         } else {
//           resStr[j] = res % 10;
//         }
//         offset = Math.floor(res / 10);
//       } else {
//         resStr[j] = res;
//         offset = 0;
//       }

//       j++;
//     }

//     return resStr.reverse().join("");
//   };

//   /**
//    * 多数相加
//    * @param {string[]} strArr
//    * @param {number} times
//    */
//   const multipleAddFn = (strArr) => {
//     const length = strArr.length;

//     if (length === 1) {
//       return addFn(strArr[0], "");
//     }

//     let res = addFn(strArr[0], strArr[1]);

//     if (length === 2) {
//       return res;
//     }

//     for (let i = 2; i < strArr.length; i++) {
//       res = addFn(res, strArr[i]);
//     }

//     return res;
//   };

//   const resArr = [];

//   for (let i = num1Length - 1; i >= 0; i--) {
//     const arr = new Array(Number(num1[i])).fill(num2);
//     let val = multipleAddFn(arr);

//     if (payload > 1 && val) {
//       val = val + "0".repeat(payload - 1);
//     }
//     resArr.push(val);

//     payload++;
//   }

//   res = multipleAddFn(resArr);

//   return res;
// };

/**
 * 2. 优化竖式乘法
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const m = num1.length;
  const n = num2.length;
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const res = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = Number(num1[i]) * Number(num2[j]);
      const p1 = i + j;
      const p2 = i + j + 1;
      const total = mul + res[p2];
      res[p1] += Math.floor(total / 10);
      res[p2] = total % 10;
    }
  }
  let ans = "";
  for (const num of res) {
    if (!(ans.length === 0 && num === 0)) {
      ans += num.toString();
    }
  }
  if (ans.length) {
    return ans;
  } else {
    return "0";
  }
};

const num1 = "123456789",
  num2 = "987654321";

multiply(num1, num2);
// @lc code=end

/*
// @lcpr case=start
// "2"\n"3"\n
// @lcpr case=end

// @lcpr case=start
// "123"\n"456"\n
// @lcpr case=end

 */
