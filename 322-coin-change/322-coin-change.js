/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //DP - BOTTOM DOWN\
    // coins [1, 2, 5], acount = 11
    // initial: [0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]

    //             0  1  2  3  4  5  6  7  8  9  10  11
    // coin of 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    // coin of 2: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]
    // coin of 5: [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]
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



