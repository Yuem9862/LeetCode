/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let myNums = nums;
    myNums.sort((a,b)=>a-b);
    return myNums[0];
};