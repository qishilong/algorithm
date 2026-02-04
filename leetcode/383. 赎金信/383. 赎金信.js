/**
 * 哈希表 数组
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const hashArr = new Array(26).fill(0),
    baseIndex = "a".charCodeAt();
  for (let i = 0, lenI = magazine.length; i < lenI; i++) {
    hashArr[magazine[i].charCodeAt() - baseIndex]++;
  }
  for (let j = 0, lenJ = ransomNote.length; j < lenJ; j++) {
    const index = ransomNote[j].charCodeAt() - baseIndex;
    if (!hashArr[index]) {
      return false;
    }
    hashArr[index]--;
  }
  return true;
};

const ransomNote = "a",
  magazine = "b";

const result = canConstruct(ransomNote, magazine);
console.log(result);
