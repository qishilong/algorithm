function longestPalindrome(s: string): number {
    const counter = {};
    const length = s.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
        counter[s[i]] = 0;
    }
    for (let i = 0; i < length; i++) {
        counter[s[i]]++;
    }
    for (let key in counter) {
        result += Math.floor(counter[key] / 2) * 2;
        if (counter[key] % 2 === 1 && result % 2 === 0) {
            result++;
        }
    }
    return result;

    // const map = new Map();
    // const length = s.length;
    // let result = 0;
    // for(let i = 0; i<length;i++){
    //     const count = map.get(s[i]);
    //     map.set(s[i], count ? (count + 1) : 1);
    // }

    // map.forEach(item=>{
    //     result += Math.floor(item/2) * 2;
    //     if(item % 2 === 1 && result % 2 === 0){
    //         result ++;
    //     }
    // })
    // return result;
};