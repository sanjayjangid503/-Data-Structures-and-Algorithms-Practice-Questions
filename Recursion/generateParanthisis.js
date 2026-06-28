// Problem Description
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Well-formed parentheses means that each opening symbol has a corresponding closing symbol and the pairs of parentheses are properly nested.

// Input format
// An integer n

// Output format
// All possible well-formed parentheses combinations with n pairs, each on a new line

// Constraints
// 0 <= n <= 15

// Sample Input 1
// 2

// Sample Output 1
// ()()

// (())

// Explanation 1
// These are the only 2 possible combinations with 2 pairs of parentheses, which are balanced.


function generate(open, close, current, result, n)  {
    if(current.length === 2 * n) {
        result.push(current)
        return;
    }

    if(open < n) {
        generate(open + 1, close, current + "(", result, n)
    }

    if(close < open) {
        generate(open, close + 1, current + ")", result, n)
    }
}

function balancedBraces(n){

    let result = []
    generate(0, 0, "", result, n)
    return result
    
}