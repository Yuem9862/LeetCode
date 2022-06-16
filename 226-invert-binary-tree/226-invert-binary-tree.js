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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //SOLUTION 1: Recursive
//     if (!root) return null;
//     let temp = root.left;
//     root.left = root.right;
//     root.right = temp;

//     invertTree(root.left);
//     invertTree(root.right);
    
//     return root;
    
    //SOLUTION 2: Iterative (BFS)
       
    let queue = [root];
    
    while (queue.length > 0){
        
        const child = []
        
        for (const node of queue){
            if (!node){
                continue;
            }
            
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            
            child.push(node.left);
            child.push(node.right);
            
        }
        queue = child;
    }
    
    return root;
    
};