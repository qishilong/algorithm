/**
 * 1. 哈希表
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs || !Array.isArray(strs)) {
    return strs
  }

  if (strs.length === 0) {
    return []
  }

  if (strs.length === 1) {
    return [[strs[0]]]
  }

  const map = new Map(),
    length = strs.length

  for (let i = 0; i < length; i++) {
    const str = strs[i]
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("")

    if (!map.has(str)) {
      map.set(str, [])
    }
    map.get(str).push(strs[i])
  }

  return [...map.values()]
}
