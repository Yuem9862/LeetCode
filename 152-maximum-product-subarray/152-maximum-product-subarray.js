/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    //Hint 1: Product of subarray[i, j] = prefixProduct[j] / prefixProduct[i - 1]
    //Hint 2: 1 is a number "neutral" to multiplication
    
    if (nums.length === 1){
        return nums[0];
    }
    
    let curPrefix = 1;
    let firstNegative = 1;
    let maxProduct = 0;
  
    for (let i = 0; i < nums.length; i++){
        curPrefix *= nums[i];
        
        if (curPrefix > 0){
            maxProduct = Math.max(curPrefix, maxProduct);
        }else if(curPrefix < 0){
            maxProduct = Math.max(curPrefix / firstNegative, maxProduct);
            firstNegative = firstNegative == 1? curPrefix : firstNegative;
        }else{
            curPrefix = 1;
            firstNegative = 1;
        }
    }
    
    return maxProduct;
};