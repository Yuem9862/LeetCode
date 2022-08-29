/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length){
        return false;
    }
    
    let map = {};
    
    for (const char of s){
        if (!map[char]){
            map[char] = 0;
        }
        map[char]++;
    }
    
    for (const char of t){
        if (!map[char]){
            return false;
        }
        map[char]--;
    }
    
    if(Object.values(map).find(num => num!==0)){
        return false;
    }
    
    return true;
};