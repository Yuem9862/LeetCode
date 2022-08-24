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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

  //Recursive
  // if (!root) {
  //   return false;
  // }

  // if (compare(root, subRoot)) {
  //   return true;
  // }

  // return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);



  //BFS
  if (!root || !subRoot) return false;

  let queue = [root];

  while (queue.length) {

    let curr = queue.shift();

    if (curr.val === subRoot.val) {
      if (compare(curr, subRoot)) {
        return true;
      }
    }

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return false;
};


//helper function - DFS
var compare = function(root, subRoot) {

  if (!root && !subRoot) return true;

  if (!root || !subRoot || root?.val !== subRoot?.val) return false;

  return (compare(root.left, subRoot.left) && compare(root.right, subRoot.right));
}