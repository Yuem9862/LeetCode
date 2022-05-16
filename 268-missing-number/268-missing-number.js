/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let set = new Set (nums)
    for (let i = 0; i < nums.length; i++){
        if (set.has(i) === false){
            return i;
        }
    }
    return nums.length;
};