/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let hash = {};
    
    strs.forEach((str)=>{
        let sortedStr = str.split('').sort();
        if (!(sortedStr in hash)){
            hash[sortedStr] = [];
        }
        hash[sortedStr].push(str);
    });
    
        
    return Object.values(hash);
};