function twoSum(numbers: number[], target: number): number[] {
    // numbers[i]+numbers[j] = target;
    // target - numbers[j] = numbers[i];

    // 双指针实现
    // const length = numbers.length;
    // let j = length-1;
    // const arr = [];
    // for(let i = 0;i<length;i++){
    //     arr.push({
    //         value: numbers[i],
    //         index: i,
    //     })
    // }

    // arr.sort((a,b)=>a.value-b.value);

    // for(let i = 0;i<j;i++){
    //     while(i<j && arr[i].value + arr[j].value > target){
    //         j--;
    //     }
    //     if(i<j && arr[i].value + arr[j].value === target){
    //         return [arr[i].index,arr[j].index]
    //     }
    // }
    // return [];

    // HashMap实现
    const map = new Map();
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        if (map.has(target - numbers[i])) {
            return [map.get(target - numbers[i]), i];
        }
        map.set(numbers[i], i);
    }
    return [];
};