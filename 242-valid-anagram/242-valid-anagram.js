/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {

    let stringS = s.split('').sort().join('');
    let stringT = t.split('').sort().join('');

    if (stringS === stringT){
        return true;
    }else{
        return false;
    }
    
    
};
