/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    
    //find the degree
    
    let map = {};
    
    for (let i = 0; i < nums.length; i++){
        if (!map[nums[i]]){
            map[nums[i]] = 0;
        }
        map[nums[i]]++;
    }
    
    const arrOfValues = Object.values(map);


    const maxValue = arrOfValues.sort((a,b)=>b-a)[0];
    
    const degrees = Object.keys(map).filter(key => map[key] === maxValue);
    
    
    //find the starting and ending index of the degree
    
    let ans = Infinity;
    
    for (const degreeStre of degrees){
    
        const degree = parseInt(degreeStre)
 
        let startingIndex = 0;
        let endingIndex = nums.length - 1;
    
        for (let i = 0; i < nums.length; i++){
            if (nums[i] === degree){
                startingIndex = i;
                break;
            }    
        }
    
        for (let i = nums.length - 1; i >= 0; i--){
            if (nums[i] === degree){
                endingIndex = i;
                break;
            }
        }
    
        ans = Math.min(ans, endingIndex - startingIndex + 1)
    }
    
    return ans;
};