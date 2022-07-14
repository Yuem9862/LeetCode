/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    //convert nums into a heap
    let heap = {};
    
    for (const num of nums){
        
        if (!heap[num]){
            heap[num] = 0;
        }
        
        heap[num]++;
    }


  
    //use k to return result from the heap
    
    let counters = Object.entries(heap).sort((a,b)=>b[1]-a[1]);

    let result = [];
  
    for (let i = 0; i < k; i++){
      result[i] = counters[i][0];
    }
    
    return result;
};