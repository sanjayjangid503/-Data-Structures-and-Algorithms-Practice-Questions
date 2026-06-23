// Problem Description
// Given weights and values of N items, we have to put these items in a knapsack of capacity W in such a way that maximum capacity is used.

// Note: It is allowed to break items for maximizing the total value of knapsack, i.e., it is not necessary to take the whole item.

// Input format
// The first line contains 2 integers, N and W denoting the number of items and the capacity of the knapsack.

// The second line contains N integers, with the i-th one representing the weight of the i-th item.

// The third line again contains N integers, with the i-th number representing the value of the i-th item.

// Output format
// Print a double value representing the maximum value that can be obtained with the given knapsack capacity.

// The output would be considered correct upto 6 digits of precision.

// Sample Input 1
// 3 4

// 2 2 3

// 100 10 120

// Sample Output 1
// 180.00

// Explanation
// Total maximum value of item we can have is 180.00 for the given capacity of sack by taking the whole of item 1 and (2/3)rd of item 3.

// Constraints
// 1 <= N <= 100000

// 1 <= W <= 100000

// 1 <= weights[i] <= 200000

// 1 <= values[i] <= 1000000000

// Note: It is recommended to use double instead of float to store values in C++ submissions.

// Resource


class Pair {
    constructor(weight, value) {
        this.weight = weight;
        this.value = value;
        this.ratio = value/weight;
    }
}
function fractionalKnapsack(N,W,weights,values) {
    let items = []
    for(let i = 0; i<N; i++) {
        items.push(new Pair(weights[i], values[i]))
    }
    
    items.sort((a,b) => b.ratio - a.ratio)
    let totalValue = 0
    for(let i = 0; i<N; i++) {
        if(items[i].weight <= W) {
            totalValue += items[i].value;
            W -= items[i].weight;
        } else {
            totalValue += items[i].ratio * W
            break;
        }
    }
    return totalValue
}