/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    const array = [a,b];
    const result = array.reduce((pre,cur)=>{
       return pre = pre + cur;
    },0);
    
    return result;
};