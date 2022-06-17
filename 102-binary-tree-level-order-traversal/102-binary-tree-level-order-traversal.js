/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //BFS
    
    if (root === null) return [];
    let output = [[root.val]];
    
    let queue = [root];
    while (queue.length){
        
        let child = [];
  
        for(const nodes of queue){
            if (nodes === null){
                continue;
            }
            child.push(nodes.left);     
            child.push(nodes.right);
              
        }
                
        let result = [];
        for (const nodes of child){
            if (nodes === null){
                continue;
            }
            result.push(nodes.val);
        }   
        
        queue = child;
        if (result.length){
        output.push(result);
        }
    }
    return output;
};