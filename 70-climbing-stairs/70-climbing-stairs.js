/**
 * @param {number} n
 * @return {number}
 */
const cache = {};

var climbStairs = function(n) {
    
    if(cache[n]){
        return cache[n];
    }
    
    if(n<=3){
        return n;
    }
    
        cache[n] = climbStairs(n-1)+climbStairs(n-2);
        return cache[n] ;
    
    
    
};