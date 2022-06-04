/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    //sliding window
    let leftWindow = 0,
        rightWindow = 0,
        counter = {},
        maxCharCount = 0,
        maxSubLength = 0;
    
    //sliding the right window
    while (rightWindow < s.length){
        let char = s[rightWindow]
        if (!(char in counter)){
            counter[char] = 0;
        }
        counter[char]++;
        
        //update the maximum charCoun
        maxCharCount = Math.max(maxCharCount,counter[char]);
        
        //sliding the left window
        if (rightWindow - leftWindow + 1 > maxCharCount + k ){
            let char2 = s[leftWindow];
            counter[char2]--;
            leftWindow++;
        }
        
        maxSubLength = Math.max(maxSubLength, rightWindow - leftWindow + 1);
        
        rightWindow ++;
    }
    
    return maxSubLength;
};