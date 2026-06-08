// Problem Description
// Given a binary tree, return the root of the mirror binary tree. Mirror binary tree of a binary tree is a binary tree with left and right children of all nodes interchanged.

// image

// Input format
// First line contains an integer t - Number of test cases.

// First line of each test case contains an integer n - Number of nodes.

// Second line of each test case contains n integers - Value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Print the inorder traversal of the mirror tree in a separate line for each test case.

// Sample Input 1
// 2

// 4

// 10 5 9 7

// 1 2 3

// 2 -1 -1

// 3 4 -1

// 4 -1 -1

// 3

// 4 9 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 1
// 9 7 10 5

// 3 4 9

// Explanation
// First test case:

// image

// Second test case:

// image

// Constraints
// 1 <= t <= 10

// 1 <= n <= 10^5

// 1 <= value of nodes <= 10000



function mirrorBinaryTree(root) {
    if(root == null) {
        return null
    }

    let temp = root.left
    root.left = root.right
    root.right = temp

    mirrorBinaryTree(root.left)
    mirrorBinaryTree(root.right)

    return root
    
}