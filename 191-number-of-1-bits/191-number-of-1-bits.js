/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let array = n.toString(2).split('');
    let count = 0;
    for (num of array){
      if (num === '1'){
        count++;
      }
    }
    return count;
};