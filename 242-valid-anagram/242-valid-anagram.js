/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {

    // SOLUTION 1: ARRAY
//     let stringS = s.split('').sort().join('');
//     let stringT = t.split('').sort().join('');

//     if (stringS === stringT){
//         return true;
//     }else{
//         return false;
//     }
    
    
    // SOLUTION 2: HASH TABLE
    const hash = {};
    
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (!(char in hash)){
            hash[char] = 0;    
        }
        hash[char]++;
    }

    for (let j = 0; j < t.length; j++){
        let char2 = t[j];
        if (char2 in hash){
            hash[char2]--;
        }else{
            return false;
        }
    }

    for (const property in hash){
        if (hash[property] !== 0){
            return false;
        }
    }
    
    return true;
};
