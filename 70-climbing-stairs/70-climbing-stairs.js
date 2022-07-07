/**
 * @param {number} n
 * @return {number}
 */

    //DP
    let cache = {};
    
    function climbStairs (n){
        if (n in cache){
            return cache[n];
        }else{
            if (n<=2){
                return n;
            }else{
                cache[n] = climbStairs(n-1) + climbStairs(n-2);
                return cache[n];
            }
        }
    }

    
    //CLOSURE
//     var climbStairs = function (){

//         let cache = {};

//          function climbClosure (n){
//             if (n in cache){
//                 return cache[n];
//             }else{
//                 if (n<=2){
//                     return n;
//                 }else{
//                     cache[n] = climbClosure(n-1) + climbClosure(n-2);
//                     return cache[n];
//                 }
//             }
//         }

//       return climbClosure;
//     }

//     const f = climbStairs();
//     console.log(f(5))