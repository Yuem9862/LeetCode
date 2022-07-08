/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //DP - BOTTOM DOWN
    const dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0;
    for(const coin of coins ){
        for(let i = coin; i <= amount; i++ ){
            dp[i] = Math.min(dp[i] , dp[i-coin] + 1);
        }
    }
    const ans = dp[dp.length - 1];
    return ans == amount+1 ? -1 : ans;

    
};