/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = 0;
    
    for (const num of nums){
        
        sum += num;
        maxSum = Math.max(maxSum, sum);    
        if(sum < 0){
            sum = 0;
        }
    }
    
    return maxSum;
};