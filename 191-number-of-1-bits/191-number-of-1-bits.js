/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    //SOLUTION 1: convert number to string
    // let array = n.toString(2).split('');
    // let count = 0;
    // for (num of array){
    //   if (num === '1'){
    //     count++;
    //   }
    // }
    // return count;
    
    //SOLUTION 2: bit manipulation
    let counter = 0;
    while (n){
        // counter+= n%2;
        if (n & 1 === 1){
            counter++;
        }
        n>>>=1;
    }
    return counter;
};