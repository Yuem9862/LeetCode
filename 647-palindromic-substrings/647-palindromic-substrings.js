/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let index = 0;
    let palindromes = [];

    s.split('').forEach((char)=>palindromes.push(char));
  
    while (index < s.length){
        
        const even = isPalindromes(index, index + 1, s, []);
        const odd = isPalindromes(index - 1, index + 1, s, []);
        
        if (even.length !==0) palindromes.push(...even);
        if (odd.length !==0) palindromes.push(...odd)
        
        index++;
    }


    return palindromes.length;

}


var isPalindromes =function (start, end, string, results){
    
    while (start >= 0 && end < string.length){
        
        if (string[start] === string[end]){
          let palindromes = string.slice(start, end + 1);
          results.push(palindromes)
          start--;
          end++;
          continue;
          
        }
        
        break;
    }
    
    return results;
    
}