/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
    let ans = [];
    let numberOfBits;
    for (i = 0; i <= n; i++){
      numberOfBits = i.toString(2).replaceAll('0','').length;
      console.log(numberOfBits);
      ans.push(numberOfBits);
    }
    return ans;
    
};