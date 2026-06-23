// Problem Description
// Given arrival and departure times of all trains that reach a railway station.

// Find the minimum number of platforms required for the railway station so that no train is kept waiting.

// Consider that all the trains arrive on the same day and leave on the same day.

// Arrival and departure time can never be the same for a train but we can have the arrival time of one train equal to the departure time of the other.

// At any given instance of time, the same platform can not be used for both departure of a train and arrival of another train.

// In such cases, we need different platforms.

// Input format
// an integer N denoting the number of trains

// then N pairs x,y

// x is the arrival time of ith train

// y is the departure time of ith train

// Output format
// Return the minimum number of platforms required for given schedule of trains

// Sample Input 1
// 3

// 1 2

// 2 3

// 3 4

// Sample Output 1
// 2

// Explanation
// first platform for the trains with time 1-2 and 3-4

// second platform for train with time 2-3

// Constraints
// 1<= N <= 200000

// 1<= time <= 10^9


function minimumPlatforms(n, arr, dep) {
    arr.sort((a,b) => a-b)
    dep.sort((a,b) => a-b)

    let i = 0;
    let j = 0;

    let platform = 0;
    let maxPlatform = 0

    while(i < n) {
        if(arr[i] <= dep[j]) {
            platform++
            maxPlatform = Math.max(maxPlatform, platform)
            i++
        } else {
            platform--
            j++
        }
    }

    return maxPlatform
}