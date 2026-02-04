/**
 * 1. 字符串分割
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// var compareVersion = function (version1, version2) {
//   if (!version1 && !version2) {
//     return -2;
//   }

//   if (!version1 && version2) {
//     return -1;
//   }

//   if (version1 && !version2) {
//     return 1;
//   }

//   const version1Arr = version1.split("."),
//     version2Arr = version2.split(".");

//   if (version1Arr.length === 1 && version2Arr.length === 1 && +version1Arr[0] === +version2Arr[0]) {
//     return 0;
//   }

//   const length = Math.min(version1Arr.length, version2Arr.length);
//   let result = undefined;

//   for (let i = 0; i < length; i++) {
//     const curVersion1 = +version1Arr[i],
//       curVersion2 = +version2Arr[i];

//     if (result) {
//       return result;
//     }

//     if (curVersion1 === curVersion2) {
//       result = 0;
//       continue;
//     }

//     result = curVersion1 > curVersion2 ? 1 : -1;
//   }

//   if (version1Arr.length === version2Arr.length && version2Arr.length === length) {
//     return result;
//   }

//   if (!result) {
//     let remainingArrStr;
//     if (version1Arr.length === length) {
//       remainingArrStr = version2Arr.slice(length).join("");
//       if (+remainingArrStr) {
//         return -1;
//       }
//     } else {
//       remainingArrStr = version1Arr.slice(length).join("");

//       if (+remainingArrStr) {
//         return 1;
//       }
//     }
//     return 0;
//   }

//   return result;
// };

/**
 * 2. 字符串分割
 * 简单写法
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// var compareVersion = function (version1, version2) {
//   if (!version1 && !version2) {
//     return -2;
//   }

//   if (!version1 && version2) {
//     return -1;
//   }

//   if (version1 && !version2) {
//     return 1;
//   }

//   const version1Arr = version1.split("."),
//     version2Arr = version2.split("."),
//     version1Length = version1Arr.length,
//     version2Length = version2Arr.length;

//   if (version1Arr.length === 1 && version2Arr.length === 1 && +version1Arr[0] === +version2Arr[0]) {
//     return 0;
//   }

//   for (let i = 0; i < version1Length || i < version2Length; i++) {
//     let v1 = 0,
//       v2 = 0;

//     if (i < version1Length) {
//       v1 = parseInt(version1Arr[i]);
//     }

//     if (i < version2Length) {
//       v2 = parseInt(version2Arr[i]);
//     }

//     if (v1 > v2) {
//       return 1;
//     }

//     if (v1 < v2) {
//       return -1;
//     }
//   }
//   return 0;
// };

/**
 * 3. 双指针
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  if (!version1 && !version2) {
    return -2;
  }

  if (!version1 && version2) {
    return -1;
  }

  if (version1 && !version2) {
    return 1;
  }

  const version1Length = version1.length,
    version2Length = version2.length;

  let i = 0,
    j = 0;

  while (i < version1Length || j < version2Length) {
    let x = 0;
    for (; i < version1Length && version1[i] !== "."; i++) {
      x = x * 10 + parseInt(version1[i]);
    }

    // 跳过点号
    i++;
    let y = 0;
    for (; j < version2Length && version2[j] !== "."; j++) {
      y = y * 10 + parseInt(version2[j]);
    }

    // 跳过点号
    j++;
    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
};
