/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right){
        
        let water = (right - left) * Math.min(height[left], height[right])
        maxWater = Math.max(maxWater, water);
        
        if (height[left] < height[right]){
            left ++;
        }else{
            right --;
        }
    }
    
    return maxWater
    
};