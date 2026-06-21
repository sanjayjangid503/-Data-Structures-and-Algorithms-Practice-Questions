// Problem Description
// Given K sorted arrays, possibly of different sizes, merge them and print the sorted output.

// Input format
// First line contains an integer K - Number of arrays.

// For each array there is two lines of input:

// First line contains an integer n - Size of array.

// Second line contains n integers - The array.

// Output format
// Print in single line, the elements in sorted order.

// Sample Input 1
// 3

// 3

// 2 4 7

// 1

// 8

// 4

// 2 5 5 9

// Sample Output 1
// 2 2 4 5 5 7 8 9

// Explanation
// Elements of 1st array - 2, 4, 7.

// Elements of 2nd array - 8.

// Elements of 3rd array - 2, 5, 5, 9.

// Merging the elements and printing them in sorted order will give - 2, 2, 4, 5, 5, 7, 8, 9.

// Constraints
// 1 <= K <= 10^5

// 1 <= n <= 10^5

// -10^6<= Array elements <= 10^6

// Note: Total number of elements will be less than 10^6.

class Node {
    constructor(val, row, col) {
        this.val = val;
        this.row = row;
        this.col = col;
    }
}


function mergeKSortedArrays(arr) {
    const minHeap = new MinHeap()
    const result = []
    for(let row = 0; row < arr.length; row++) {
        minHeap.insert(
            new Node(
                arr[row][0],
                row,
                0
            )
        )
    }

    while(minHeap.size() > 0) {
        const current = minHeap.extractMin()
        result.push(current.val)

        const nextCol =  current.col + 1

        if(nextCol < arr[current.row].length) {
            minHeap.insert(
                new Node (
                    arr[current.row][nextCol],
                    current.row,
                    nextCol
                )
            )
        }
    }

    return result
}