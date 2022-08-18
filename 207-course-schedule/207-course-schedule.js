/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //use DFS to check if there is a circle
    
    let adjList = [];
    let visit = [];
    
    constructAdjList();
    
    
    for (let i = 0; i < numCourses; i++){
        if (!dfs(i)) return false;
    }
    
    return true;
    
    function dfs(i){
        //base value
        if (visit[i]) return false;
        if (visit[i] === false) return true;
        
        visit[i] = true;
        
        for (const nei of adjList[i] ?? []){
            if (!dfs(nei)) return false;
        }
        visit[i] = false;
        return true;
        
    }
    
    
    function constructAdjList (){
        //[[1,2],[4,5],[3,4],...]
        //[[2],[],[4],[5]...]
        for (const pre of prerequisites){
            if(!adjList[pre[0]]){
                adjList[pre[0]] = [];
            }
            adjList[pre[0]].push(pre[1]);
        }
        
    }
};