/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, memo={}) {
    if(s in memo){
        return memo[s];
    }
    
    if(!s){
        return true;
    }
    
    for (const word of wordDict){
        if (s.indexOf(word) === 0){
            if(wordBreak(s.slice(word.length), wordDict, memo)){
                memo[s] === true;
                return true;
            }
        }
        
    }
    
    memo[s] = false;
    
    return false;
    
};