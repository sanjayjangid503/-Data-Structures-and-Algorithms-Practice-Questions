// Problem Description
// Given an array of N elements and an integer B, you have to find the count of distinct numbers in all windows of size B.

// You have to return an array of size N-B+1 where i'th element in the array is the number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1. If B > N, return an empty array.

// Input format
// There are 2 lines of input

// First line contains two space separated integers N and B.

// Second line contains N space separated integers representing the array A.

// Output format
// Return the array space separated in the first line.

// Function definition
// You have to implement the given function. It accepts three arguments - n, b and the input array. You have to return the new array as described.

// Sample Input 1
// 6 3

// 1 2 1 3 4 3

// Sample Output 1
// 2 3 3 2

// Explanation
// First range will be [1,2,1] , in which number of distinct elements are 2

// Second range will be [2,1,3], in which number of distinct elements are 3

// Third range will be [1,3,4], in which number of distinct elements are 3

// Fourth range will be [3,4,3], in which number of distinct elements are 2

// Constraints
// 1<=N<=100000

// 1<=B<=100000

// 1<=Ai<=10000



function countDistinctElements(n, b, arr) {
    const map = new Map();
    const ans = [];
    let i = 0, j = 0;
    while (j < n) {
        map.set(arr[j], (map.get(arr[j]) || 0) + 1);
        if (j - i + 1 == b) {
            ans.push(map.size);
            map.set(arr[i], map.get(arr[i]) - 1);
            if (map.get(arr[i]) === 0) {
                map.delete(arr[i]);
            }
            i++;
        }
        j++;
    }
    return ans;
}



// 1. Create a hashmap to store frequencies of elements.
// 2. Use two pointers:
//    a. i → start of the window
//    b. j → end of the window
// 3. Traverse the array by moving j:
//    a. add arr[j] into the hashmap
//    b. increase its frequency
// 4. When the window size becomes equal to B:
//    a. the number of distinct elements is equal to map.size
//    b. add this value into the answer array
// 5. Before sliding the window forward:
//    a. decrease frequency of arr[i]
//    b. if frequency becomes 0, remove that element from the hashmap
//    c. move i forward
// 6. Continue this process until all windows are processed.