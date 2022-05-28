/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //solution 1: Array.prototype.sort(compareFunc)
    // nums.sort((a,b)=>a-b);
    // return nums[0];
    
    //solution 2: binary search, two indicators from head/tail to center
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right){
        let middle = Math.floor((left + right)/2)
        if (nums[middle] > nums[right]){
            left = middle + 1;
        }else{
            right = middle;
        }
    }
    
    return nums[left];
    
};