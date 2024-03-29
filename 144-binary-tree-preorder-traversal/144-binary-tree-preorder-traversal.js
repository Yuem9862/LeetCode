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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
       
    //iterative - using stack
    
//     if (!root){
//         return [];
//     };
    
//     let stack = [root];
//     let ans= []
       
//     while(stack.length){
//         const curr = stack.pop();
//         ans.push(curr.val);
        
//         if(curr.right){
//             stack.push(curr.right)
//         };
//         if(curr.left){
//             stack.push(curr.left)
//         };
//     }
    
//     return ans;
    
    // recursive
    
    let ans = [];
    
    function traverse(root){
        if (!root){
            return;
        }

        ans.push(root.val);

        if (root.left){
            traverse(root.left);
        }
        if (root.right){
            traverse(root.right);
        }
    }
    
    traverse(root);
    
    return ans;
};