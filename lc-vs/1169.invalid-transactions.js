/*
 * @lc app=leetcode.cn id=1169 lang=javascript
 * @lcpr version=30204
 *
 * [1169] 查询无效交易
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 暴力计算
 * 无招，硬算
 * 在每个交易后面添加一个状态码用来判断当前交易是否已经已经添加到答案中
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  if (!transactions || !Array.isArray(transactions) || transactions.length === 0) {
    return [];
  }

  transactions = transactions.map((item) => {
    return item + ",false";
  });

  const length = transactions.length,
    ans = [],
    map = new Map();

  for (let i = 0; i < length; i++) {
    const current = transactions[i],
      currentArr = current.split(",");
    const name = currentArr[0],
      time = currentArr[1],
      coin = currentArr[2],
      city = currentArr[3];

    if (coin > 1000) {
      ans.push(currentArr.slice(0, currentArr.length - 1).join(","));
      currentArr[currentArr.length - 1] = "true";
    }

    if (map.has(name)) {
      const val = map.get(name);
      if (val.has(city)) {
        val.get(city).push([time, city, currentArr]);
      } else {
        val.set(city, [[time, city, currentArr]]);
      }
    } else {
      const valMap = new Map();
      map.set(name, valMap.set(city, [[time, city, currentArr]]));
    }
  }

  map.forEach((val, key) => {
    const currentName = [];
    val.forEach((val, key) => {
      currentName.push(val);
    });
    const length = currentName.length;
    if (length > 1) {
      for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
          currentName[i].forEach((x) => {
            currentName[j].forEach((y) => {
              if (Math.abs(Number(x[0]) - Number(y[0])) <= 60) {
                console.log(x, y);
                if (x[2][4] !== "true") {
                  ans.push(x[2].slice(0, x[2].length - 1).join(","));
                  x[2][4] = "true";
                }
                if (y[2][4] !== "true") {
                  ans.push(y[2].slice(0, y[2].length - 1).join(","));
                  y[2][4] = "true";
                }
              }
            });
          });
        }
      }
    }
  });

  return ans;
};

const transactions = [
  "alex,676,260,bangkok",
  "bob,656,1366,bangkok",
  "alex,393,616,bangkok",
  "bob,820,990,amsterdam",
  "alex,596,1390,amsterdam",
];
invalidTransactions(transactions);
// @lc code=end

/*
// @lcpr case=start
// ["alice,20,800,mtv","alice,50,100,beijing"]\n
// @lcpr case=end

// @lcpr case=start
// ["alice,20,800,mtv","alice,50,1200,mtv"]\n
// @lcpr case=end

// @lcpr case=start
// ["alice,20,800,mtv","bob,50,1200,mtv"]\n
// @lcpr case=end

 */
