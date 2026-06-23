// Problem Description
// You have a set of N jobs, each job has a deadline and a profit associated with it. You earn the profit for a job only if you complete it within its deadline. Each job takes 1 unit of time to complete and only one job can be scheduled at a time.

// Your task is to find the maximum profit that you can earn by selecting and scheduling the jobs optimally.

// Input format
// The first line contains an integer N, denoting the number of jobs in the set.

// The second and third lines contain N integers each, denoting the deadline for each job and the profit associated with it, respectively.

// Output format
// Return a single integer - the maximum profit that can be earned.

// Sample Input 1
// 4

// 4 1 1 1

// 20 10 40 30

// Sample Output 1
// 60

// Explanation
// Maximum profit is achieved by performing jobs 1 and 3 (20 + 40 = 60).

// Sample Input 2
// 5

// 2 1 1 2 1

// 100 19 25 27 15

// Sample Output 2
// 127

// Explanation
// Maximum profit is achieved by performing jobs 1 and 4 (100 + 27 = 127).

// Constraints
// 1 <= N <= 100000

// 1 <= deadline[i] <= 100

// 1 <= profit[i] <= 500

function jobSequencing(N,deadlines,profits) {
    let jobs = []
    for(let i =0; i<N; i++) {
        jobs.push({
            deadlines: deadlines[i],
            profit: profits[i]
        })
    }

    jobs.sort((a,b) => b.profit-a.profit)

    let maxDeadlines = 0;
    for(let job of jobs) (
        maxDeadlines = Math.max(maxDeadlines, job.deadlines)
    )

    let slots = new Array(maxDeadlines + 1).fill(false)

    let totalProfit = 0

    for(let job of jobs) {
        for(let slot = job.deadlines; slot >= 1; slot--) {
            if(!slots[slot]) {
                slots[slot] = true;
                totalProfit += job.profit;
                break;
            }
        }
    }

    return totalProfit

}