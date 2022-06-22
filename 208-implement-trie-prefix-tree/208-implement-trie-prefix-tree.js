// const trie = {
//   end: false,
//   children: {
//     r: {
//       end: false,
//       children: {
//         e: {
//           end: false,
//           children: {
//             x: {
//               end: true,
//               children: {},
//             },
//           },
//         },
//       },
//     },
//   },
// };


var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.trie;
    word.split('').forEach(char=>{
       if(!curr[char]){
           curr[char] = {};
       } 
        curr = curr[char];
    });
    
    curr.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.trie;
    for (const char of word.split('')){
        if(!curr[char]){
            return false;
        }
        curr = curr[char];
    }
    return (curr.end ? true : false);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.trie;
    for (const char of prefix.split('')){
        if(!curr[char]){
            return false;
        }
        curr = curr[char];
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