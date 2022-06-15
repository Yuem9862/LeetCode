/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    //SOLUTION 1: Recursive
//     if (p === null && q === null){
//         return true;
//     }
    
//     if ((p == null && q != null) || (q == null && p != null)) {
// 		return false;
// 	}
    
//     if (p.val !== q.val){
//         return false;
//     }
        
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    
    //SOLUTION 2: Iterative
    
    let stack = [];
    stack.push([p, q]);
    
    while (stack.length !==0){
        let nodes = stack.pop();
        let n1 = nodes[0];
        let n2 = nodes[1];
        if (!n1 && !n2) continue;
        if (!n1 || !n2) {
            return false;
        }
        if (n1.val !== n2.val) {
            return false;
        }
        stack.push([n1.left, n2.left]);
        stack.push([n1.right, n2.right]);        
    }
    return true;
}
    
   
    
  
