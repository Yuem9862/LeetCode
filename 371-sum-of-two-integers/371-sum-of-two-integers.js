/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    //SOLUTION 1: array.reduce
    // const array = [a,b];
    // const result = array.reduce((pre,cur)=>{
    //      return pre = pre + cur;
    // },0);
    
    // return result;
    
    //SOLUTION 2: Math.pow (**)
    // const a2 = 2**a,
    //       b2 = 2**b,
    //       c2 = a2 * b2;
    // return Math.log2(c2);
    
    //SOLUTION 3: bit manipulation 
    // XOR ^ for adding, AND & for carry
    
    let temp;
    while (b !==0){
        temp = (a & b) << 1;
        a = a ^ b;
        b = temp;
    }
    return a;
};