
// Problem Description
// Given an array A having N elements, the task is to find the next greater element(NGE) for each element of the array in order of their appearance in the array. If no such element exists, output -1. This should be achieved with a time complexity of O(n).

// Input format
// There are 2 lines of input

// The first line contains an integer N denoting the size of the array.

// The second line contains N space separated positive integers denoting the values in the array A.

// Output format
// Print N space separated integers, which are the next greater element for each array element. If no such greater element exists for any element, output -1

// Function definition
// You have to implement the given function. It accepts the original array as an argument, and returns the new next greater element array.

// Constraints
// 1 <= N <= 10^5

// 0 <= Values in the array <= 10^9

// Sample Input 1
// 4

// 1 3 2 4

// Sample Output 1
// 3 4 4 -1

// Explanation 1
// In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4, there is no such greater element, hence -1.



function nextLargerElement(n, arr) {
    let stack = []
    let ans = new Array(n).fill(-1)
    stack.push(0)
    for(let i = 1; i<n; i++) {
        let next = arr[i]
        while(stack.length > 0 && arr[stack[stack.length - 1]] < next) {
            let index = stack.pop()
            ans[index] = arr[i]
        }
        stack.push(i)
    }
    return ans
}

let arr = [1, 3, 2, 4]
let n = 4

nextLargerElement(n, arr)


// Steps
//1.  Create an answer array and initialize all values with -1.
//  a. means no greater element exists on the right side.
//2. Traverse the array from left to right.
//3. For every current element:
//   a. compare it with the element represented by the top index of the stack.
//   b. while the current element is greater than the stack top element:
//      a. remove the index from the stack
//      b. update its answer with the current element because we found its next greater element
//4. After processing all smaller elements from the stack, push the current index into the stack.
//5. At the end, indexes still remaining in the stack do not have any greater element on their right side, so their answer remains -1.