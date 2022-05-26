/**
 * @param {number} n
 * @return {number}
 */


let cache = {};
 

var climbStairs = function(n) {
    if (n in cache){
           return cache[n];
    }else{
        if(n<=2){
            return n;
        }else{
            cache[n] = climbStairs(n-1) + climbStairs(n-2);
            return cache[n];
        };
    };
};
