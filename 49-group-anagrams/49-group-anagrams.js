/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let ans = {};
    
    for (const str of strs){
        
        let protocal = str.split('').sort().join('');
      
        if (!(protocal in ans)){
            ans[protocal] = [];
        }
        
      ans[protocal].push(str);
     
    }

    return Object.values(ans);
};
