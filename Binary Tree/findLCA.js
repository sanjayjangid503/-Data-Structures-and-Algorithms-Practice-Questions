// Problem Description
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. LCA between two nodes p and q is defined as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself)

// Note: For the solution method provided, the input parameters are the nodes p and q, not node values. The return value expected from the method is the LCA node and not the node’s value. The below Input and Output format show node values which the Driver file will take care of; the user doesn’t have to edit the Driver code.

// Input format
// Line 1 has T: no of test cases given.

// Line 2 to X: First test case details with first set of lines giving the binary tree structure (refer section below for the format) and last line giving two node values (integers) whose LCA node has to be found.

// Line X+1 to Y: Second Test case details and so on.

// Output format
// Print the value of the node which is the common ancestor of two nodes.

// Constraints
// 1 <= T <= 1000

// 1 <= N <= 10000, Number of nodes in the tree

// 0 <= Node values <= 10^9

// It is guaranteed that the sum of the number of tree nodes for all test cases will be < 500000.

// Sample Input 1
// 1

// 5

// 2 3 7 8 9

// 1 2 3

// 2 4 5

// 3 -1 -1

// 4 -1 -1

// 5 -1 -1

// 7 2

// Sample Output 1
// 2

// Explanation 1
// image

// The LCA of node with value 2 and node with value 7 is the node with value 2.

// Instructions to create custom input for a Binary Tree
// In order to specify a binary tree that can be used as custom input to the problem, you’ll need to follow this convention.

// Line 1: Number of nodes in the Binary Tree (N)

// Line 2: N space separated node values. The position of the Nodes on this line will be used to refer to them in the below lines, starting from 1.

// Line 3 to N+2: Lines specifying the child nodes for each of the N nodes

// Format of each line (space separated): Parent_node Left_child_node Right_child_node


function commonAncestor(root, p, q){
    if(root == null) {
        return null
    }

    if(root === p || root === q) {
        return root;
    }

    let left = commonAncestor(root.left, p, q)
    let right = commonAncestor(root.right, p, q)

    if(left && right) {
        return root
    }

    return left ? left : right
}