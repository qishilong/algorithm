/**
 * 1. 贪心
 * 按照身高排序之后，优先按身高高的people的k来插入，后序插入节点也不会影响前面已经插入的节点，最终按照k的规则完成了队列。
 * 在按照身高从大到小排序后：
 * 局部最优：优先按身高高的people的k来插入。插入操作过后的people满足队列属性
 * 全局最优：最后都做完插入操作，整个队列满足题目队列属性
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const res = []

  // 身高从大到小排（身高相同 k 小的站前面）
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0]
    } else {
      return a[1] - b[1]
    }
  })

  // 优先按身高高的 people 的 k 插入
  for (let i = 0, length = people.length; i < length; i++) {
    res.splice(people[i][1], 0, people[i])
  }

  return res
}
