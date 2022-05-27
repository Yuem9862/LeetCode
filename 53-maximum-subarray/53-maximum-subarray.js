/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    if (nums.length === 0){
        return false;
    }
      
    let maxSum = nums[0];
    let currentSum = nums[0];
         
    for (let i = 1 ; i < nums.length; i++){
        if (currentSum <0){
            currentSum = nums[i];
        }else{
            currentSum = currentSum + nums[i];
        }
        
        maxSum = Math.max(maxSum, currentSum);
      
    }
    return maxSum;
};