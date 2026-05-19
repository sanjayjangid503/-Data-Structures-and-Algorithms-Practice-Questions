// Problem Description
// Given a string S containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Input format
// First line contains a string - The string S.

// Output format
// Print the length of the longest valid substring.

// Sample Input 1
// ()(()(())

// Sample Output 1
// 6

// Explanation
// The last 6 characters of the string forms the longest valid substring i.e. "()(())".

// Constraints
// 0 <= length of string <= 10^5




function longestValidParentheses(s) {
   // Create a stack ds
   // set -1 as base in stack
   // for each char in s
        // if its '('
            // push its idx
        // else
            // pop the stack
            // if the stack is not empty
                // i - stack top
            // else
                // reset the base to curr idx
    
    const stack = []
    let ans = 0
    stack.push(-1)
    for(let i = 0; i<s.length; i++) {
        if(s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop()
            if(stack.length > 0) {
                ans = Math.max(ans, i - stack[stack.length - 1])
            } else {
                stack.push(i)
            }
        }
    }

    return ans

}