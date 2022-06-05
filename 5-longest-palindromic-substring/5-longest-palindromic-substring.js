/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    //OPTION 1: BUD techqique, one pointer
    let currIndex = 0;
    let currLongestStr = '';
    
    while (currIndex < s.length) {
        var left = isPalindrome(currIndex - 1, currIndex, s, '');
        var mid = isPalindrome(currIndex - 1, currIndex + 1, s, s[currIndex]);
        var right = isPalindrome(currIndex, currIndex + 1, s, '');
        
        if (left.length > currLongestStr.length) currLongestStr = left;
        if (mid.length > currLongestStr.length) currLongestStr = mid;
        if (right.length > currLongestStr.length) currLongestStr = right;
        
        currIndex ++;
    }
    
    return currLongestStr;
        
}; 
    
//helper function
var isPalindrome = function (start, end, str, palindrome) {
        while (start >=0 && end < str.length){
            if(str[start] === str[end]){
                palindrome = str[start] + palindrome;
                palindrome = palindrome + str[end];
                start--;
                end++;
                continue;
            }             
            break;
        }
        return palindrome;
}
        
       

    


//     //OPTION 2: Brute-force - Sliding window * check Big O is O(n^3)
//     //Dynamic Programming - O(n)
//     let rightWindow = s.length - 1,
//         subString = {1:s[0]};
    
//    //sliding the rightwindow
//     while (rightWindow > 0){
        
//         //sliding the leftwindow
//         let leftWindow = 0;
//         while (leftWindow < rightWindow){

//             //find the potential subarray
//             let charR = s[rightWindow];
//             let charL = s[leftWindow];
//             if (charR === charL){
//                 const arr = s.slice(leftWindow, rightWindow + 1);
//                 if (isPalindrome(arr)){
//                     subString = {...subString, [arr.length]:arr};
//                 }
//             }
//             leftWindow++;
//         }
//         rightWindow--;
//     }
     
 
//     //find the longest substring in subString;
//     let result =  Object.values(subString);
//     result = result[result.length - 1];
//     return result;
    
//     //helper function
//     var isPalindrome = function (string){
//     let stringReversed = string.split('').reverse().join('');
//         if (string === stringReversed) {
//             return true;
//         }else{
//             return false;
//         } 
//     }
    
    




