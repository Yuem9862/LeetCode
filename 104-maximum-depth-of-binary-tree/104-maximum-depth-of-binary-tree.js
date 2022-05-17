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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  let max = 1;

  const traverse = function(root, depth = 1){
   
    max = Math.max(max, depth);

    if(root.left){
      traverse(root.left, depth + 1)
    }

    if(root.right){
      traverse(root.right, depth + 1)
    }
  }

  traverse(root);
  return max;
};