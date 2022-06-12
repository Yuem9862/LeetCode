/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    
    for (let i = 0 ; i <= n; i ++){
        
        //counting number of 1's in the number i
        let numInBinary = i;     
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