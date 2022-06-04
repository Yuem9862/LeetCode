/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //convert the string into an array
    let sArray = s.toLowerCase();
    sArray = sArray.replace(/[^a-z0-9]/g,'');
    sArray = sArray.split('');
    let arrayCopy = [...sArray]
    
    //OPTION 1:create a stack
    // let stack = [];
    // while(sArray.length !==0){
    //     stack.push(sArray.pop());
    // }
    
    //OPTION 2: array.reverse()
    const stack = arrayCopy.reverse();

    //check
    // if (arrayCopy.join('') ===stack.join('')){
    //     return true;
    // }else{
    //     return false;
    // }
    
    if (sArray.join('') ===stack.join('')){
        return true;
    }else{
        return false;
    }

};