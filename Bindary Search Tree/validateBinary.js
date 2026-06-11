// Problem Description
// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with values less than the node's value.

// The right subtree of a node contains only nodes with values greater than the node's value.

// Both the left and right subtrees must also be binary search trees.

// Input format
// Line1: Number of Test cases (T)

// Line2 to X: First Test Case’s binary tree structure (refer section below for the format)

// LineX+1 to Y: Second Test Case’s binary tree structure and so on.

// Output format
// Print "Yes" if the tree is a valid BST, else print "No", for every Test Case on a separate line.

// Constraints
// 1 <= T <= 1000

// 1<= Number of Nodes <= 10000

// 0 <= Node values <= 10^5

// It is guaranteed that the sum of Number of tree nodes across all test cases will be less than 500000.

// Sample Input 1
// 1

// 3

// 2 1 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 1
// Yes

// Explanation 1
// image

// The root node's value is 2 which is greater than 1 and lesser than 3. Therefore it is a valid BST.

// Sample Input 2
// 1

// 5

// 5 1 4 3 6

// 1 2 3

// 2 -1 -1

// 3 4 5

// 4 -1 -1

// 5 -1 -1

// Sample Output 2
// No

// Explanation 2
// image

// The root node's value is 5 which is greater than 4. This violates the condition of a valid BST. Therefore it is not a valid BST

// Resources


function validate(root, min, max) {
    if(root == null) {
        return true
    }

    if(root.val >= max || root.val <= min) {
        return false
    }

    return validate(root.left, min, root.val) && validate(root.right, root.val, max)
}

function validateBinarySearchTree(root) {
    return validate(root, -Infinity, Infinity)
}