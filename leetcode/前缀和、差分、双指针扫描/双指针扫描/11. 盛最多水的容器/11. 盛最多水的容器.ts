function maxArea(height: number[]): number {
    const length = height.length;
    let max = 0;
    for (let i = 0, j = length - 1; i < j;) {
        const heightI = height[i];
        const heightJ = height[j];
        const min = Math.min(heightI, heightJ);
        max = Math.max(max, min * (j - i));
        if (heightI === heightJ) {
            i++, j--;
        } else if (heightI < heightJ) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};