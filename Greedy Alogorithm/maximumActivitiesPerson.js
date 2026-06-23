// Problem Description
// You are given start and end times of certain activities.

// Find the maximum number of activities that can be performed by a single person.

// Assume that a person can perform only one activity at a time.

// Input format
// First line is an integer N which is the number of activities.

// Then follow N lines denoting the start and end times of the activities

// Output format
// output the maximum activites a person can perform

// Sample Input 1
// 3

// 1 2

// 2 4

// 3 4

// Sample Output 1
// 2

// Explanation
// Person can perform activities from 1 - 2 and 2 - 4 and in total 2 activities

// Constraints
// 1<= N <= 200000

// 1<= times <= 10^9

class Pair
{
    constructor(first,second)
    {
        this.first = first;
          this.second = second;
    }
}
/**
 * @param {number[]} starting
 * @param {number[]} ending
 * @return {number}
 */
function activitySelection(starting,ending) {
    let activites = []
    for(let i = 0; i<starting.length; i++) {
        activites.push(new Pair(starting[i], ending[i]))
    }

    activites.sort((a,b) => a.second-b.second)
    let count = 1
    let lastEnd = activites[0].second

    for(let i = 1; i<activites.length; i++) {
        if(activites[i].first >= lastEnd) {
            count++
            lastEnd = activites[i].second
        }
    }

    return count
}