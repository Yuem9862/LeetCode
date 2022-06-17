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
    
    //BFS with queue
    
    let queue = [root];
    let levelArr = [];
    
    while(queue.length){
        let childArr = [];
        let valArr = [];
        
        for (const node of queue){
            
            if(!node) continue;
            valArr.push(node.val);
            childArr.push(node.left)
            childArr.push(node.right)
            
        }
        
        if(valArr.length){
            levelArr.push(valArr)
        }
        
        queue = childArr;
    }
    return levelArr;
}

