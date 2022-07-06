var Node = function() {
    this.children = {}
    this.endOfWord = false
}
var WordDictionary = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;
    
    for (const char of word){
       
        if (! (char in curr.children)){
            curr.children[char] = new Node();
        }
        
        curr = curr.children[char];
    };
    
    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
   //dfs
    
    const dfs = function(index, node){
        let curr = node;
         for (let i = index; i < word.length; i++) {
            const char = word.charAt(i);
            
            if (char === '.') {
                for (const child of Object.values(curr.children)) {
                    if (dfs(i + 1, child)) return true;
                }
                return false;
            } else {
                if (!(char in curr.children)) return false;
              curr = curr.children[char]   
               
            }
        }
        
        return curr.endOfWord;
    };
    
    
    
    return dfs(0, this.root);
   
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */