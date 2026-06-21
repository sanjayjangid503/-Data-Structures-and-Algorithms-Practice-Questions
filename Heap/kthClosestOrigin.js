// Problem Description
// Given a list of points on the 2-D plane and an integer K. The task is to find K closest points to the origin and print them.

// The distance between two points on a plane is the Euclidean distance.

// You may return the answer in any order.

// Input format
// First line contains 2 integers N, K - Number of points and the integer K.

// Next N lines contain 2 integers x, y - The coordinates of the points.

// Output format
// Print K lines each containing the coordinates of the closest points.

// Sample Input 1
// 5 3

// 1 0

// -4 2

// 2 -3

// 3 5

// 0 2

// Sample Output 1
// 1 0

// 2 -3

// 0 2

// Explanation
// Distances of points are:

// Point (1,0) = sqrt(1)

// Point (-4,2) = sqrt(20)

// Point (2,-3) = sqrt(13)

// Point (3,5) = sqrt(34)

// Point (0,2) = sqrt(4)

// Points (1,0), (0,2) and (2,-3) have the least distance from the origin.

// Constraints
// 1 <= N <= 10^5

// 1 <= K <= N

// -10^6 <= Xi, Yi <= 10^6

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {

            let parent =
                Math.floor((index - 1) / 2);

            if (this.heap[parent].distance >= this.heap[index].distance) {
                break;
            }

            [this.heap[parent], this.heap[index]]
                =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (
                left < this.heap.length &&
                this.heap[left].distance > this.heap[largest].distance
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].distance > this.heap[largest].distance
            ) {
                largest = right;
            }

            if (largest === index) {
                break;
            }

            [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
    
    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return max;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }

        return this.heap[0];
    }

    size() {
        return this.heap.length
    }
}

function kClosestPointsToOrigin(points, k) {
    let maxHeap = new MaxHeap()
    for(let i = 0; i < points.length; i++) {
        let [x, y] = points[i]
        let distance = x * x + y * y

        if(maxHeap.size() < k) {
            maxHeap.insert({
                distance,
                point: [x, y]
            })
        } else if (distance < maxHeap.peek().distance) {
            maxHeap.extractMax()
            maxHeap.insert({
                distance,
                point: [x, y]
            })
        }

    }

    const result = []

    while(maxHeap.size() > 0) {
        result.push(
            maxHeap.extractMax().point
        )
    }

    return result
}