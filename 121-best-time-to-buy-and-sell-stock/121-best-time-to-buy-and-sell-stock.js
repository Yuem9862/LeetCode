/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
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