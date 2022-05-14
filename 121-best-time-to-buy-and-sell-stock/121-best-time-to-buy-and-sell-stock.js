/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0;
    let minPrice = prices[0];
    
    for (let i = 0; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i])
        let currentProfit = prices[i] - minPrice;
        profit = Math.max(profit,currentProfit)
    }
    
    return profit;
}