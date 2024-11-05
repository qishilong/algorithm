/**
 * 1. 贪心
 * 只需要维护三种金额的数量，5，10和20。
 * 有如下三种情况：
 * 情况一：账单是5，直接收下。
 * 情况二：账单是10，消耗一个5，增加一个10
 * 情况三：账单是20，优先消耗一个10和一个5，如果不够，再消耗三个5
 * 情况三逻辑也不复杂甚至感觉纯模拟就可以了，其实情况三这里是有贪心的。
 * 账单是20的情况，为什么要优先消耗一个10和一个5呢？
 * 因为美元10只能给账单20找零，而美元5可以给账单10和账单20找零，美元5更万能！
 * 所以局部最优：遇到账单20，优先消耗美元10，完成本次找零。全局最优：完成全部账单的找零。
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills.length <= 0) {
    return true;
  }
  if (bills.length === 1 && bills[0] === 5) {
    return true;
  }
  let five = 0,
    ten = 0,
    twenty = 0;

  for (let i = 0, length = bills.length; i < length; i++) {
    if (bills[i] === 5) {
      // 情况一
      five++;
    } else if (bills[i] === 10) {
      // 情况二
      if (five <= 0) {
        return false;
      }
      ten++;
      five--;
    } else if (bills[i] === 20) {
      // 情况三
      if (ten > 0 && five > 0) {
        // 优先消耗 10 美元，因为 5 美元的找零用处更大，能多留着就多留着
        ten--;
        five--;
        twenty++; // 其实这行代码可以善良，因为记录 20 已经没有意义了，不会用 20 来找零
      } else if (five >= 3) {
        five -= 3;
        twenty++; // 同理，这行代码也可以删了
      } else {
        return false;
      }
    }
  }

  return true;
};
