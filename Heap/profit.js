// Problem Description
// Given an array A, where A[i] is the number of vacant seats in the ith row in a stadium.

// There are B people in a queue waiting to buy the tickets.

// Each seat costs equal to the number of vacant seats in the row it belongs to.

// The task is to maximize the profit by selling the tickets to B people.

// NOTE: If all the tickets are sold then rest have to go empty handed.

// Input format
// First line contains two space separated integers N and B.

// Second line contains N space separated integers representing the array A.

// Output format
// Print answer in a single line

// Sample Input 1
// 2 3

// 2 3

// Sample Output 1
// 7

// Explanation
// First ticket will be for any seat of second row will be sold for Rs 3.

// Second ticket will be for any seat of second row which will be sold for 2 because only 2 seats were left in the second row at that time.

// Third ticket will be for any seat in first row will be sold for 2.

// Constraints
// 1 <= N <= 100000

// 1 <= |A| <= 100000

// 1 <= B <= 200000

function maxKProfit(n, b, a) {
    let profit = 0;
    let maxHeap = new MaxHeap()

    for(let i = 0; i < n; i++) {
        maxHeap.insert(a[i]);
    }
    for(let i = 0; i < b; i++) {
        let maxSeats = maxHeap.extractMax()
        profit += maxSeats
        if(maxSeats > 1) 
            maxHeap.insert(maxSeats-1)
    }

    return profit
}