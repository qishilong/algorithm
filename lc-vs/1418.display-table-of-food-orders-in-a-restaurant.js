/*
 * @lc app=leetcode.cn id=1418 lang=javascript
 * @lcpr version=30204
 *
 * [1418] 点菜展示表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  if (!orders || !Array.isArray(orders) || orders.length === 0) {
    return;
  }

  if (orders.length === 1) {
    const currentOrder = orders[0];
    return [
      ["Table", currentOrder[2]],
      [currentOrder[1], "1"],
    ];
  }

  const foodSet = new Set();

  const tableMap = new Map();
  const length = orders.length;
  for (let i = 0; i < length; i++) {
    const currentOrder = orders[i];
    const currentTable = currentOrder[1],
      currentFood = currentOrder[2];

    foodSet.add(currentFood);
    if (tableMap.has(currentTable)) {
      const currentFoodObj = tableMap.get(currentTable);
      tableMap.set(
        currentTable,
        currentFoodObj[currentFood]
          ? {
              ...currentFoodObj,
              [currentFood]: currentFoodObj[currentFood] + 1,
            }
          : {
              ...currentFoodObj,
              [currentFood]: 1,
            },
      );
    } else {
      tableMap.set(currentTable, { [currentFood]: 1 });
    }
  }

  const resultArrLength = tableMap.size + 1;
  const footSetLength = foodSet.size + 1;

  const resultArr = new Array(resultArrLength).fill().map(() => new Array(footSetLength).fill("0"));

  const tableHead = ["Table", ...Array.from(foodSet).sort()];
  resultArr[0] = tableHead;

  const tables = [...tableMap.keys()].sort((a, b) => {
    return Number(a) - Number(b);
  });

  for (let i = 0; i < resultArrLength; i++) {
    for (let j = 0; j < footSetLength; j++) {
      const currentTable = tables[i - 1];
      if (i > 0 && j === 0) {
        resultArr[i][j] = currentTable;
      }
      if (i > 0 && j > 0) {
        const currentFood = tableMap.get(currentTable);
        if (Object.hasOwn(currentFood, resultArr[0][j])) {
          resultArr[i][j] = currentFood[resultArr[0][j]] + "";
        }
      }
    }
  }

  return resultArr;
};

const orders = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"],
];

displayTable(orders);
// @lc code=end

/*
// @lcpr case=start
// [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","FriedChicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]\n
// @lcpr case=end

// @lcpr case=start
// [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","FriedChicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]\n
// @lcpr case=end

// @lcpr case=start
// [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]\n
// @lcpr case=end

 */
