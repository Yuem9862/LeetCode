/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mySet = new Set(nums);
    if (mySet.size === nums.length){
        return false;
    }else{
        return true;
    }
};