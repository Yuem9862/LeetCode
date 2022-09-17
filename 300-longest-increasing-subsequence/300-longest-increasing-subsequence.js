/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    let dp = new Array(len).fill(1);
  
    for (let i = 1 ; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[i] <= dp[j]) {
                dp[i] = dp[j] + 1;
            }
        }
      
     
    };
     return Math.max(...dp);
}