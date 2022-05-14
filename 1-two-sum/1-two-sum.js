/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let result = [];
    
    if (nums.length < 2){
        return result;
    }
    
    
    for (let i = 0 ; i < nums.length - 1; i++){    
        for (let j = i + 1; j < nums.length; j ++){
          if (nums[i] + nums[j] === target){
              result = [i,j];
              return result;
          }  
        }      
    }
    
    return result;
};