/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //sliding window
    
    let leftWindow = 0;
    let rightWindow = 0;
    let longestSub = 0;
    let counter = {};
    
    //slide rightWindow
    while (rightWindow < s.length){
        
        //construct counter object, save the rightWindow character into the counter object
        const char = s[rightWindow];
        if (! (char in counter)){
            counter[char] = 0;
        }
        counter[char]++;
        
        //if meeting the repeating character, slide leftWindow and update counter
        while (counter[char] > 1){
            const char2 = s[leftWindow];
            leftWindow++;
            counter[char2]--;
        }
        
        
        //caculate the longest substring
        longestSub = Math.max(longestSub, rightWindow - leftWindow + 1);
        
        
        rightWindow++;
    }
    
    return longestSub;
};