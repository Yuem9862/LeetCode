/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    //solution 1: O(n^2)
//     if (prices.length<2){
//       return false;
//     };
    
//     let maxProfit = 0;
//     for (let i = 0; i< prices.length; i++){
//      for (let j = i + 1; j <prices.length; j++){
//          if(prices[j]>prices[i]){
//            let currentProfit = prices[j] - prices[i];
//          maxProfit = currentProfit > maxProfit ? currentProfit: maxProfit;
//          }
//      }
//     }
//     return maxProfit;
    
    
    //solution 2
    let lowestPrice = prices[0];
    let currentPrice;
    let highestProfit = 0;
    
    for (let i = 0; i <prices.length; i++){
        currentPrice = prices[i]
        lowestPrice = Math.min(currentPrice, lowestPrice);
        highestProfit = Math.max(currentPrice-lowestPrice, highestProfit)
    }
    
    return highestProfit;
    
}