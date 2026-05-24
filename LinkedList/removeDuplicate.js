// Problem Description
// FIX THE CODE -

// Given a linked list(need not be sorted) with duplicates, remove all duplicates, such that only the first occurrence of each element must remain in the LL, and return the head.

// Input format
// There are 2 lines of input

// First-line contains N, the number of elements in the linked list.

// The next line contains N space-separated integers, elements of the linked list.

// Output format
// Print the linked list after removing duplicates. Only the first occurrence of an element should be present in the list.

// Function definition
// The function you have to complete accepts the head as an argument. You will make the necessary changes, and return the head.

// Sample Input 1
// 5

// 1 2 2 3 3

// Sample Output 1
// 1 2 3

// Explanation 1
// Node 2 and 3 have 2 occurrences each.

// Sample Input 2
// 5

// 3 1 3 1 4

// Sample Output 2
// 3 1 4

// Explanation 1
// The first occurrence of nodes 3 and 1 remains in the list and 4 has no duplicates.

// Constraints
// 0 <= Number of nodes <= 10^5

// -10^9 <= ListNode.val <= 10^9



function removeDuplicates(head) {
      let set = new Set()
      let curr = head
      let prev = null
      while(curr != null) {
            if(set.has(curr.val)) {
                  prev.next = curr.next
            } else {
                  set.add(curr.val)
                  prev = curr
            }

            curr = curr.next
      }

      return head
}