/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set();
    let numOfIsland = 0;
    
    //iterating the grid
    for (let row = 0; row < grid.length; row ++){
        for (let col = 0; col < grid[0].length; col++){
            if (explore(grid, row, col, visited)){
                numOfIsland++;
            }
        }
    }
    
    return numOfIsland;
    
    
    //helper function
    function explore(grid, r, c, visited){
        let rowInBound = 0<=r && r<grid.length;
        let colInBound = 0<=c && c<grid[0].length;
        
        if (!rowInBound || !colInBound) return false;
        
        if (grid[r][c] === '0') return false;
        
        let pos = r + ',' + c;
        
        if (visited.has(pos)) return false;
        
        visited.add(pos);
        
        explore (grid, r-1, c, visited);
        explore (grid, r+1, c, visited);
        explore (grid, r, c-1, visited);
        explore (grid, r, c+1, visited);
        
        return true;
        
        
        
    }
    
};