/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let hash = {};
    let result = [];
    strs.forEach((str)=>{
        let sortedStr = str.split('').sort();
        if (!(sortedStr in hash)){
            hash[sortedStr] = [];
        }
        hash[sortedStr].push(str);
    });
    
    for (const property in hash){
        let wordsArray = hash[property];
        result.push(wordsArray);
    }
    
    return result;
};