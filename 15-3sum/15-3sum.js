/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    //2 pointers, 2sum
    
    nums.sort((a,b)=> {
        return a-b;
    });
    
    let result = [];
    
    for (let i = 0; i < nums.length; i++){
        
        //if the left pointer is positive, the sum will alwasy be positive
        if (nums[i]>0){
            break;
        }
        
        //if prior number equals current number, skip the iteration
        if (i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        
        let left = i + 1,
            right = nums.length -1;
        
        while (left < right){
            
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0){
                result.push([nums[i], nums[left], nums[right]])
                left++;
                right--;
                
                //left pointer skips duplicates
                while (left < right && nums[left] === nums[left - 1]){
                    left ++;
                }
            
            }else if (sum < 0){
                left++;
            }else{
                right--;
            }
        }
        
    }
    
    return result;
    
    
}