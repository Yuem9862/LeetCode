/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
// Option 1: O(n^2)
//     let result = [];
    
//     if (nums.length < 2){
//         return result;
//     }
    
    
//     for (let i = 0 ; i < nums.length - 1; i++){    
//         for (let j = i + 1; j < nums.length; j ++){
//           if (nums[i] + nums[j] === target){
//               result = [i,j];
//               return result;
//           }  
//         }      
//     }
    
//   return result;
    
    
    
//use map to store value - index pair
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    const num2 = target - num1;

    if (map[num2] >= 0) {
      return [i, map[num2]];
    } else {
      map[num1] = i;
    }
  }
    
};