/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    if (!nums.length) return 0;
    
    nums.sort((a,b)=>a-b);
  
    let maxLength = 1;
    let length = 1;
  
    for (let i = 1; i < nums.length; i++){
      if (nums[i] === nums[i-1] + 1){
        length++;
        maxLength = Math.max(maxLength, length);
      } else if(nums[i] === nums[i-1]){
        continue;
      }else{
        length = 1;  
      }
    }
  return maxLength;
};