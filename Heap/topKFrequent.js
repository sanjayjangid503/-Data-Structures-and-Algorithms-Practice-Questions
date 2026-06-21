// Problem Description
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Input format
// First line contains an integer N - Number of elements in the array.

// Second line contains N integers - The array elements.

// Third line contains the integer k.

// Output format
// Print k integers in a single line.

// Sample Input 1
// 7

// 2 8 2 7 4 2 4

// 2

// Sample Output 1
// 2 4

// Explanation
// Frequency of 2: 3

// Frequency of 4: 2

// Frequency of 7: 1

// Frequency of 8: 1

// The two most frequent elements in the given array are 2 and 4.

// Constraints
// 1 <= N <= 10^5

// 1 <= k <= Number of unique elements in the array.

// 0 <= array elements <= 10^5


function topKFrequent(n, nums, k) {
  let freqMap = new Map()

  for(let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const minHeap = new MinHeap()

  for(let [num, freq] of freqMap) {
      minHeap.insert([num, freq])

      if(minHeap.size() > k) {
        minHeap.extractMix()
      }
  }

  const result = []

  while(minHeap.size()) {
    result.push(minHeap.extractMix()[0])
  }

  return result
}