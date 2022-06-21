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
 * @return {boolean}
 */



var isValidBST = function(root) {
    
    let valid = true;
    if (root === null) return true;
    
    valid = valid && validateLeft(root.left, root.val) && validateRight(root.right, root.val);
    valid = valid && isValidBST(root.left) && isValidBST(root.right);
    
    return valid;
};

var validateLeft = function(root, nodeValue){
    let valid = true;
    if (root === null) return true;
    if (root.val >= nodeValue) return false;
    valid = valid && validateLeft(root.left, nodeValue) && validateLeft(root.right, nodeValue);
    
    return valid;
}

var validateRight = function (root, nodeValue) {
    let valid = true;
    if(root == null ) return true;
    if(root.val <= nodeValue) return false;
    valid = valid && validateRight(root.left, nodeValue) && validateRight(root.right, nodeValue);
    return valid;
}