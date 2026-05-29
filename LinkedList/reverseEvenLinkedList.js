
// Problem Description
// Given a singly linked list of integers, reverse every contiguous set of nodes that have only even values.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// Output format
// Return the head of the modified list

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 8

// 1 2 3 3 4 6 8 5

// Sample Output 1
// 1 2 3 3 8 6 4 5

// Explanation 1
// There are two sublists of even elements, which [2] and [4->6->8]. The sublist [4->6->8] has been reversed and the single sublist [2] need not be reversed.

// Sample Input 2
// 6

// 1 3 2 5 4 6

// Sample Output 2
// 1 3 2 5 6 4

// Explanation 2
// There are two sublists of even elements which are [2] and [4 6]. The [4,6] sublist has been reversed and the single sublist [2] need not be reversed. Rest of the odd values remain constant.


function reverseEvenElements(head) {
      let dummy = new ListNode(0)
      dummy.next = head

      let prev = dummy
      let curr = head

      while(curr) {
            if(curr.val % 2 !== 0) {
                  prev = curr
                  curr = curr.next
                  continue
            }

            let evenStart = curr
            while(curr && curr.val % 2 === 0) {
                  curr = curr.next
            }

            let nextOdd = curr

            let p = nextOdd
            let node = evenStart

            while(node !== nextOdd) {
                  let next = node.next
                  node.next = p
                  p = node
                  node = next
            }

            prev.next = p
            prev = evenStart
      }

      return dummy.next
}