// Problem Description
// Given a binary search tree, write a function to find the node with the kth smallest value in it and return its value.

// Note: You may assume that k is always valid, 1 ≤ k ≤ BST's total elements.

// Input format
// Line1 to X: Details of the binary tree structure (refer section below for the format)

// Last line contains a single integer k.

// Output format
// Print the value of the kth smallest element.

// Constraints
// 1 <= Number of nodes (N) <= 105

// 1 <= Value of nodes <= 109

// 1 <= k <= N

// Sample Input 1
// 4

// 3 1 4 2

// 1 2 3

// 2 -1 4

// 3 -1 -1

// 4 -1 -1

// 1

// Sample Output 1
// 1

// Explanation 1
// image

// 1 is the 1st smallest element in this BST

function kthSmallestElementInABst(root, k) {
    let arr = []
    function inorder(root) {
        if(root == null) 
            return
        inorder(root.left)
        arr.push(root.val)
        inorder(root.right)
    }

    inorder(root)

    return arr[k-1]
}