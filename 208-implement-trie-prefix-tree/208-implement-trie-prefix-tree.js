
var Trie = function() {
    this.children = {};
    this.word = false;
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!word){
        this.word = true;
        return;
    }
    
    let head = word[0];
    let tail = word.substring(1);
    
    if(!this.children[head]){
        this.children[head] = new Trie();
    }
    
    this.children[head].insert(tail);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word){
        return this.word;
    }
    
    let head = word[0];
    let tail = word.substring(1);
    
    if(!this.children[head]){
        return false;
    }
    
    return this.children[head].search(tail);
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let head = this.children;
		for (const char of prefix) {
			if (!head[char]) return false;
			head = head[char].children;
		}
		return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */