// Problem Description
// You are given a binary tree. You need to find the nodes in order of left to right which will be visible when the tree is viewed from the top.

// Top view :-

// image

// The visible nodes from left to right are 4, 2, 1 and 3.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes visible from top of the tree from left to right.

// Sample Input 1
// 7

// 10 15 25 12 40 16 20

// 4 -1 -1

// 1 5 3

// 5 6 -1

// 6 -1 7

// 2 -1 -1

// 3 2 4

// 7 -1 -1

// Sample Output 1
// 16 40 10 25 12

// Explanation
// The binary tree is:-

// image

// The visible nodes from left to right are 16, 40, 10, 25 and 12.

function topViewBinaryTree(root) {
    if(!root) return []

    let queue = [[root, 0]]
    let map = new Map()
    while(queue.length) {
        let [node, hd] = queue.shift()
        if(!map.has(hd)) {
            map.set(hd, node.val)
        }

        if(node.left) {
            queue.push([node.left, hd - 1])
        }

        if(node.right) {
            queue.push([node.right, hd + 1])
        }
    }

    let result = []
    let keys = [...map.keys()].sort((a,b) => a-b)
    
    for(let key of keys) {
        result.push(map.get(key))
    }

    return result
    
}