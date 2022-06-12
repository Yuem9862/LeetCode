/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    
    for (let i = 0 ; i <= n; i ++){
        
        let numInBinary = i;
        
        //counting number of i in num
        let counter = 0;
        
        while(numInBinary){
            
            if (numInBinary & 1 === 1){
                counter++;
            }
            
            numInBinary = numInBinary >> 1;
        }
            
        ans.push(counter);
    }
    
    return ans;
};