// 解法一
function transpose(matrix: number[][]): number[][] {
    const itemLength = matrix[0].length;
    const length = matrix.length;
    const resultArr: number[][] = [];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < itemLength; j++) {
            if (!resultArr[j]) {
                resultArr[j] = [];
            }
            resultArr[j][i] = matrix[i][j];
        }
    }
    return resultArr;
};

// 解法二
// function transpose(matrix: number[][]): number[][] {
//     return matrix[0].map((item, i) => matrix.map((v, j) => v[i]));
// };