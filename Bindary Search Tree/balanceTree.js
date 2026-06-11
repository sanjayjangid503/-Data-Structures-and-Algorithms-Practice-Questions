// Problem Description
// Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

// A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

// Input format
// First line contains an integer T - Number of test cases.

// For each test case:-

// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output the balanced tree in the same format as given in input.

// Note: You just have to return the balanced tree’s root, the input/output is handled.

// Sample Input 1
// 1

// 4

// 40 20 10 30

// 1 2 -1

// 2 3 4

// 3 -1 -1

// 4 -1 -1

// Sample Output 1
// 1

// 4

// 20 10 30 40

// 1 2 3

// 2 -1 -1

// 3 -1 4

// 4 -1 -1


function balanceBST(root) {
    const arr = []
    function inorder(root) {
        if(root == null)
            return;
        inorder(root.left)
        arr.push(root.val)
        inorder(root.right)
    }

    inorder(root)

    function build(s, e) {
        if(s > e) 
            return null
        const mid = Math.floor((s + e)/2);
        const root = new TreeNode(arr[mid])
        root.left = build(s, mid-1)
        root.right = build(mid+1, e)

        return root
    }
    return build(0, arr.length-1)
}