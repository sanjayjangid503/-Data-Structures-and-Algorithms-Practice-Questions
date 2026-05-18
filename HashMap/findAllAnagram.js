// Problem Description
// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.


// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.


// Note that indexing starts at 0.

// Input format
// There is one line of input, containing two space-separated strings S and P.

// Output format
// First-line should contain the number of such starting indices.

// Next line should contain the indices in increasing order separated by a space.

// Sample Input 1
// aaba ab

// Sample Output 1
// 2

// 1 2

// Explanation 1
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

// Sample Input 2
// bacdgabcda abcd

// Sample Output 2
// 3

// 0 5 6

// Explanation 2
// The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

// Constraints
// 1 <= length(S), length(P) <= 10^6


function isEqual(need, window) {
  if (need.size != window.size) {
    return false
  }

  for (let [key, value] of need) {
    if (window.get(key) != value) {
      return false
    }
  }

  return true
}

function findAllAnagramsInAString(s, p) {

  let need = new Map();
  let window = new Map();

  let k = p.length;
  let result = [];

  // build need map
  for (let i = 0; i < p.length; i++) {
    need.set(p[i], (need.get(p[i]) || 0) + 1)
  }

  for (let i = 0; i < s.length; i++) {

    let char = s[i];

    // add current character
    window.set(char, (window.get(char) || 0) + 1)

    // remove left character
    if (i >= k) {
      let leftChar = s[i - k];

      window.set(leftChar, window.get(leftChar) - 1)

      if (window.get(leftChar) == 0) {
        window.delete(leftChar)
      }
    }

    // compare maps
    if (i >= k - 1) {
      if (isEqual(need, window)) {
        result.push(i - k + 1)
      }
    }
  }

  return result;
}