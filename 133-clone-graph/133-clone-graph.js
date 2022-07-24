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
var cloneGraph = function(node, map = new Map()) {
    
    //Map
    
    //base value
    if (!node) return null;
    
    //if the node is in the map, return the copy;
    if (map.has(node)){
        return map.get(node);
    }
    //if the node is not in the map, create the copy;
    let copy = new Node(node.val);
    map.set(node, copy);
    //create the neightbours 
    for (const neighbor of node.neighbors){
        copy.neighbors.push(cloneGraph(neighbor, map));
    }
    
    return copy;
};