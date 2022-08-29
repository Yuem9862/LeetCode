
var WordDictionary = function() {
    this.children = {}
    this.word = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(!word){
        this.word = true;
        return;
    }
    
    let head = word[0];
    let tail = word.substring(1);
    
   if (!this.children[head]) {
        this.children[head] = new WordDictionary();
    }
    
    this.children[head].addWord(tail);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(!word){
        return this.word;
    }
    
    let head = word[0];
    let tail = word.substring(1);
    
    //for wild card '.'
    if(head === '.'){
        let result = false;
        
        for (const letter in this.children){
            result ||= this.children[letter].search(tail);
        }
        
        return result;
    }
    
    if(!this.children[head]){
        return false;
    }
    
    return this.children[head].search(tail);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */