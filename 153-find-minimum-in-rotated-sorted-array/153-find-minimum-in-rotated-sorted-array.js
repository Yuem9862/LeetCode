/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //binary search
    let l = 0;
    let r = nums.length - 1;
    
    while (l < r){
        
        let mid = Math.floor((l + r) /2);
        
        if (nums[mid] < nums[mid - 1]){
            return nums[mid]
        }
        
        if (nums[l] <= nums[mid] && nums[mid] > nums[r]){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
        
        
    }
    
    return nums[l];
    
};