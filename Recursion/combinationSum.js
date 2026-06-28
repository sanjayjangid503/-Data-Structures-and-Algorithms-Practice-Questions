// Problem Description
// Given an array of distinct integers - candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.

// You may return the combinations in sorted order.

// The same number may be chosen from candidates an unlimited number of times.

// Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// Elements in each combination must be in non-decreasing order.

// If no combinations are possible, the program prints NA.

// Input format
// The first line contains 2 integers n, target which denotes the number of candidates and the target to be reached respectively.

// The next n lines contain the candidate integers of the n candidates.

// Output format
// Return a list of all unique combinations of candidates where the chosen numbers sum to target.

// Return the combinations in sorted order.

// If no combinations are possible, the program prints NA.

// Sample Input 1
// 4 7

// 2

// 3

// 6

// 7

// Sample Output 1
// [[2,2,3],[7]]

// Explanation
// The given combination of candidates sum up to the target.

// Constraints
// 1 <= candidates.length <= 30

// 1 <= candidates[i] <= 200

// All elements of candidates are distinct.

// 1 <= target <= 500


function solve(index, target, current, result, candidates) {
    if(target === 0) {
        result.push([...current])
        return;
    }

    if(target < 0 || index === candidates.length) {
        return;
    }

    current.push(candidates[index]);

    solve(index, target - candidates[index], current, result, candidates)
    current.pop()

    solve(index+1, target, current, result, candidates)
}

function combinationSum(candidates, target) {
    const result = []
    solve(0, target, [], result, candidates)
    return result
}