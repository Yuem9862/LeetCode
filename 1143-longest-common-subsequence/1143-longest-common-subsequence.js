/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    //dp - 2 dimensions
    
    let m = text1.length;
    let n = text2.length;
    
    //2 dimensions dp array
    const dp = new Array(m + 1).fill(0);
    
    for (let i = 0; i <= m; i++){
        dp[i] = new Array(n + 1).fill(0);
    }
    
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 0
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = 0
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let ch1 = text1.charAt(i - 1)
            let ch2 = text2.charAt(j - 1)
            if (ch1 === ch2) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
    
    
};