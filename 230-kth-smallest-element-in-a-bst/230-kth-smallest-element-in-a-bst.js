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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //store the sorted tree as a stack
    let arr = [];
    
    //use dfs to sort nodes and push nth nodes into the stack;
    
    
    const dfs =(node)=>{
        if(arr.length !==k){
            if(node.left){
                dfs(node.left);
            }
            arr.push(node.val);
            if(node.right){
                dfs(node.right);
            }
        }
    }
    
    dfs(root);
    
    //return the k-1th element in the stack
    return arr[k - 1];
    
};

