// Problem Description
// You are given a string consisting of lower and upper case characters.
// You need to find the length of the longest palindrome which you can create by using the characters from the string.
// Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.

// Input format
// There are 2 lines of input

// First line contains the size of the string

// Second line contains the string.

// Output format
// Print the length of the longest palindrome possible.

// Sample Input 1
// 4 bbde

// Sample Output 1
// 3

// Explanation
// The possible 3 size palindrome strings are :- beb and bdb

// Constraints
// 1 <= Size of String <= 10^4


function longestPalindrome(n, str) {
    let map = new Map()
    let length = 0
    let isPaired = false
    for(let i = 0; i < str.length; i++) {
        let ch = str[i]
        if(map.has(ch)) {
            let prevFreq = map.get(ch)
            map.set(ch, prevFreq+1)
        } else {
            map.set(ch, 1)
        }
    }

    for(let count of map.values()) {
        if(count % 2 == 0) {
            length += count
        } else {
            length += (count-1)
            isPaired=true
        }
    }

    if(isPaired) {
        length += 1
    }

    return length
}



//1.  Traverse the string and store the frequency of each character in the hashmap.
//2.  Iterate through all frequencies:
//    a. If a frequency is even:
//       a. all occurrences of that character can be used in the palindrome
//    b. If a frequency is odd:
//       a. we can use frequency - 1 characters because palindrome sides need pairs
//       b. keep track that at least one odd frequency exists
// 3. After processing all characters:
//    a. if any odd frequency was present, add 1 to the answer because one odd character can be placed in the center of the palindrome