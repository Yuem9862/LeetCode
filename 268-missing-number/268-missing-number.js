/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //SOLUTION 1: Hash table
    // let set = new Set (nums)
    // for (let i = 0; i <= nums.length; i++){
    //     if (set.has(i) === false){
    //         return i;
    //     }
    // }
    // return false;
    
    //SOLUTION 2: Array.reduce
    const length = nums.length;
    const sumOfN = (length + 1)*length/2;
    const sumOfArry = nums.reduce((acc,cur) => acc += cur, 0);
    return sumOfN - sumOfArry;
    
};