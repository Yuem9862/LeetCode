/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    
    //DFS
    let map = new Map();
    
    const dfs =(node)=>{
        if (!node) return null;
        if (!map.has(node)){
            const copyNode = new Node(node.val);
            map.set(node, copyNode);
            copyNode.neighbors = node.neighbors.map(dfs);
        }
        return map.get(node);
    }
    
    return dfs(node);
};