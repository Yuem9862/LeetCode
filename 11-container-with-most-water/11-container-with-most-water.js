/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let left = 0,
       right = height.length - 1,
       maxWater = null;
    
    while (left < right){
        
        const water = (right - left) * Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, water);
        
        if (height[left] <= height[right]){
            left++;
        }else{     
            right--;
        }
        
      
    }
    
    return maxWater;
};