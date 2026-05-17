// Problem Description
// Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// For an input string to be valid:

// Open brackets must be closed by the same type of brackets.( can be closed by ) only

// Open brackets must be closed in the correct order. ([]) is valid, ([)] is not.

// Note: An empty string is also considered valid.

// Input format
// One line containing a string with a bracket sequence.

// Output format
// Return "true" if balanced, false otherwise.

// Constraints
// 0 <= | S | <= 10^5

// Sample Input 1
// ()[]{}

// Sample Output 1
// true

// Explanation 1
// The given sequence of brackets is valid as per the rules specified.

// Sample Input 2
// ([)]

// Sample Output 2
// false

// Explanation 2
// The given sequence of brackets is invalid as per the rules specified.



function validParenthesis(s) {
    let stack = []
    let arr = s.split("")
    for(let i = 0; i < arr.length; i++) {
        let ch = arr[i]
        if(ch == "(" || ch == "[" || ch == "{") {
            stack.push(arr[i])
        } else {
            if(stack.length == 0) {
                return false
            }

            let top = stack[stack.length - 1]

            if(ch == ")" && top == "(" || ch == "]" && top == "[" || ch == "}" && top == "{") {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length == 0
}